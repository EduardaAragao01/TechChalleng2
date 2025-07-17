const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true
    },
    dataCriacao: {
        type: String,
        required: true
    },
    dataUltimaModificacao: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('post', postSchema);