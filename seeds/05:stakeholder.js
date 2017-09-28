

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE stakeholder CASCADE; ALTER SEQUENCE stakeholder_id_seq restart with 32')
    .then(function () {
      return knex('stakeholder').insert([
        {
          id: 1,
          stakeholder_type_id:1,
          first_name:'Jaclyn',
          last_name:'Moore',
          email:'jaclyn.moore@rootselementary.com',
          cell: '+17205127878'
        },
        {
          id: 2,
          stakeholder_type_id:2,
          first_name:'Lenora',
          last_name:'Gonzalez',
          email:'lgonzalez@gmail.com',
          cell: '+13035627571'
        },
        {
          id: 3,
          stakeholder_type_id:3,
          first_name:'Jill',
          last_name:'Tew',
          email:'jill.tew@rootselementary.com',
          cell: '+17209876098'
        },
        {
          id: 4,
          stakeholder_type_id:4,
          first_name:'Sarah',
          last_name:'Dunn',
          email:'sarah.dunn@rootselementary.com',
          cell: '+17203334657'
        },
        {
          id: 5,
          stakeholder_type_id:5,
          first_name:'Holly',
          last_name:'Hunter',
          email:'holly.hunter@denverchildrens.com',
          cell: '+17203334657'
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
          cell: '+18042982615'
        },
        {
          id: 8,
          stakeholder_type_id:2,
          first_name:'Marlena',
          last_name:'Coleman',
          email:'mcoleman@gmail.com',
          cell: '+13039198623'
        },
        {
          id: 9,
          stakeholder_type_id:4,
          first_name:'Tom',
          last_name:'Fulham',
          email:'Tom.Fulham@rootselementary.com',
          cell: '+17203334666'
        },
        {
          id: 10,
          stakeholder_type_id:4,
          first_name:'Catherine',
          last_name:'Lopez',
          email:'Catherine.Lopez@rootselementary.com',
          cell: '+17203334657'
        },
        {
          id: 11,
          stakeholder_type_id:4,
          first_name:'Christina',
          last_name:'Patel',
          email:'Christina.Patel@rootselementary.com',
          cell: '+17203334611'
        },
        {
          id: 12,
          stakeholder_type_id:4,
          first_name:'Carter',
          last_name:'Mason',
          email:'Carter.Mason@rootselementary.com',
          cell: '+17203334639'
        },
        {
          id: 13,
          stakeholder_type_id:4,
          first_name:'Haley',
          last_name:'White',
          email:'Haley.White@rootselementary.com',
          cell: '+17203334651'
        },
        {
          id: 14,
          stakeholder_type_id:4,
          first_name:'Maria',
          last_name:'Ochoa',
          email:'Maria.Ochoa@rootselementary.com',
          cell: '+17203334688'
        },
        {
          id: 15,
          stakeholder_type_id:2,
          first_name:'Mike',
          last_name:'Gray',
          email:'mgray@gmail.com',
          cell: '+13039887015'
        },
        {
          id: 16,
          stakeholder_type_id:2,
          first_name:'Jada',
          last_name:'Hayes',
          email:'mhayes@gmail.com',
          cell: '+13039887016'
        },
        {
          id: 17,
          stakeholder_type_id:2,
          first_name:'Jordan',
          last_name:'Stone',
          email:'jstone@gmail.com',
          cell: '+13039887017'
        },
        {
          id: 18,
          stakeholder_type_id:2,
          first_name:'Hana',
          last_name:'Miyashita',
          email:'hmiyashita@gmail.com',
          cell: '+13039887018'
        },
        {
          id: 19,
          stakeholder_type_id:2,
          first_name:'CJ',
          last_name:'Perkins',
          email:'cperkins@gmail.com',
          cell: '+13039887019'
        },
        {
          id: 20,
          stakeholder_type_id:2,
          first_name:'Imani',
          last_name:'Summers',
          email:'isummers@gmail.com',
          cell: '+13039887020'
        },
        {
          id: 21,
          stakeholder_type_id:2,
          first_name:'Kim',
          last_name:'Marshall',
          email:'kmarshall@gmail.com',
          cell: '+13039887021'
        },
        {
          id: 22,
          stakeholder_type_id:2,
          first_name:'Kiara',
          last_name:'Carpenter',
          email:'kcarpenter@gmail.com',
          cell: '+13039887022'
        },
        {
          id: 23,
          stakeholder_type_id:2,
          first_name:'Tom',
          last_name:'Fletcher',
          email:'tfletcher@gmail.com',
          cell: '+13039887023'
        },
        {
          id: 24,
          stakeholder_type_id:2,
          first_name:'Mckela',
          last_name:'Coleman',
          email:'mckcoleman@gmail.com',
          cell: '+13039887024'
        },
        {
          id: 25,
          stakeholder_type_id:2,
          first_name:'Demo',
          last_name:'Parent 1',
          email:'demoparent1@gmail.com',
          cell: '+13039887025'
        },
        {
          id: 26,
          stakeholder_type_id:2,
          first_name:'Demo',
          last_name:'Parent 2',
          email:'demoparent2@gmail.com',
          cell: '+13039887026'
        },
        {
          id: 27,
          stakeholder_type_id:2,
          first_name:'Demo',
          last_name:'Parent 3',
          email:'demoparent3@gmail.com',
          cell: '+13039887027'
        },
        {
          id: 28,
          stakeholder_type_id:2,
          first_name:'Demo',
          last_name:'Parent 4',
          email:'demoparent4@gmail.com',
          cell: '+13039887028'
        },
        {
          id: 29,
          stakeholder_type_id:2,
          first_name:'Demo',
          last_name:'Parent 5',
          email:'demoparent5@gmail.com',
          cell: '+13039887029'
        },
        {
          id: 30,
          stakeholder_type_id:1,
          first_name:'Demo',
          last_name:'User',
          email:'demo.user@rootselementary.com',
          cell: '+17205127877'
        },
        {
          id: 31,
          stakeholder_type_id:1,
          first_name:'NSVF',
          last_name:'Demo',
          email:'nsvf@demo.com',
          cell: '+17205127811'
        }
      ]);
    });
};
