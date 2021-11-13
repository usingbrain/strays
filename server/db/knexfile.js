// Update with your config settings.
const path = require('path');
const envPath = path.join(__dirname, '../.env');
require('dotenv').config({ path: envPath });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: process.env.DB_NAME,
      // database: 'strays',
      // user: 'mariasudermann',
      user: process.env.DB_USER,
      password: null,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};
