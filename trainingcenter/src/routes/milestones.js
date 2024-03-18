const express = require('express');
const Milestone = require('../models/Milestone');
const router = express.Router();

// Pridanie míľnika
router.post('/', async (req, res) => {
    const { courseId, title, description, isCompleted } = req.body;
    try {
        await Milestone.create(courseId, title, description, isCompleted);
        res.status(201).send('Míľnik bol úspešne pridaný.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri pridávaní míľnika.');
    }
});
router.get('/course/:courseId', async (req, res) => {
    const { courseId } = req.params;
    try {
        const milestones = await Milestone.findAllForCourse(courseId);
        res.status(200).json(milestones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri získavaní míľnikov pre kurz.');
    }
});
router.patch('/:milestoneId', async (req, res) => {
    const { milestoneId } = req.params;
    const { isCompleted } = req.body; // Predpokladáme, že klient pošle nový stav míľnika v tele požiadavky
    try {
        await Milestone.updateCompletionStatus(milestoneId, isCompleted);
        res.status(200).send('Stav míľnika bol úspešne aktualizovaný.');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri aktualizácii stavu míľnika.');
    }
});
// Získanie míľnikov pre kurz
// Tu by ste pridali logiku pre získanie všetkých míľnikov pre špecifický kurz

module.exports = router;
