exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE language CASCADE; ALTER SEQUENCE language_id_seq restart with 3')
    .then(function () {
      return knex('language').insert([
        {
          id: 1,
          name:'English',
          google_id:'es'
        },
        {
          id: 2,
          name:'Spanish',
          google_id:'en'
        }
      ]);
    });
};
