

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student_stakeholder CASCADE; ALTER SEQUENCE student_stakeholder_id_seq restart with 1')
    .then(function () {
      return knex('student_stakeholder').insert([
        {
          student_id:1,
          stakeholder_id:1,
          description: 'special ed coordinator since Kindergarten',
          is_required: true,
          importance: 10
        },
        {
          student_id:1,
          stakeholder_id:2,
          description: 'Mother(single)',
          is_required: false,
          importance: 9
        },
        {
          student_id:1,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:1,
          stakeholder_id:4,
          description: 'homeroom teacher',
          is_required: true,
          importance: 10
        },
        {
          student_id:1,
          stakeholder_id:5,
          description: 'therapist - visits 1 per month',
          is_required: false,
          importance: 3
        },
        {
          student_id:1,
          stakeholder_id:7,
          description: 'Little Bird',
          is_required: false,
          importance: 1
        },
        {
          student_id:12,
          stakeholder_id:8,
          description: 'Mother',
          is_required: false,
          importance: 9
        },
        {
          student_id:2,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:3,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:4,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:5,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:6,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:7,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:8,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:9,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:10,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:11,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:12,
          stakeholder_id:1,
          is_required: true,
          importance: 10
        },
        {
          student_id:2,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:3,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:4,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:5,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:6,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:7,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:8,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:9,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:10,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:11,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:12,
          stakeholder_id:3,
          is_required: false,
          importance: 1
        },
        {
          student_id:2,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:3,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:4,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:5,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:6,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:7,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:8,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:9,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:10,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:11,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:12,
          stakeholder_id:7,
          is_required: false,
          importance: 1
        },
        {
          student_id:2,
          stakeholder_id:9,
          is_required: true,
          importance: 10
        },
        {
          student_id:3,
          stakeholder_id:10,
          is_required: true,
          importance: 10
        },
        {
          student_id:4,
          stakeholder_id:11,
          is_required: true,
          importance: 10
        },
        {
          student_id:5,
          stakeholder_id:10,
          is_required: true,
          importance: 10
        },
        {
          student_id:6,
          stakeholder_id:4,
          is_required: true,
          importance: 10
        },
        {
          student_id:7,
          stakeholder_id:11,
          is_required: true,
          importance: 10
        },
        {
          student_id:8,
          stakeholder_id:9,
          is_required: true,
          importance: 10
        },
        {
          student_id:9,
          stakeholder_id:12,
          is_required: true,
          importance: 10
        },
        {
          student_id:10,
          stakeholder_id:13,
          is_required: true,
          importance: 10
        },
        {
          student_id:11,
          stakeholder_id:14,
          is_required: true,
          importance: 10
        },
        {
          student_id:12,
          stakeholder_id:12,
          is_required: true,
          importance: 10
        },
        {
          student_id:2,
          stakeholder_id:19,
          is_required: false,
          importance: 9
        },
        {
          student_id:3,
          stakeholder_id:20,
          is_required: false,
          importance: 9
        },
        {
          student_id:4,
          stakeholder_id:17,
          is_required: false,
          importance: 9
        },
        {
          student_id:5,
          stakeholder_id:21,
          is_required: false,
          importance: 9
        },
        {
          student_id:6,
          stakeholder_id:18,
          is_required: false,
          importance: 9
        },
        {
          student_id:7,
          stakeholder_id:23,
          is_required: false,
          importance: 9
        },
        {
          student_id:8,
          stakeholder_id:15,
          is_required: false,
          importance: 9
        },
        {
          student_id:9,
          stakeholder_id:22,
          is_required: false,
          importance: 9
        },
        {
          student_id:10,
          stakeholder_id:24,
          is_required: false,
          importance: 9
        },
        {
          student_id:11,
          stakeholder_id:16,
          is_required: false,
          importance: 9
        }
      ]);
    });
};
