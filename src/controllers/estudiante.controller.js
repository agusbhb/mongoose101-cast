const Estudiante = require('../models/estudiante.model');
const mongoose = require('mongoose');
exports.getEstudiantes = async (req, res, next) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        next(error);
    }
};

exports.createEstudiante = async (req, res, next) => {
    try {
        const estudiante = new Estudiante(req.body);
        const savedEstudiante = await estudiante.save();
        res.status(201).json(savedEstudiante);//convierte la información de savedEstudiante en un json siempre y cuando la consulta realizada sea correcta
    } catch (error) {
        next(error);
    }
};

exports.getEstudianteById = async (req, res, next) => {
    try {
        const estudiante = await Estudiante.findById(req.params.id);
        if (!estudiante) {
            return res.status(404).json({ message: 'No se ha encontrado el estudiante' });
        }
        res.json(estudiante);
    } catch (error) {
        next(error);
    }
};
// Añade el resto de controladores...

exports.deleteEstudianteById = async (req, res, next) => {
    try{
        const result = await Estudiante.findByIdAndDelete(req.params.id);
        if (!result){
            return res.status(404).json({message: 'Estudiante no encontrado'})
        }
        return res.json({ message: 'Estudiante eliminado correctamente', data: result });
    } catch(error){
        return res.status(500).json({ message: 'Error interno del servidor', error: error.message });
    }
}

exports.updateEstudianteById = async(req,res,next) => {
    try{
        const estudianteID  = req.params.id;
        const idEstudiante = await Estudiante.findByIdAndUpdate(estudianteID, req.body, { new: true });
        if(!idEstudiante){
            return res.status(404).json({message: "Estudiante no encontrado"});
        }
        return res.json({ message: "Estudiante atualizado correctamente", data: idEstudiante});
    } catch(error){
        next(error);
    }
}
