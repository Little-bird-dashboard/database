

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student CASCADE; ALTER SEQUENCE student_id_seq restart with 13')
    .then(function () {
      return knex('student').insert([
        {
          id: 1,
          student_id:'879738zyz',
          first_name:'Jane',
          last_name:'Gonzalez',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'../../../staic/jane.jpg'
        },
        {
          id: 2,
          student_id:'34738xyu',
          first_name:'Benjamin',
          last_name:'Perkins',
          grade_type_id:6,
          IEP_deadline:'2017-12-01 05:00:00',
          profile_img:'../../../staic/benjamin.jpg'
        },
        {
          id: 3,
          student_id:'7866yyy',
          first_name:'Lettie',
          last_name:'Summers',
          grade_type_id:2,
          IEP_deadline:'2017-11-30 05:00:00',
          profile_img:'../../../staic/lettie.jpg'
        },
        {
          id: 4,
          student_id:'909ynk',
          first_name:'Lou',
          last_name:'Stone',
          grade_type_id:4,
          IEP_deadline:'2017-05-06 05:00:00',
          profile_img:'../../../staic/lou.jpg'
        },
        {
          id: 5,
          student_id:'998890bhb',
          first_name:'Norman',
          last_name:'Marshall',
          grade_type_id:2,
          IEP_deadline:'2017-09-22 05:00:00',
          profile_img:'../../../staic/norman.jpg'
        },
        {
          id: 6,
          student_id:'1234hkjm',
          first_name:'Nano',
          last_name:'Miyashita',
          grade_type_id:3,
          IEP_deadline:'2017-10-29 05:00:00',
          profile_img:'../../../staic/nano.jpg'
        },
        {
          id: 7,
          student_id:'098kjkm',
          first_name:'Esther',
          last_name:'Fletcher',
          grade_type_id:4,
          IEP_deadline:'2017-04-12 05:00:00',
          profile_img:'../../../staic/esther.jpg'
        },
        {
          id: 8,
          student_id:'111iklp',
          first_name:'Erik',
          last_name:'Gray',
          grade_type_id:6,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'../../../staic/erik.jpg'
        },
        {
          id: 9,
          student_id:'09067yuj',
          first_name:'Luca',
          last_name:'Carpenter',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'../../../staic/luca.jpg'
        },
        {
          id: 10,
          student_id:'34561kk',
          first_name:'Adam',
          last_name:'Coleman',
          grade_type_id:6,
          IEP_deadline:'2017-10-03 05:00:00',
          profile_img:'../../../staic/adam.jpg'
        },
        {
          id: 11,
          student_id:'234kldk',
          first_name:'May',
          last_name:'Hayes',
          grade_type_id:1,
          IEP_deadline:'2017-02-06 05:00:00',
          profile_img:'../../../staic/may.jpg'
        },
        {
          id: 12,
          student_id:'0918lkdk',
          first_name:'Mark',
          last_name:'Coleman',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'../../../staic/mark.jpg'
        }
      ]);
    });
};
