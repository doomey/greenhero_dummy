var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
        res.json({
            "result": {
                "page" : 1,
                "listPerPage" : 10,
                "list" : [
                    {
                        "id" : 1,
                        "type": 2,
                        "title": "서비스약관",
                        "date": "2016-02-01 15:00:00"
                    },
                    {
                        "id" : 2,
                        "type": 2,
                        "title": "이용약관",
                        "date": "2016-02-02 15:00:00"
                    }
                ]

            }
        });
});

router.get('/:accesstermId', function(req, res, next){
    res.json({
        "result" : {
            "list" : [
                {
                    "body": "서비스약관의 내용이 들어간다."
                }
            ]
        }
    });
});

module.exports = router;