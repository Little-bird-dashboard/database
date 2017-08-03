
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE communication_type CASCADE; ALTER SEQUENCE communication_type_id_seq restart with 5')
    .then(function () {
      return knex('communication_type').insert([
        {
          id: 1,
          type:'text'
        },
        {
          id: 2,
          type:'email'
        },
        {
          id: 3,
          type:'doodle'
        },
        {
          id: 4,
          type:'auto text'
        }
      ]);
    });
};
