const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        min: 16
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

// Middlewares
estudianteSchema.pre('save', function(next) {
    this.nombre = this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    next();
});
estudianteSchema.path('email').validate(function(email) {
        return email.includes('@'); },
    'El email debe tener @');

module.exports = mongoose.model('Estudiante', estudianteSchema);