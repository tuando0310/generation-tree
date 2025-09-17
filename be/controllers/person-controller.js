const personService = require('../services/person-service');
const relationshipService = require('../services/relationship-service');

class PersonController {
  async getAllPeople(req, res) {
    try {
      const persons = await personService.getAllPeople();
      res.json(persons);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  async getPersonById(req, res) {
    try {
      const person = await personService.getPersonById(req.params.personId);
      res.json(person);
    } catch (err) {
      res.status(err.message === 'Person not found' ? 404 : 400).json({ message: err.message });
    }
  }

  async getPersonByUserId(req, res) {
    try {
      const person = await personService.getPersonByUserId(req.params.userId);
      res.json(person);
    } catch (err) {
      res.status(err.message === 'Person not found' ? 404 : 400).json({ message: err.message });
    }
  }

  async createPerson(req, res) {
    try {
      const person = await personService.createPerson(req.body);
      res.status(201).json(person);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async updatePerson(req, res) {
    try {
      const person = await personService.updatePerson(req.params.personId, req.body);
      res.json(person);
    } catch (err) {
      res.status(err.message === 'Person not found' ? 404 : 400).json({ message: err.message });
    }
  }

  async deletePerson(req, res) {
    try {
      const person = await personService.deletePerson(req.params.personId);
      res.json({ message: 'Person deleted', person });
    } catch (err) {
      res.status(err.message === 'Person not found' ? 404 : 400).json({ message: err.message });
    }
  }
  async addParent(req, res) {
    const { personId, parentId } = req.body;
    try {
      const result = await relationshipService.addParent(personId, parentId);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

   async addChild(req, res) {
    const { personId, childId } = req.body;
    try {
      const result = await relationshipService.addChild(personId, childId);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  async addSpouse(req, res) {
    const { personId, spouseId } = req.body;
    try {
      const result = await relationshipService.addSpouse(personId, spouseId);
      res.json(result);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
}

module.exports = new PersonController();