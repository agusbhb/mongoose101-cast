const Grupo = require('../models/grupo.model');
const Estudiante = require('../models/estudiante.model');

exports.createGrupo = async (req, res, next) => {
    try {
        const grupo = new Grupo(req.body);
        const savedGrupo = await grupo.save();
        res.status(201).json(savedGrupo);
    } catch (error) {
        next(error);
    }
};
exports.assignEstudianteToGrupo = async (req, res, next) => {
    try {
        const { grupoId, estudianteId } = req.body;
        const grupo = await Grupo.findById(grupoId);
        const estudiante = await Estudiante.findById(estudianteId);
        if (!grupo || !estudiante) {
            return res.status(404).json({ message: 'No se ha encontrado bien el grupo o bien el estudiante' });
        }
        grupo.estudiantes.push(estudianteId);
        await grupo.save();
        res.json(grupo);
    } catch (error) {
        next(error);
    }
};
exports.getGrupos = async (req, res, next) => {
    try {
        const grupos = await Grupo.find().populate('estudiantes');
        res.json(grupos);
    } catch (error) {
        next(error);
    }
};
