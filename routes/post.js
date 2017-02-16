var router = require('express').Router();
var response = require('../utils/response');
var Post = require('../model/post')


// var checkLogin = require('../middlewares/check').checkLogin;

// POST /post/create 发表文章页
router.post('/create', function(req, res, next) {
  var userId = req.body.userId;
  var postTitle = req.body.postTitle;
  var postContent = req.body.postContent;
  var postCategory = req.body.postCategory;
  var post = new Post({
    post_user : userId,
    post_title : postTitle,
    post_content : postContent,
    post_category : postCategory,
  });
  post.save().then(result => {
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});

// GET /:postId 查看文章详情
router.get('/view/:postId', function(req, res, next){
  var postId = req.params.postId;
  Post.findById(postId)
  .then(result =>{
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
})

// GET /list 查看文章列表
router.get('/list', function(req, res, next){
  var userId = req.query.userId;
  var keyword = req.query.keyword || '';
  var category = req.query.category;
  var tag = req.query.tag || [];
  var index = req.query.index || 0;
  var limit = req.query.limit || 5;
  Logger.info("category::::"+category);
  var query = {};
  userId?query.post_user=userId:1;
  keyword?query.post_title=new RegExp(''+keyword+'', "i"):1;
  category?query.post_category=category:1;
  query.post_status = 0;
  Post.find(query, null, {
    skip:+index*limit, 
    limit:+limit
  }).then(result =>{
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
})


// POST /eidt/:postId 编辑文章页
router.post('/eidt/:postId', function(req, res, next) {
  var postId = req.params.postId;
  var postTitle = req.body.postTitle;
  var postContent = req.body.postContent;
  var postCategory = req.body.postCategory;
  var newPost = {
    post_title : postTitle,
    post_content : postContent,
    post_category : postCategory,
  };
  Post.findOneAndUpdate({_id:postId}, newPost, {new: true})
  .then(result => {
    postId = result._id;
    response(res, 0, postId);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


// GET /delete/:postId 删除文章页
router.get('/delete/:postId', function(req, res, next) {
  var postId = req.params.postId;
  // Post.findOneAndRemove({_id:postId})
  Post.findOneAndUpdate({_id:postId}, {post_status:1}, {new: true})
  .then(result => {
    postId = result._id;
    response(res, 0, postId);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


module.exports = router;