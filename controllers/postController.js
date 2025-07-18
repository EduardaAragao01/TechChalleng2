const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.render('index', { posts });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('editPost', { post });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.createPost = async (req, res) => {
    const { titulo, autor, conteudo, dataCriacao, dataUltimaModificacao } = req.body;
    try {
        const post = new User({ titulo, autor, conteudo, dataCriacao, dataUltimaModificacao });
        await post.save();
        res.redirect('/posts');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updatePost = async (req, res) => {
    const { titulo, autor, conteudo, dataCriacao, dataUltimaModificacao } = req.body;
    try {
        await Post.findByIdAndUpdate(req.params.id, { titulo, autor, conteudo, dataCriacao, dataUltimaModificacao });
        res.redirect('/posts');
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);
        res.redirect('/posts');
    } catch (err) {
        res.status(500).send(err);
    }
};