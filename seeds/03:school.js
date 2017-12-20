exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE school CASCADE; ALTER SEQUENCE school_id_seq restart with 4')
    .then(function () {
      return knex('school').insert([
        {
          id: 1,
          name:'Demo',
          district:'Denver',
          school_type: 'charter'
        },
        {
          id: 2,
          name:'Roots',
          district:'Denver',
          school_type: 'charter'
        },
        {
          id: 3,
          name:'Strive',
          district:'Denver',
          school_type: 'charter'
        }
      ]);
    });
};
