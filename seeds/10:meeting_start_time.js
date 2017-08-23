
exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE meeting_start_time CASCADE; ALTER SEQUENCE stakeholder_id_seq restart with 1')
    .then(function () {
      return knex('meeting_start_time').insert([
        {day: 'Monday', start_time: '9 am', timeframe: 'morning'},
        {day: 'Monday', start_time: '10 am', timeframe: 'morning'},
        {day: 'Monday', start_time: '11 am', timeframe: 'morning'},
        {day: 'Monday', start_time: '1 pm', timeframe: 'afternoon'},
        {day: 'Monday', start_time: '2 pm', timeframe: 'afternoon'},
        {day: 'Monday', start_time: '3 pm', timeframe: 'afternoon'},
        {day: 'Tuesday', start_time: '9 am', timeframe: 'morning'},
        {day: 'Tuesday', start_time: '10 am', timeframe: 'morning'},
        {day: 'Tuesday', start_time: '11 am', timeframe: 'morning'},
        {day: 'Tuesday', start_time: '1 pm', timeframe: 'afternoon'},
        {day: 'Tuesday', start_time: '2 pm', timeframe: 'afternoon'},
        {day: 'Tuesday', start_time: '3 pm', timeframe: 'afternoon'},
        {day: 'Wednesday', start_time: '9 am', timeframe: 'morning'},
        {day: 'Wednesday', start_time: '10 am', timeframe: 'morning'},
        {day: 'Wednesday', start_time: '11 am', timeframe: 'morning'},
        {day: 'Wednesday', start_time: '1 pm', timeframe: 'afternoon'},
        {day: 'Wednesday', start_time: '2 pm', timeframe: 'afternoon'},
        {day: 'Wednesday', start_time: '3 pm', timeframe: 'afternoon'},
        {day: 'Thursday', start_time: '9 am', timeframe: 'morning'},
        {day: 'Thursday', start_time: '10 am', timeframe: 'morning'},
        {day: 'Thursday', start_time: '11 am', timeframe: 'morning'},
        {day: 'Thursday', start_time: '1 pm', timeframe: 'afternoon'},
        {day: 'Thursday', start_time: '2 pm', timeframe: 'afternoon'},
        {day: 'Thursday', start_time: '3 pm', timeframe: 'afternoon'},
        {day: 'Friday', start_time: '9 am', timeframe: 'morning'},
        {day: 'Friday', start_time: '10 am', timeframe: 'morning'},
        {day: 'Friday', start_time: '11 am', timeframe: 'morning'},
        {day: 'Friday', start_time: '1 pm', timeframe: 'afternoon'},
        {day: 'Friday', start_time: '2 pm', timeframe: 'afternoon'},
        {day: 'Friday', start_time: '3 pm', timeframe: 'afternoon'}
      ]);
    });
};
