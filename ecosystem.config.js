module.exports = {
  apps: [{
    name : "mkapp",
    script: "nvm install 16 && nvm use 16 && npm run build && npm run start"
  }]
}

// module.exports = {
//   apps : [{
//     name: 'mkapp',
//     script: 'node_modules/.bin/next',
//     args:'start',
//     cwd:"/var/www/html/mkapp",
//     instances: 3,
//     autorestart: true,
//     watch: false,
//     max_memory_restart: '1G',
//     env: {
//         NODE_ENV: "production",
//         PORT: 4000
//     },
//   }]
// };