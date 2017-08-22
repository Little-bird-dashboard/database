
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE stakeholder_availability CASCADE; ALTER SEQUENCE stakeholder_id_seq restart with 9')
    .then(function () {
      return knex('stakeholder_availability').insert([
        {stakeholder_id: 1, meeting_start_time_id: 1},
        {stakeholder_id: 1, meeting_start_time_id: 2},
        {stakeholder_id: 1, meeting_start_time_id: 20},
        {stakeholder_id: 1, meeting_start_time_id: 21},
        {stakeholder_id: 1, meeting_start_time_id: 25}
      ]);
    });
};
