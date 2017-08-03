
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('communication', function(table){
    table.increments('id').primary();
    table.integer('communication_type_id').unsigned();
    table.foreign('communication_type_id').references('communication_type.id');
    table.text('raw_body');
    table.text('interpreted_body');
    table.dateTime('timestamp');
    table.integer('student_id').unsigned();
    table.integer('stakeholder_id').unsigned();
    table.foreign('student_id').references('student.id');
    table.foreign('stakeholder_id').references('stakeholder.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('communication');
};
