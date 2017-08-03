
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('grade_type', function(table){
    table.increments('id').primary();
    table.text('name').notNullable();
    table.integer('order').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('grade_type');
};
