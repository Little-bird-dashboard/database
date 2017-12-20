
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('language', function(table){
    table.increments('id').primary();
    table.text('name').notNullable();
    table.text('google_id').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('language');
};
