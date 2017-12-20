

exports.seed = function(knex, Promise) {
  return knex.raw('ALTER SEQUENCE communication_id_seq restart;')
    .then(function () {
      return knex('communication').del().then(function() {
        return Promise.all([
          knex('communication').insert([
        {
          communication_type_id:4,
          raw_body:`Hey it's Little Bird from Hogwarts Elementary! Your child's IEP review is coming up. Whay days during the week of September 4th would you be available to meet for an hour? For example, type 'Monday, Tuesday and Wednesday'`,
          timestamp: '1502069312345',
          student_id: 1,
          stakeholder_id: 7
        },
        {
          communication_type_id:1,
          raw_body:'Monday or Wednesday',
          timestamp: '1502069313345',
          student_id: 1,
          stakeholder_id: 2
        },
        {
          communication_type_id:4,
          raw_body:'Great! Do mornings or afternoons tend to work better for you?',
          timestamp: '1502069314345',
          student_id: 1,
          stakeholder_id: 7
        },
        {
          communication_type_id:1,
          raw_body:'Mornings',
          timestamp: '1502069315345',
          student_id: 1,
          stakeholder_id: 2
        },
        {
          communication_type_id:4,
          raw_body:'Awesome! We will be in touch soon with potential times.',
          timestamp: '1502069316345',
          student_id: 1,
          stakeholder_id: 7
        }
      ])
    ])
      })
    })
};
