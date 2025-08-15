const express = require('express');
const router = express.Router();
const { getClients, createClient } = require('../controllers/diabetesController');

router.get('/diabetes', getClients);


router.post('/diabetes', createClient);

module.exports = router;
