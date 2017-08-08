
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('meeting_start_time', function(table){
      table.increments('id').primary();
      table.text('day').notNullable();
      table.text('start_time').notNullable();
      table.text('timeframe').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('meeting_start_time');
};
