

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student CASCADE; ALTER SEQUENCE student_id_seq restart with 21')
    .then(function () {
      return knex('student').insert([
        {
          id: 1,
          student_id:'879738zyz',
          first_name:'Jane',
          last_name:'Gonzalez',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'./static/jane.jpg',
          language_id: 2,
          school_id: 1
        },
        {
          id: 2,
          student_id:'34738xyu',
          first_name:'Benjamin',
          last_name:'Perkins',
          //grade_type_id:20,
          grade_type_id:6,
          IEP_deadline:'2017-12-01 05:00:00',
          profile_img:'./static/benjamin.jpg',
          language_id: 1,
          school_id: 1
        },
        {
          id: 3,
          student_id:'7866yyy',
          first_name:'Lettie',
          last_name:'Summers',
          //grade_type_id:20,
          grade_type_id:2,
          IEP_deadline:'2017-11-30 05:00:00',
          profile_img:'./static/lettie.jpg',
          school_id: 1
        },
        {
          id: 4,
          student_id:'909ynk',
          first_name:'Lou',
          last_name:'Stone',
          //grade_type_id:20,
          grade_type_id:4,
          IEP_deadline:'2018-05-06 05:00:00',
          profile_img:'./static/lou.jpg',
          school_id: 1
        },
        {
          id: 5,
          student_id:'998890bhb',
          first_name:'Norman',
          last_name:'Marshall',
          //grade_type_id:20,
          grade_type_id:2,
          IEP_deadline:'2017-09-22 05:00:00',
          profile_img:'./static/norman.jpg',
          school_id: 1
        },
        {
          id: 6,
          student_id:'1234hkjm',
          first_name:'Nano',
          last_name:'Miyashita',
          //grade_type_id:20,
          grade_type_id:3,
          IEP_deadline:'2017-10-29 05:00:00',
          profile_img:'./static/nano.jpg',
          school_id: 1
        },
        {
          id: 7,
          student_id:'098kjkm',
          first_name:'Esther',
          last_name:'Fletcher',
          //grade_type_id:20,
          grade_type_id:4,
          IEP_deadline:'2018-04-12 05:00:00',
          profile_img:'./static/esther.jpg',
          school_id: 1
        },
        {
          id: 8,
          student_id:'111iklp',
          first_name:'Erik',
          last_name:'Gray',
          //grade_type_id:20,
          grade_type_id:6,
          IEP_deadline:'2017-10-11 05:00:00',
          profile_img:'./static/erik.jpg',
          school_id: 1
        },
        {
          id: 9,
          student_id:'09067yuj',
          first_name:'Luca',
          last_name:'Carpenter',
          //grade_type_id:20,
          grade_type_id:3,
          IEP_deadline:'2017-09-01 05:00:00',
          profile_img:'./static/luca.jpg',
          school_id: 1
        },
        {
          id: 10,
          student_id:'34561kk',
          first_name:'Adam',
          last_name:'Coleman',
          //grade_type_id:20,
          grade_type_id:6,
          IEP_deadline:'2017-12-14 05:00:00',
          profile_img:'./static/adam.jpg',
          school_id: 1
        },
        {
          id: 11,
          student_id:'234kldk',
          first_name:'May',
          last_name:'Hayes',
          //grade_type_id:20,
          grade_type_id:1,
          IEP_deadline:'2018-02-06 05:00:00',
          profile_img:'./static/may.jpg',
          school_id: 1
        },
        {
          id: 12,
          student_id:'0918lkdk',
          first_name:'Mark',
          last_name:'Coleman',
          //grade_type_id:20,
          grade_type_id:3,
          IEP_deadline:'2018-04-03 05:00:00',
          profile_img:'./static/mark.jpg',
          school_id: 1
        },
        {
          id: 13,
          student_id:'0918yuhj',
          first_name:'Demo',
          last_name:'Student 1',
          grade_type_id:3,
          //grade_type_id:20,
          IEP_deadline:'2018-05-03 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 1
        },
        {
          id: 14,
          student_id:'0786yuhj',
          first_name:'Demo',
          last_name:'Student 2',
          //grade_type_id:2,
          grade_type_id:20,
          IEP_deadline:'2018-01-05 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 1
        },
        {
          id: 15,
          student_id:'0917hohj',
          first_name:'Demo',
          last_name:'Student 3',
          //grade_type_id:6,
          grade_type_id:20,
          IEP_deadline:'2017-09-03 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 1
        },
        {
          id: 16,
          student_id:'0076yuxj',
          first_name:'Demo',
          last_name:'Student 4',
          //grade_type_id:4,
          grade_type_id:20,
          IEP_deadline:'2017-10-11 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 1
        },
        {
          id: 17,
          student_id:'0098duxj',
          first_name:'Demo',
          last_name:'Student 5',
          //grade_type_id:1,
          grade_type_id:20,
          IEP_deadline:'2017-12-07 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 1
        },
        {
          id: 18,
          student_id:'0917hohK',
          first_name:'Demo',
          last_name:'Strive 1',
          //grade_type_id:6,
          grade_type_id:4,
          IEP_deadline:'2017-09-03 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 3
        },
        {
          id: 19,
          student_id:'0076yuKj',
          first_name:'Demo',
          last_name:'Strive 2',
          //grade_type_id:4,
          grade_type_id:6,
          IEP_deadline:'2017-10-11 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 3
        },
        {
          id: 20,
          student_id:'009Kduxj',
          first_name:'Demo',
          last_name:'Strive 3',
          //grade_type_id:1,
          grade_type_id:4,
          IEP_deadline:'2017-12-07 05:00:00',
          profile_img:'./static/user_icon.png',
          school_id: 3
        }
      ]);
    });
};
