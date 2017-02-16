var router = require('express').Router()
var response = require('../utils/response')
var Category = require('../model/Category')
var Post = require('../model/post')
var checkToken = require('../middlewares/check').checkToken;


// var checkLogin = require('../middlewares/check').checkLogin;

// POST /category/create 新增类别
router.post('/create', checkToken, function(req, res, next) {
  var userId = req.userId;
  var categoryName = req.body.categoryName;
  var category = new Category({
    user_id : userId,
    category_name : categoryName,
  });
  category.save().then(result => {
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});

// GET /list 类别列表
router.get('/list/:userId', function(req, res, next){
  var userId = req.params.userId;
  Category.find({
    user_id : userId,
    category_status : 0
  }).then(result =>{
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
})


// POST /eidt/:categoryId 编辑类别
router.post('/eidt/:categoryId', checkToken, function(req, res, next) {
  var categoryId = req.params.categoryId;
  var categoryName = req.body.categoryName;
  var newCategory = {
    category_name : categoryName,
  };
  Category.findOneAndUpdate({_id: categoryId}, newCategory, {new: true})
  .then(result => {
    categoryId = result._id;
    response(res, 0, categoryId);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


// GET /delete/:categoryId 删除类别
router.get('/delete/:categoryId', checkToken, function(req, res, next) {
  var categoryId = req.params.categoryId;
  Category.findOneAndUpdate({_id: categoryId}, {category_status: 1}, {new: true})
  .then(result => {
    // Logger.info("delete category:"+result);
    // commentId = result._id;
    return Post.update({
      post_category : categoryId,
    }, {
      $set:{
        post_status: 1
      }
    });
    
  }).then(result => {
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


module.exports = router;