const Router = require('express');
const postController = require('../controller/post.controller')

const router = Router();

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);

module.exports = router;