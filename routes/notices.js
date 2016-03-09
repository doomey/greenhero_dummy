var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({
        "result": {
            "page": 1,
            "listPerPage": 10,
            "list": [
                {
                    "id" : 1,
                    "type": 1,
                    "title": "[EVENT] 2016년 4월 5일 식목일, 자신의 이름으로 된 나무를 무료로 심어드립니다!",
                    "date": "2016-02-01 15:00:00"
                },
                {
                    "id" : 2,
                    "type": 1,
                    "title": "[EVENT] 너 내 동료가 되라. GREEN HERO 캐릭터 공모전 지금 바로 도전하세요!",
                    "date": "2016-02-02 15:00:00"
                },
                {
                    "id" : 3,
                    "type": 1,
                    "title": "[EVENT] 봄이 왔어요~ 3월 한 달간 나뭇잎 1.5배 추가 적립의 혜택 놓치지 마세요~",
                    "date": "2016-02-03 15:00:00"
                }
            ]
        }
    });
});

router.get('/:noticeId', function(req, res, next){
    res.json({
        "result" : {
            "list" : [
                {
                    "body": "SK Planet x GREEN HERO " +
                            "식목일 is coming! 우리 함께 나무싶어요~ " +
                            "지금 이벤트에 참여하면 식목일에 SK Planet에서 자신의 이름으로 된 나무를 무료로 심어드립니다. " +
                            "GREEN HERO 여러분의 많은 참여 부탁드립니다. " +
                            "감사합니다."
                }
            ]
        }
    });
});

module.exports = router;