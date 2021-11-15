const path = require('path');

const usersPath = path.resolve(__dirname, '../data/users');

const usersData = require(usersPath);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(usersData);
    });
};
