var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next){
    res.json({
        "result": {
            "message" : "알콜마스터님에게 공감하였습니다."
        }
    });
});

module.exports = router;