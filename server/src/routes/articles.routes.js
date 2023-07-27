const express = require('express');
const articleRoutes = express.Router();
const controller = require('../controllers/articles.controller');

articleRoutes.get('/', controller.allArticles);

articleRoutes.post('/', controller.createArticle);

articleRoutes.patch('/:id', controller.updateArticle);

articleRoutes.delete('/:id', controller.deleteArticle);

module.exports = articleRoutes;