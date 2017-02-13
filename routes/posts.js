var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /posts/create 发表文章页
router.get('/create', checkLogin, function(req, res, next) {
  res.render('create');
});

// GET /posts/:postId/comment/:commentId/remove 删除一条留言
router.get('/:postId/comment/:commentId/remove', checkLogin, function(req, res, next) {
  // var commentId = req.params.commentId;
  // var author = req.session.user._id;

  // CommentModel.delCommentById(commentId, author)
  //   .then(function () {
  //     req.flash('success', '删除留言成功');
  //     // 删除成功后跳转到上一页
  //     res.redirect('back');
  //   })
  //   .catch(next);
});

module.exports = router;