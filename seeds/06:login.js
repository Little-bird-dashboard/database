const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE login CASCADE; ALTER SEQUENCE login_id_seq restart with 5')
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
        },
        {
          id:3,
          stakeholder_id: 30,
          password: bcrypt.hashSync('password123', salt) ,
        },
        {
          id:4,
          stakeholder_id: 31,
          password: bcrypt.hashSync('littlebird', salt) ,
        }
      ]);
    });
};
