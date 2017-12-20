exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE guardian_availability CASCADE; ALTER SEQUENCE guardian_availability_id_seq restart with 1')
    .then(function () {
      return knex('guardian_availability').insert([
        {stakeholder_id: 2, date: 'Monday', timeframe: 'morning'},
        {stakeholder_id: 2, date: 'Thursday', timeframe: 'morning'},
        //{stakeholder_id: 2, date: 'Friday', timeframe: 'morning'}
      ]);
    });
};
