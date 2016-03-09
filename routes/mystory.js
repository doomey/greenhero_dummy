var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({
        "result" : {
            "page" : 1,
            "listPerPage" : 10,
            "list" : [
                {
                    "id" : 3,
                    "title" : "재활용 합시당",
                    "wtime" : "2015-09-01 09:32:12",
                    "heart" : 2,
                    "rAmount" : 4
                },
                {
                    "id" : 4,
                    "title" : "오늘 분리수거 팁",
                    "wtime" : "2015-09-02 10:40:12",
                    "heart" : 5,
                    "rAmount" : 2
                }
            ]
        }
    });
});

router.get('/:ediaryId', function(req, res, next) {
    res.json(
        {
            "result" : {
                "list" : [{
                    "nickname" : "우리들은",
                    "backgroundUrl" : null,
                    "content" : "오늘 재활용 센터를 다녀왔는데...",
                    "photoUrl" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_74a91f9a6eea07c90d37368b9865c372.jpg"
                }]

            }
        }
    );
});

router.post('/', function(req, res, next) {
    res.json({
            "result" : {
                "ediaryId" : 12,
                "message" : "쓰기가 완료되었습니다."
            }
    });
});

router.put('/:ediaryId', function(req, res, next) {
    res.json({
        "result" : {
            "message" : "수정이 완료되었습니다."
            }
        });
});

module.exports = router;
