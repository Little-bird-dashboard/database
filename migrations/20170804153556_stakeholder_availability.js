
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('stakeholder_availability', function(table){
      table.increments('id').primary();
      table.integer('stakeholder_id').unsigned();
      table.foreign('stakeholder_id').references('stakeholder.id');
      table.integer('meeting_start_time_id').unsigned();
      table.foreign('meeting_start_time_id').references('meeting_start_time.id');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('stakeholder_availability');
};
