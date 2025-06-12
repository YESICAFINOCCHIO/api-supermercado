const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productosRouter = require('./routes/productos');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión MongoDB
mongoose.connect('mongodb://localhost/frutasdb')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(error => console.error('Error conectando MongoDB:', error));

app.use('/api/productos', productosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
