const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  codigo: Number,
  nombre: String,
  precio: Number,
  categoria: String
});

module.exports = mongoose.model('Producto', productoSchema);