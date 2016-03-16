var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "message" : "로그인이 완료 되었습니다. 감사합니다!"
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

router.get('/me', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "gName" : "송병훈",
                "nickname" : "아재개그1인자",
                "totalLeaf" : 50000,
                "todayLeaf" : 45,
                "treeUrl": "https://greenhero.s3.ap-northeast-2.amazonaws.com/photos/a5ff457a-bf4b-42b7-bf2b-be445d30ed4ftree0.png",
                "address" : {
                    "dName" : "송병훈",
                    "dPhone1" : "010-1234-5678",
                    "dPhone2" : "010-4321-8765",
                    "dAdcode" : "12345",
                    "dAddress" : "춘천"
                }
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

router.put('/me', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "message" : "내 정보가 수정되었습니다."
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

router.get('/me/leafs', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "page" : 1,
                "listPerPage" : 2,
                "list" : [
                    {
                        "leafType" : 0,
                        "leafApplydate" : "2016-02-23",
                        "leafChangedamount" : 1000
                    },
                    {
                        "leafType" : 1,
                        "leafApplydate" : "2016-02-23",
                        "leafChangedamount" : 500
                    }
                ]
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});



router.get('/me/baskets', function(req, res, next) {
    if (req.secure) {
        res.json({
            "result": {
                "items": [{
                    "cartId": 1,
                    "itemId": 1,
                    "picture": "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_62ba3b268eacefa3a944e82d959c5534.png",
                    "name": "페이셜오일",
                    "price": 1000,
                    "quantity": 1,
                    "iPrice": 1000
                }, {
                    "cartId": 1,
                    "id": 2,
                    "picture": "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_cc84063db72ed2f562641b56f5fbe0e4.PNG",
                    "name": "사과",
                    "price": 500,
                    "quantity": 3,
                    "iprice": 1500
                }],
                "totalPrice": 2500
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

router.post('/me/baskets', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "message" : "장바구니에 물품을 추가하였습니다."
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

router.put('/me/baskets', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "message" : "장바구니에 물품을 수정하였습니다."
            }
        });
    } else {
        var err = new Error("SSL/TLS Upgrade Required");
        err.status = 426;
        next(err);
    }
});

module.exports = router;