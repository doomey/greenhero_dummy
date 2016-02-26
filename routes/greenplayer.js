var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.json({
        "result" : {
            "page" : 1,
            "listPerPage" : 10,
            "list" : [{
                "epId": 1,
                "title": "숲을 우리가 지켜요",
                "thumbnail": "/photos/xxxxxx.jpg",
                "epName": "하나둘셋주식회사",
                "sDate": "2016-01-01 12:00:00",
                "eDate": "2016-02-01 12:00:00",
                "content" : "좋은 동영상 잘 감상하세요...",
                "file" : "/multimedia/xxxxxx.mp4"
            }]
        }
    });
});

router.post('/', function(req, res, next){
    res.json({
        "result" : {
            "message" : "시청 완료 메시지가 들어왔습니다. 나뭇잎 적립 절차를 진행합니다."
        }
    });
});

module.exports = router;