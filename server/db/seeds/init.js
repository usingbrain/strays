const spotsData = require('../data/spots');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('spots')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('spots').insert(spotsData);
    });
};

// .then(() => {})
