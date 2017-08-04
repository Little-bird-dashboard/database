const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE login CASCADE; ALTER SEQUENCE login_id_seq restart with 3')
    .then(function () {
      const salt = bcrypt.genSaltSync(saltRounds);

      return knex('login').insert([
        {
          id: 1,
          stakeholder_id:1,
          password: bcrypt.hashSync('password123', salt) ,
        },
        {
          id: 2,
          stakeholder_id:6,
          password: bcrypt.hashSync('password123', salt) ,
        }
      ]);
    });
};
