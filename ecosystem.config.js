module.exports = {
  apps: [
    {
      name: "uppr",

      // Next.js production start
      script: "npm",
      args: "restart",

      autorestart: true,

      // Only watch specific file
      watch: ["./components/articles/index.js"],

      // Ignore everything else
      ignore_watch: ["*"],

      watch_delay: 500,  // 0.5s delay before restart

      env: {
        NODE_ENV: "production",
        PORT: 3900
      }
    }
  ]
};