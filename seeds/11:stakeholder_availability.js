
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE stakeholder_availability CASCADE; ALTER SEQUENCE stakeholder_availability_id_seq restart with 1')
    .then(function () {
      return knex('stakeholder_availability').insert([
      ]);
    });
};
