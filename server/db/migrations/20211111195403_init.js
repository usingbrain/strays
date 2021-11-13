exports.up = function (knex) {
  return knex.schema
    .withSchema('public')
    .createTable('spots', function (table) {
      table.increments('id');
      table.float('lat');
      table.float('long');
    })
    .createTable('strays', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.string('sex');
      table.string('colour');
      table.integer('spot_id').unsigned().notNullable();
      table.foreign('spot_id').references('id').inTable('spots');
    })
    .createTable('users', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
    })
    .createTable('feedings', function (table) {
      table.increments('id');
      table.datetime('date').defaultTo(knex.fn.now());
      table.integer('spot_id').unsigned().notNullable();
      table.foreign('spot_id').references('id').inTable('spots');
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').inTable('users');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('strays')
    .dropTableIfExists('users')
    .dropTableIfExists('spots')
    .dropTableIfExists('feedings');
};
