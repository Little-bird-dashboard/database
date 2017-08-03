
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('stakeholder_type', function(table){
    table.increments('id').primary();
    table.text('type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('stakeholder_type');
};
