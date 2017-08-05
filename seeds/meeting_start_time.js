
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meeting_start_time CASCADE; ALTER SEQUENCE stakeholder_id_seq restart with 9')
    .then(function () {
      return knex('meeting_start_time').insert([
        {day: 'Monday', start_time: '9 am'},
        {day: 'Monday', start_time: '10 am'},
        {day: 'Monday', start_time: '11 am'},
        {day: 'Monday', start_time: '1 pm'},
        {day: 'Monday', start_time: '2 pm'},
        {day: 'Monday', start_time: '3 pm'},
        {day: 'Tuesday', start_time: '9 am'},
        {day: 'Tuesday', start_time: '10 am'},
        {day: 'Tuesday', start_time: '11 am'},
        {day: 'Tuesday', start_time: '1 pm'},
        {day: 'Tuesday', start_time: '2 pm'},
        {day: 'Tuesday', start_time: '3 pm'},
        {day: 'Wednesday', start_time: '9 am'},
        {day: 'Wednesday', start_time: '10 am'},
        {day: 'Wednesday', start_time: '11 am'},
        {day: 'Wednesday', start_time: '1 pm'},
        {day: 'Wednesday', start_time: '2 pm'},
        {day: 'Wednesday', start_time: '3 pm'},
        {day: 'Thursday', start_time: '9 am'},
        {day: 'Thursday', start_time: '10 am'},
        {day: 'Thursday', start_time: '11 am'},
        {day: 'Thursday', start_time: '1 pm'},
        {day: 'Thursday', start_time: '2 pm'},
        {day: 'Thursday', start_time: '3 pm'},
        {day: 'Friday', start_time: '9 am'},
        {day: 'Friday', start_time: '10 am'},
        {day: 'Friday', start_time: '11 am'},
        {day: 'Friday', start_time: '1 pm'},
        {day: 'Friday', start_time: '2 pm'},
        {day: 'Friday', start_time: '3 pm'},
      ]);
    });
};
