'use strict';

const {spawn} = require('child_process');

const ENABLE_RESTART = process.env.ENABLE_RESTART_AFTER_ARTICLE_SUBMIT === 'true';
const PM2_APP_INDEX = process.env.PM2_APP_INDEX || '1';

const BUILD_AND_RESTART_DELAY_MS = Number(process.env.BUILD_AND_RESTART_DELAY_MS) || 5000;

/**
 * Schedule npm run build, then pm2 stop & start, after a delay.
 * Runs only when ENABLE_RESTART_AFTER_ARTICLE_SUBMIT=true and NODE_ENV=production.
 * Commands run one by one: npm run build && pm2 stop <id> && pm2 start <id>.
 * Uses a detached process so it survives after the API returns.
 *
 * @param {number} delayMs - Delay in ms before running (e.g. 5000 for 5 sec after email).
 */
function scheduleBuildAndPm2Restart(delayMs) {
  if (!ENABLE_RESTART || process.env.NODE_ENV !== 'production') {
    return;
  }
  const index = PM2_APP_INDEX;
  const delay = Math.max(0, Number(delayMs) || BUILD_AND_RESTART_DELAY_MS);
  setTimeout(() => {
    const cmd = `npm run build && pm2 stop ${index} && pm2 start ${index}`;
    const proc = spawn(cmd, [], {
      shell: true,
      stdio: 'ignore',
      detached: true,
      cwd: process.cwd(),
    });
    proc.unref();
    console.log('Build and PM2 restart scheduled in background, index:', index);
  }, delay);
}

module.exports = {scheduleBuildAndPm2Restart};
