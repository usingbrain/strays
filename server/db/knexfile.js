// Update with your config settings.
require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: null,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
