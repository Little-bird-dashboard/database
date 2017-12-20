
exports.up = function(knex, Promise) {
  return knex.schema
  .table('student', function(table) {
    table.integer('school_id').unsigned();
    table.foreign('school_id').references('school.id');
    table.integer('language_id').unsigned();
    table.foreign('language_id').references('language.id');
  });
};

exports.down = function(knex, Promise) {

};
