
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('school', function(table){
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('district').notNullable();
    table.text('school_type').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('school');
};
