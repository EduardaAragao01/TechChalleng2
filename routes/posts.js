const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getAllPosts);
router.get('/new', (req, res) => res.render('newPost'));
router.get('/:id', postsController.getById);
router.post('/', postsController.createPost);
router.post('/:id', postsController.updatePost);
router.post('/:id/delete', postsController.deletePost);

module.exports = router;