var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    if(req.secure) {
        res.json(
            {
                "result" : {
                    "message" : "주문에 성공하였습니다.",
                    "orderId" : 1,
                    "items" : [{
                        "id" : 1,
                        "name" : "슬로우 가방",
                        "picture" : "https://s3.ap-northeast-2.amazonaws.com/greenhero/photos/upload_40b40ac4ad612402e62c3d2301e5953d.PNG",
                        "price" : 1000,
                        "quantity" : 1
                    }],
                    "totalPrice" : 1000,
                    "oInfo" : {
                        "id" : 1,
                        "name" : "송병훈",
                        "email" : "kirsch2u@naver.com",
                        "Phone" : "010-1234-5678"
                    },
                    "aInfo" : {
                        "name" : "병훈송",
                        "phone1" : "010-1234-5678",
                        "phone2" : "011-1234-5678",
                        "adCode" : "12345",
                        "address" : "춘천",
                        "care" : "조심하세요"
                    }
                }
            }
        );
    } else {
        var err = new Error('SSL/TLS Upgreade Required...');
        err.status = 426;
        next(err);
    }

});

router.post('/setaddress', function(req, res, next) {
    if(req.secure) {
        res.json({
            "result" : {
                "message" : "주소가 등록되었습니다."
            }
        });
    } else {
        var err = new Error('SSL/TLS Upgreade Required...');
        err.status = 426;
        next(err);
    }


});
module.exports = router;