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
                    "type": 1,
                    "title": "GREEN HERO 캐릭터 공모전 지금 바로 도전하세요!",
                    "date": "2016-02-01 15:00:00",
                    "body": "도전하시면 푸짐한 상품이 있어요"
                }
            ]
        }
    });
});

module.exports = router;