

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student_stakeholder CASCADE; ALTER SEQUENCE student_stakeholder_id_seq restart with 6')
    .then(function () {
      return knex('student_stakeholder').insert([
        {
          id: 1,
          student_id:1,
          stakeholder_id:1,
          description: 'special ed coordinator since Kindergarten',
          is_required: true,
          importance: 10
        },
        {
          id: 2,
          student_id:1,
          stakeholder_id:2,
          description: 'Mother(single)',
          is_required: false,
          importance: 9
        },
        {
          id: 3,
          student_id:1,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          id: 4,
          student_id:1,
          stakeholder_id:4,
          description: 'homeroom teacher',
          is_required: true,
          importance: 10
        },
        {
          id: 5,
          student_id:1,
          stakeholder_id:5,
          description: 'therapist - visits 1 per month',
          is_required: false,
          importance: 3
        }
      ]);
    });
};
