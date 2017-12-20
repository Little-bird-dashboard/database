
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('communication_translation', function(table){
    table.increments('id').primary();
    table.integer('communication_id').unsigned();
    table.foreign('communication_id').references('communication.id');
    table.integer('language_id').unsigned();
    table.foreign('language_id').references('language.id');
    table.text('foreign_language_body').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('communication_translation');
};
