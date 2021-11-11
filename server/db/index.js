const knex = require('knex');
const knexfile = require('./knexfile');

// TODO: in prod, don't hardcode db config here
// but instead pull values in via env vars

// TODO in prod, use dependency injection
// to create knex instance so db access can be mocked
// for tests

const db = knex(knexfile.development);
module.exports = db;
