const express = require('express');
const router = express.Router();

const subject = require('../data/contact_subject.json')

router.get('/', (req, res) => {
    res.json(subject);
});

module.exports = router;

