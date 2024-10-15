const Post = require('../models/Post');

const handleErrorResponse = (res, error, defaultMessage) => {
    console.error(error);
    return res.status(500).json({ error: defaultMessage });
};

exports.createPost = async (req, res) => {
    const { title, description } = req.body;

    try {
        const post = await Post.create({ title, description, userId: req.userId });
        res.status(201).json(post);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao criar post.');
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json(posts);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao obter posts.');
    }
};

exports.getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado.' });
        }
        res.status(200).json(post);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao obter post.');
    }
};

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado.' });
        }

        post.title = title || post.title;
        post.description = description || post.description;

        await post.save();
        res.status(200).json(post);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao atualizar post.');
    }
};

exports.deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);
        if (!post) {
            return res.status(404).json({ error: 'Post não encontrado.' });
        }

        await post.destroy();
        res.status(204).send(); // No content
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao excluir post.');
    }
};
