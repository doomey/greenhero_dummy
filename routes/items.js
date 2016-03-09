var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.json({
        "result" : {
            "page" : 1,
            "itemsPerPage" : 10,
            "items" : [{
                "id" : 1,
                "name" : "페이셜 오일",
                "picture" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_62ba3b268eacefa3a944e82d959c5534.png",
                "star" : 13,
                "price" : 200
            }]
        }
    });
});

router.get('/:itemsId', function(req, res, next){
    res.json({
        "result" : {
            "items" : [{
                "itemCount" : 10,
                "itemDescription" : "피부를 촉촉하게"
            }]
        }
    });
});

module.exports = router;