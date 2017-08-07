
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('guardian_availability', function(table){
      table.increments('id').primary();
      table.integer('stakeholder_id').unsigned();
      table.foreign('stakeholder_id').references('stakeholder.id');
      table.text('date');
      table.text('timeframe');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('guardian_availability');
};
