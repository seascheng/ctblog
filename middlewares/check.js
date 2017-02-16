var jwt = require('jsonwebtoken')
var tokenConfig = require('../config/config').token
var response = require('../utils/response')

module.exports = {
  checkToken: function checkToken(req, res, next) {
    var token = (req.body && req.body.token) || (req.query && req.query.token) || (req.params && req.params.token) || req.headers['x-access-token'];
    if (token) {
      // Logger.info("token:"+token +"\nsecret:"+tokenConfig.secret);
      jwt.verify(token, tokenConfig.secret, function(err, decoded) {
        if (err) {
          response(res, -2, 'token验证错误，请重新登录 '+err);
        }else{
          req.userId = decoded.userId;
          next();
        }
      });
    }else{
      response(res, -2, "用户未登录");
    }
  },
};