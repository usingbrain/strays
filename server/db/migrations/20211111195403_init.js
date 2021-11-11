exports.up = function (knex) {
  return knex.schema.createTable('strays', function (table) {
    table.increments('id');
    table.string('name').notNullable();
    table.string('sex');
    table.string('colour');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('strays');
};
