const path = require('path');

const feedPath = path.resolve(__dirname, '../data/feedings');

const feedData = require(feedPath);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('feedings')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('feedings').insert(feedData);
    });
};
