const mongoose = require('mongoose');

// coño
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }, 
    () => console.log('Conexión exitosa con BD 🐢'));