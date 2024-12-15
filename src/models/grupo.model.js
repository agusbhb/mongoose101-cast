const mongoose = require('mongoose');
const grupoSchema = new mongoose.Schema({
    nombre: String,
    estudiantes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiante'
    }]
});
module.exports = mongoose.model('Grupo', grupoSchema);
