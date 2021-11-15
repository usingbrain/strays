const { default: knex } = require("knex");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('feedings').del()
  .then(() => knex('strays').del())
  .then(() => knex('users').del())
  .then(() => knex('spots').del())
};
