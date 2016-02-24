var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
        res.json({
            "result": {
                "page": 1,
                "listPerPage": 10,
                "list": [
                    {
                        "id": 3,
                        "type": 4,
                        "title": "운영정책",
                        "date": "2016-02-02 15:00:00",
                        "body": "본 운영 정책은 그린히어로가 제공하는..."
                    }
                ]
            }
        });
});

module.exports = router;