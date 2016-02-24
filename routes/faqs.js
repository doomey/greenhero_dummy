var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
        res.json({
            "result": {
                "page": 1,
                "listPerPage": 10,
                "list": [
                    {
                        "id": 4,
                        "type": 2,
                        "title": "저 차단당했어요 어떻게 해야 해요?",
                        "date": "2016-02-01 15:00:00",
                        "body": "차단당했는데 어떻게 해야 하는지 알려주세요"
                    }
                ]
            }
        });
});

module.exports = router;