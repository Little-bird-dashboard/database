
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('student', function(table){
    table.increments('id').primary();
    table.string('student_id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.integer('grade_type_id').unsigned();
    table.foreign('grade_type_id').references('grade_type.id');
    table.dateTime('IEP_deadline').notNullable();
    table.dateTime('IEP_date');
    table.string('profile_img');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('student');
};
