

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE stakeholder CASCADE; ALTER SEQUENCE stakeholder_id_seq restart with 9')
    .then(function () {
      return knex('stakeholder').insert([
        {
          id: 1,
          stakeholder_type_id:1,
          first_name:'Jaclyn',
          last_name:'Moore',
          email:'jaclyn.moore@rootselementary.com',
          cell: '7205127878'
        },
        {
          id: 2,
          stakeholder_type_id:2,
          first_name:'Lenora',
          last_name:'Gonzalez',
          email:'lgonzalez@gmail.com',
          cell: '7206667777'
        },
        {
          id: 3,
          stakeholder_type_id:3,
          first_name:'Jill',
          last_name:'Tew',
          email:'jill.tew@rootselementary.com',
          cell: '7209876098'
        },
        {
          id: 4,
          stakeholder_type_id:4,
          first_name:'Sarah',
          last_name:'Dunn',
          email:'sarah.dunn@rootselementary.com',
          cell: '7203334657'
        },
        {
          id: 5,
          stakeholder_type_id:5,
          first_name:'Holly',
          last_name:'Hunter',
          email:'holly.hunter@denverchildrens.com',
          cell: '7203334657'
        },
        {
          id: 6,
          stakeholder_type_id:8,
          first_name:'Platform',
          last_name:'Admin',
          email:'littlebird_admin@gmail.com',
        },
        {
          id: 7,
          stakeholder_type_id:9,
          first_name:'Little',
          last_name:'Bird',
          email:'littlebird@gmail.com',
        }
      ]);
    });
};
