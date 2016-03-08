var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.json({
        "result" : {
            "page" : 1,
            "listPerPage" : 10,
            "list" : [
                {
                    "epId": 3,
                    "title": "우리강산 푸르게 푸르게 작은 숲",
                    "thumbnail": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/upload_fd07e858a7b10557ea70751ca4a999fe.PNG",
                    "epName": "유한킴벌리"
                }
            ]
        }
    });
});

router.get('/:id', function(req, res, next){
    res.json({
        "result" : {
            "page" : 1,
            "listPerPage" : 10,
            "list" : [
                {
                "epId": 3,
                "title": "우리강산 푸르게 푸르게 작은 숲",
                "thumbnail": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/upload_fd07e858a7b10557ea70751ca4a999fe.PNG",
                "epName": "유한킴벌리",
                "sDate": "2016-04-02 12:00:00",
                "eDate": "2016-04-12 12:00:00",
                "content" : "우리강산 푸르게 푸르게, 작은 숲으로 새로워지다",
                "movie" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/videos/%EC%9C%A0%ED%95%9C%ED%82%B4%EB%B2%8C%EB%A6%AC+%27%EC%9A%B0%EB%A6%AC%EA%B0%95%EC%82%B0+%ED%91%B8%EB%A5%B4%EA%B2%8C+%ED%91%B8%EB%A5%B4%EA%B2%8C%EA%B0%80+%EC%9A%B0%EB%A6%AC%EB%8F%99%EB%84%A4%EC%97%90+%EC%98%B5%EB%8B%88%EB%8B%A4%27%ED%8E%B8-CnwvZiEnc-Q.mp4"
                }
            ]
        }
    });
});

router.post('/', function(req, res, next){
    res.json({
        "result" : {
            "message" : "시청 완료 메시지가 정상적으로 들어와서 나뭇잎을 적립했습니다."
        }
    });
});

module.exports = router;