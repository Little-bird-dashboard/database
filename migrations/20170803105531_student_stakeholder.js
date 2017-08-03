
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('student_stakeholder', function(table){
    table.increments('id').primary();
    table.integer('student_id').unsigned();
    table.integer('stakeholder_id').unsigned();
    table.foreign('student_id').references('student.id');
    table.foreign('stakeholder_id').references('stakeholder.id');
    table.text('description');
    table.boolean('is_required').defaultTo(false);
    table.integer('importance').defaultTo(1);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('student_stakeholder');
};
