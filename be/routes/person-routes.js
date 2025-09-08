const express = require('express');
const router = express.Router();
const personController = require('../controllers/person-controller');

// Define routes
router.get('/', personController.getAllPeople);
router.get('/:personId', personController.getPersonById);
router.post('/', personController.createPerson);
router.put('/:personId', personController.updatePerson);
router.delete('/:personId', personController.deletePerson);

module.exports = router;