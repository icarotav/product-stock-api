module.exports = {
  apps: [{
    name: 'product-stock-api',
    script: './src/bin/www.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 'max',
    autorestart: true,
    watch: true,
    ignore_watch: ['node_modules', 'public'],
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DEBUG: 'product-stock-api:*',
    },
    env_production: {
      NODE_ENV: 'production',
    },
    log_type: 'json',
  }],

  // deploy: {
  //   production: {
  //     user: 'node',
  //     host: '212.83.163.1',
  //     ref: 'origin/master',
  //     repo: 'git@github.com:repo.git',
  //     path: '/var/www/production',
  //     'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
  //   },
  // },
};
