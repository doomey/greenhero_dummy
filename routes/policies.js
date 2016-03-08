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
                        "type": 4,
                        "title": "운영정책",
                        "date": "2016-02-01 15:00:00"
                    }
                ]
            }
        });
});

router.get('/:id', function(req, res, next){
    res.json({
        "result" : {
            "page": 1,
            "listPerPage": 10,
            "list" : [
                {
                    "id" : 1,
                    "type": 4,
                    "title": "운영정책",
                    "date": "2016-02-01 15:00:00",
                    "body": "본 운영정책은 가그린이 제공하는 그린히어로와 관련하여..."
                }
            ]
        }
    });
});

module.exports = router;