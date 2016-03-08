var express = require('express');
var router = express.Router();

router.post('/me', function(req, res, next) {
    if(err) {
        var err = new Error('알람종을 불러올 수 없습니다.');
        err.code = "err005";
        res.json(err);
    } else {
        res.json({
            "result" : {
                "success" : true,
                "message" : "알람 성공"
                //"heartInfo" : [{
                //    "nickname" : "송병",
                //    "id" : 1,
                //    "replyId" : 1,
                //    "message" : "춘천막국수님이 내 글을 추천했습니다.",
                //    "heartDate" : "2016-02-23 18:00:00"
                //}],
                //"replyInfo" : [{
                //    "nickname" : "병훈",
                //    "id" : 1,
                //    "replyId" : 2,
                //    "message" : "춘천닭갈비님이 내 글에 댓글을 달았습니다.",
                //    "replyDate" : "2016-02-23 20:00:00"
                //}]
            }
        });
    }

});

module.exports = router;