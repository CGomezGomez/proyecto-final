const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const articleRoutes = require('./routes/articles.routes');

require('dotenv').config();

app.use(cors());
app.use(express.json());


app.use('/api/articles', articleRoutes); 

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Base de datos conectada');
  } catch (err) {
    console.error('No se ha podido iniciar la base de datos');
  }

  app.listen(5000, () =>
     console.log('Servidor en ejecución en el puerto 5000')
);
};

// Uso de rutas

startServer();