var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
        res.json({
            "result": {
                "page" : 1,
                "listPerPage" : 10,
                "list" : [
                    {
                        "id": 2,
                        "type": 3,
                        "title": "이용약관",
                        "date": "2016-01-03 20:00:00",
                        "body": "서비스약관입니다..."
                    }
                ]

            }
        });
});

module.exports = router;