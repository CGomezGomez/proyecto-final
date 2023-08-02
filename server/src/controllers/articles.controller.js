// server/controllers/articles.controller.js
const Article = require('../schemes/article.scheme');

const controller = {};

// Obtener todos los artículos
controller.allArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.send(articles);
  } catch (err) {
    res.status(500).send({ error: 'Error al leer la base de datos de artículos' });
  }
};

// Crear un nuevo artículo
controller.createArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newArticle = new Article({ title, content });
    await newArticle.save();
    res.send(newArticle);
  } catch (err) {
    res.status(500).send({ error: 'Error al crear un nuevo artículo' });
  }
};

// Actualizar un artículo
controller.updateArticle = async (req, res) => {
  try {
    const { title, content } = req.body;
    const article = await Article.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    res.send(article);
  } catch (err) {
    res.status(500).send({ error: 'Error al actualizar el artículo' });
  }
};

// Eliminar un artículo
controller.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.send({ message: 'Artículo eliminado correctamente' });
  } catch (err) {
    res.status(500).send({ error: 'Error al eliminar el artículo' });
  }
};


module.exports = controller;