

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE student CASCADE; ALTER SEQUENCE student_id_seq restart with 9')
    .then(function () {
      return knex('student').insert([
        {
          id: 1,
          student_id:'879738zyz',
          first_name:'Jane',
          last_name:'Gonzalez',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'http://www.lbusd.k12.ca.us/Asset/Slideshows/Dept/Students_ES/ES_Image_09.jpg'
        },
        {
          id: 2,
          student_id:'34738xyu',
          first_name:'Benjamin',
          last_name:'Perkins',
          grade_type_id:6,
          IEP_deadline:'2017-12-01 05:00:00',
          profile_img:'http://schools.billmorley.com/wp-content/uploads/2015/02/27_resize.jpg'
        },
        {
          id: 3,
          student_id:'7866yyy',
          first_name:'Lettie',
          last_name:'Summers',
          grade_type_id:2,
          IEP_deadline:'2017-11-30 05:00:00',
          profile_img:'http://schools.billmorley.com/wp-content/uploads/2015/02/34_resize.jpg'
        },
        {
          id: 4,
          student_id:'909ynk',
          first_name:'Lou',
          last_name:'Stone',
          grade_type_id:4,
          IEP_deadline:'2017-05-06 05:00:00',
          profile_img:'http://s3.amazonaws.com/digitaltrends-uploads-prod/2015/11/kid-with-tablet-youtube-kids.jpg'
        },
        {
          id: 5,
          student_id:'998890bhb',
          first_name:'Norman',
          last_name:'Marshall',
          grade_type_id:2,
          IEP_deadline:'2017-09-22 05:00:00',
          profile_img:'http://everydayfeminism.com/wp-content/uploads/2015/12/iStock_000007169361_Medium.jpg'
        },
        {
          id: 6,
          student_id:'1234hkjm',
          first_name:'Nano',
          last_name:'Miyashita',
          grade_type_id:3,
          IEP_deadline:'2017-10-29 05:00:00',
          profile_img:'https://www.japanindustrynews.com/wp-content/uploads/2015/11/japanese-elementary-school-kid.jpg'
        },
        {
          id: 7,
          student_id:'098kjkm',
          first_name:'Esther',
          last_name:'Fletcher',
          grade_type_id:4,
          IEP_deadline:'2017-04-12 05:00:00',
          profile_img:'http://basilica.ro/wp-content/uploads/2016/10/02-7.jpg'
        },
        {
          id: 8,
          student_id:'111iklp',
          first_name:'Erik',
          last_name:'Gray',
          grade_type_id:6,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/adhd_study_habits_slideshow/getty_rf_photo_of_boy_studying.jpg'
        },
        {
          id: 9,
          student_id:'09067yuj',
          first_name:'Liu',
          last_name:'Carpenter',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'https://d3rmmzlisdjvlb.cloudfront.net/wp-content/uploads/2013/04/shutterstock_71786563.jpg'
        },
        {
          id: 10,
          student_id:'34561kk',
          first_name:'Adam',
          last_name:'Coleman',
          grade_type_id:6,
          IEP_deadline:'2017-10-03 05:00:00',
          profile_img:'https://interactive-math-science-notebooks.wikispaces.com/file/view/BoyWriting.JPG/199143588/271x406/BoyWriting.JPG'
        },
        {
          id: 11,
          student_id:'234kldk',
          first_name:'May',
          last_name:'Hayes',
          grade_type_id:1,
          IEP_deadline:'2017-02-06 05:00:00',
          profile_img:'http://blackchristiannews.com/wp-content/uploads/2016/08/back-to-school-lessons600-525x350.jpg'
        },
        {
          id: 12,
          student_id:'0918lkdk',
          first_name:'Maria',
          last_name:'Coleman',
          grade_type_id:3,
          IEP_deadline:'2017-10-01 05:00:00',
          profile_img:'https://ak2.picdn.net/shutterstock/videos/22690234/thumb/1.jpg'
        }
      ]);
    });
};
