var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({
        "result": {
            "page": 1,
            "listPerPage": 10,
            "list": [
                {
                    "id": 1,
                    "title": "오늘의 분리수거",
                    "heart": 2,
                    "rAmount": 4,
                    "backgroundUrl": null,
                    "photoUrl": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/upload_7cf68e7fa9c88611e506e60f5995f5c8.jpg"
                }
            ]
        }
    });
})

router.get('/searching', function(req, res, next){
   res.json({
      "result": {
         "page": 1,
         "listPerPage": 10,
         "list": [
            {
               "id": 1,
               "title": "오늘의 분리수거",
               "heart": 2,
               "rAmount": 4,
               "backgroundUrl": null,
               "photoUrl": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/upload_7cf68e7fa9c88611e506e60f5995f5c8.jpg"
            }
         ]
      }
   });
})

router.get('/:ediaryId', function(req, res, next) {
    res.json({
      "result": {
        "page": 1,
        "listPerPage": 10,
        "list": [{
          "id": 1,
          "title": "오늘의 분리수거",
          "nickname": "해봄해범",
          "wtime": "2016-01-25 08:33:12",
          "heart": 2,
          "rAmount": 4,
          "backgroundUrl": null,
          "content": "오늘은 분리수거를 하는 날이라...",
          "photoUrl": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/upload_7cf68e7fa9c88611e506e60f5995f5c8.jpg"
        }],

        "newest": [
          {"id": 43, "title": "나무를 심어요", "thumbnail": "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_557f487b3b111e4fb4fa3312df69adac.jpg", "backgroundUrl": null},
          {"id": 42, "title": "쓰레기를 버리지 맙시다", "thumbnail": null, "backgroundUrl": "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_62b39985f14368f924eb32498c135136.PNG"}
        ]
      }
    });
});

router.get('/:ediaryId/replies', function(req, res, next) {
    res.json({
      "result" : {
        "ediaryId" : 1,
        "page" : 1,
        "listPerPage" : 10,
        "list" : [{
          "id" : 1,
          "body" : "저도 분리수거 참 좋아하는데요...",
          "wtime" : "2016-02-25 08:33:12",
          "nickname" : "이동훈훈"
        }]
      }
    });
});


router.post('/:ediaryId/replies', function(req, res, next) {
  res.json({
    "result": {
      "replyId": 2,
      "message": "댓글이 작성되었습니다."
    }
  });
});

router.put('/:ediaryId/replies/:replyId', function(req, res, next) {
     res.json({
       "result": {
         "message": "수정이 완료되었습니다."
       }
     })
});



module.exports = router;

