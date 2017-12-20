
exports.up = function(knex, Promise) {
  return knex.schema
  .table('login', function(table) {
    table.integer('school_id').unsigned();
    table.foreign('school_id').references('school.id');
  });
};

exports.down = function(knex, Promise) {

};
