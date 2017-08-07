exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE guardian_availability CASCADE; ALTER SEQUENCE communication_id_seq restart with 6')
    .then(function () {
      return knex('guardian_availability').insert([
        {stakeholder_id: 2, date: 'Monday', timeframe: 'morning'},
        {stakeholder_id: 2, date: 'Thursday', timeframe: 'morning'},
        {stakeholder_id: 2, date: 'Friday', timeframe: 'morning'}
      ]);
    });
};
