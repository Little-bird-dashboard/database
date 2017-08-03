

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE communication CASCADE; ALTER SEQUENCE communication_id_seq restart with 6')
    .then(function () {
      return knex('communication').insert([
        {
          id: 1,
          communication_type_id:4,
          raw_body:`Hey it's Little Bird from Hogwarts Elementary! Your child's IEP review is coming up. Whay days during the week of September 4th would you be available to meet for an hour? For example, type 'Monday, Tuesday and Wednesday'`,
          timestamp: '2017-09-01 06:35:00',
          student_id: 1,
          stakeholder_id: 7
        },
        {
          id: 2,
          communication_type_id:1,
          raw_body:'Monday or Wednesday',
          timestamp: '2017-09-01 08:46:33',
          student_id: 1,
          stakeholder_id: 2
        },
        {
          id: 3,
          communication_type_id:4,
          raw_body:'Great! Do mornings or afternoons tend to work better for you?',
          timestamp: '2017-09-01 08:46:41',
          student_id: 1,
          stakeholder_id: 7
        },
        {
          id: 4,
          communication_type_id:1,
          raw_body:'Mornings',
          timestamp: '2017-09-01 12:01:33',
          student_id: 1,
          stakeholder_id: 2
        },
        {
          id: 5,
          communication_type_id:4,
          raw_body:'Awesome! We will be in touch soon with potential times.',
          timestamp: '2017-09-01 12:01:38',
          student_id: 1,
          stakeholder_id: 7
        }
      ]);
    });
};
