'use strict';

const { spawn } = require('child_process');
const path = require('path');

const ENABLE_GIT_PUSH = process.env.ENABLE_GIT_PUSH_AFTER_ARTICLE_SUBMIT === 'true';
const ENABLE_RESTART = process.env.ENABLE_RESTART_AFTER_ARTICLE_SUBMIT === 'true';
const PM2_APP_INDEX = process.env.PM2_APP_INDEX || '1';

function runGit(args, cwd) {
  return new Promise((resolve, reject) => {
    const proc = spawn('git', args, {
      cwd: cwd || process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let stdout = '';
    let stderr = '';
    proc.stdout?.on('data', (chunk) => { stdout += chunk; });
    proc.stderr?.on('data', (chunk) => { stderr += chunk; });
    proc.on('close', (code) => {
      if (code === 0) resolve({ stdout, stderr });
      else reject(new Error(`git ${args[0]} exited ${code}: ${stderr || stdout}`));
    });
    proc.on('error', reject);
  });
}

/**
 * Run PM2 stop then start in a detached shell so the script survives
 * when this process is stopped. Uses PM2_APP_INDEX (default 1).
 */
function triggerPm2StopThenStart() {
  const index = PM2_APP_INDEX;
  const cmd = `pm2 stop ${index} && sleep 2 && pm2 start ${index}`;
  const proc = spawn(cmd, [], {
    shell: true,
    stdio: 'ignore',
    detached: true,
  });
  proc.unref();
  console.log('PM2 stop/start triggered in background:', index);
}

/**
 * Add, commit, and push the given files; optionally restart via PM2.
 * Only runs when ENABLE_GIT_PUSH_AFTER_ARTICLE_SUBMIT=true.
 * Restart (pm2 stop <index> && pm2 start <index>) only when
 * ENABLE_RESTART_AFTER_ARTICLE_SUBMIT=true and NODE_ENV=production;
 * index from PM2_APP_INDEX (default 1).
 *
 * @param {string[]} files - Paths relative to process.cwd()
 * @param {string} commitMessage - Git commit message
 */
async function gitPushAndRestart(files, commitMessage) {
  if (!ENABLE_GIT_PUSH || !files || files.length === 0) {
    return;
  }

  const cwd = process.cwd();
  const normalizedFiles = files
    .map((f) => path.relative(cwd, path.resolve(cwd, f)))
    .filter(Boolean);

  if (normalizedFiles.length === 0) {
    return;
  }

  try {
    await runGit(['add', ...normalizedFiles], cwd);
    await runGit(['commit', '-m', commitMessage], cwd);
    await runGit(['push'], cwd);
    console.log('Git push after article submit succeeded');
  } catch (err) {
    console.error('Git push after article submit failed:', err.message);
    return;
  }

  if (ENABLE_RESTART && process.env.NODE_ENV === 'production') {
    triggerPm2StopThenStart();
  }
}

module.exports = { gitPushAndRestart };
