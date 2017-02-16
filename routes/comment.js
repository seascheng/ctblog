var router = require('express').Router()
var Comment = require('../model/comment')
var response = require('../utils/response')
var checkToken = require('../middlewares/check').checkToken;

// POST /comment/create 发表评论
router.post('/create', checkToken, function(req, res, next) {
  var userId = req.userId;
  var postId = req.body.postId;
  var commentContent = req.body.commentContent;
  var commentParent = req.body.commentParent;
  var comment = new Comment({
    user_id : userId,
    post_id : postId,
    comment_content : commentContent,
    comment_parent : commentParent,
  });
  comment.save().then(result => {
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});

// GET /list 查看文章评论列表
router.get('/list/:postId', function(req, res, next){
  var postId = req.params.postId;
  var index = req.query.index || 0;
  var limit = req.query.limit || 10;
  Comment.find({
    post_id : postId,
    comment_status : 0
  }, null, {
    skip:+index*limit, 
    limit:+limit
  }).then(result =>{
    response(res, 0, result);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
})


// POST /eidt/:commentId 编辑评论
router.post('/eidt/:commentId', checkToken, function(req, res, next) {
  var commentId = req.params.commentId;
  var commentContent = req.body.commentContent;
  var newComment = {
    comment_content : commentContent,
  };
  Comment.findOneAndUpdate({_id: commentId}, newComment, {new: true})
  .then(result => {
    commentId = result._id;
    response(res, 0, commentId);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


// GET /delete/:commentId 删除评论
router.get('/delete/:commentId', checkToken, function(req, res, next) {
  var commentId = req.params.commentId;
  Comment.findOneAndUpdate({_id: commentId}, {comment_status: 1}, {new: true})
  .then(result => {
    commentId = result._id;
    response(res, 0, commentId);
  }).catch(error =>{
    response(res, -1, ""+error);
  });
});


module.exports = router;