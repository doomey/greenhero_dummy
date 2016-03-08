var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "page" : 1,
                "cnt" : 20,
                "itemsPerPage" : 2,
                "items" : [{
                    "id" : 1,
                    "name" : "슬로우 가방",
                    "picture" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_40b40ac4ad612402e62c3d2301e5953d.PNG",
                    "price" : 1000,
                    "quantity" : 2,
                    "iPrice" : 2000
                }, {
                    "id" : 2,
                    "name" : "후레쉬 폼",
                    "picture" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_548e3013dd8e464cbecf97f25ef2ebe7.JPG",
                    "price" : 500,
                    "quantity" : 2,
                    "iPrice" : 1000
                }]
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
})
module.exports = router;