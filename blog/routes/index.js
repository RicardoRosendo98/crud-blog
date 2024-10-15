const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middlewares/auth');

// User Routes
router.post('/users', userController.createUser);
router.post('/login', userController.loginUser);

// Middleware de autenticação
router.use(authMiddleware);

// Post Routes
router.post('/posts', postController.createPost);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

// Comment Routes
router.post('/posts/:postId/comments', commentController.createComment);
router.get('/posts/:postId/comments', commentController.getComments);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
