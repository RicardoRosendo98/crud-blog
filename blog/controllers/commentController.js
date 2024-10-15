const Comment = require('../models/Comment');

const handleErrorResponse = (res, error, defaultMessage) => {
    console.error(error);
    return res.status(500).json({ error: defaultMessage });
};

exports.createComment = async (req, res) => {
    const { description, postId } = req.body;

    try {
        const comment = await Comment.create({ description, postId, userId: req.userId });
        res.status(201).json(comment);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao criar comentário.');
    }
};

exports.getComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.status(200).json(comments);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao obter comentários.');
    }
};

exports.updateComment = async (req, res) => {
    const { id } = req.params;
    const { description } = req.body;

    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentário não encontrado.' });
        }

        comment.description = description || comment.description;

        await comment.save();
        res.status(200).json(comment);
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao atualizar comentário.');
    }
};

exports.deleteComment = async (req, res) => {
    const { id } = req.params;

    try {
        const comment = await Comment.findByPk(id);
        if (!comment) {
            return res.status(404).json({ error: 'Comentário não encontrado.' });
        }

        await comment.destroy();
        res.status(204).send();
    } catch (error) {
        handleErrorResponse(res, error, 'Erro ao excluir comentário.');
    }
};

