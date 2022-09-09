const { text } = require('express');
const express = require('express');
const pool = require('../utils/database');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

    try {
        const [rows] = await pool
        .promise()
        .query(`SELECT * from demo`);
    
        console.log(rows);

        res.render('index.njk', {
            title: 'Kursdemo',
            intro: 'En demosida för att ge ett litet smakprov på tekniken och vad den kan göra.',
            rows: rows
        });
    } catch (error) {
        console.log(error);
        next();
    }
});

router.get('/test', function(req, res){
    res.render('test.njk', {
        title: 'Mwdagaswkar',
        intro: 'mister Bob vill ha pengarna från banken',
        text: 'Bob är en arg man vill inte använda sinna egna pengar. Då vart Sven(Bobs mäklare) väldigt lässen för han kommer inte ha lön nästa månad.'
    });
})

module.exports = router;