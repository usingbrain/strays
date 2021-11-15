const path = require('path');

const straysPath = path.resolve(__dirname, '../data/strays');

const straysData = require(straysPath);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('strays')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('strays').insert(straysData);
    });
};
