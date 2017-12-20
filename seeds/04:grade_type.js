
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE grade_type CASCADE; ALTER SEQUENCE grade_type_id_seq restart with 21')
    .then(function () {
      return knex('grade_type').insert([
        {
          id: 1,
          name:'Kindergarten',
          order:0
        },
        {
          id: 2,
          name:'1st',
          order:1
        },
        {
          id: 3,
          name:'2nd',
          order:2
        },
        {
          id: 4,
          name:'3rd',
          order:3
        },
        {
          id: 5,
          name:'4th',
          order:4
        },
        {
          id: 6,
          name:'5th',
          order:5
        },
        {
          id: 7,
          name:'6th',
          order:6
        },
        {
          id: 8,
          name:'7th',
          order:7
        },
        {
          id: 9,
          name:'8th',
          order:8
        },
        {
          id: 10,
          name:'9th',
          order:9
        },
        {
          id: 11,
          name:'10th',
          order:10
        },
        {
          id: 12,
          name:'11th',
          order:11
        },
        {
          id: 13,
          name:'12th',
          order:12
        },
        {
          id: 20,
          name:'filter',
          order:20
        }
      ]);
    });
};
