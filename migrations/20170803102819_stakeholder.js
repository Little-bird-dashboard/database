
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('stakeholder', function(table){
    table.increments('id').primary();
    table.integer('stakeholder_type_id').unsigned();
    table.foreign('stakeholder_type_id').references('stakeholder_type.id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique();
    table.string('cell');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('stakeholder');
};
