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
                        "type": 3,
                        "title": "[FAQ] 저 차단당했는데 어떻게 해야 하나요?",
                        "date": "2016-02-01 15:00:00"
                    },
                    {
                        "id" : 2,
                        "type": 3,
                        "title": "[FAQ] 나뭇잎이 제대로 적립이 안 되는데 어떻게 해야 하나요?",
                        "date": "2016-02-02 15:00:00"
                    },
                    {
                        "id" : 3,
                        "type": 3,
                        "title": "[FAQ] 나뭇잎을 많이 얻으려면 어떻게 해야 할까요?",
                        "date": "2016-02-03 15:00:00"
                    }
                ]
            }
        });
});

router.get('/:faqId', function(req, res, next){
    res.json({
        "result" : {
            "page": 1,
            "listPerPage": 10,
            "list" : [
                {
                    "id" : 1,
                    "type": 3,
                    "title": "[FAQ] 저 차단당했는데 어떻게 해야 하나요?",
                    "date": "2016-02-01 15:00:00",
                    "body": "Q : 어떻게 해야 해요? A : 기다려봐요"
                },
                {
                    "id" : 2,
                    "type": 3,
                    "title": "[FAQ] 나뭇잎이 제대로 적립이 안 되는데 어떻게 해야 하나요?",
                    "date": "2016-02-02 15:00:00",
                    "body": "Q : 나뭇잎 적립 안 되는데요? A : 시간이 해결해줄 거예요"
                },
                {
                    "id" : 3,
                    "type": 3,
                    "title": "[FAQ] 나뭇잎을 많이 얻으려면 어떻게 해야 할까요?",
                    "date": "2016-02-03 15:00:00",
                    "body": "Q : 노하우가 있나요? A : 게시글 많이 달고 댓글 많이 달고 동영상 많이 보세요 ^^"
                }
            ]
        }
    });
});

module.exports = router;