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
            "id" : 1,
            "type": 3,
            "title": "[FAQ] 저 차단당했는데 어떻게 해야 하나요?",
            "date": "2016-02-01 15:00:00",
            "body": "Q : 어떻게 해야 해요? A : 기다려봐요"
        }
    });
});

module.exports = router;