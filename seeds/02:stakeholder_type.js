
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE stakeholder_type CASCADE; ALTER SEQUENCE stakeholder_type_id_seq restart with 10')
    .then(function () {
      return knex('stakeholder_type').insert([
        {
          id: 1,
          type:'Special Education Coordinator'
        },
        {
          id: 2,
          type:'Guardian'
        },
        {
          id: 3,
          type:'School Administrator'
        },
        {
          id: 4,
          type:'General Education Teacher'
        },
        {
          id: 5,
          type:'Therapist'
        },
        {
          id: 6,
          type:'Translator'
        },
        {
          id: 7,
          type:'Health Care Provider'
        },
        {
          id: 8,
          type:'Platform Admin'
        },
        {
          id: 9,
          type:'Little Bird'
        }
      ]);
    });
};
