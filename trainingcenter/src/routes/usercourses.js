const express = require('express');
const UserCourse = require('../models/UserCourse'); // Predpokladá sa, že tu máte definovanú triedu UserCourse
const router = express.Router();

router.get('/count', async (req, res) => {
    // TODO: Získanie userId z prihláseného užívateľa
    const userId = req.cookies.userId
    console.log(req.cookies.userId)
    try {
        const count = await UserCourse.countForUser(userId);
        res.json({ count });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error pri získavaní počtu kurzov.');
    }
});

module.exports = router;
