const personRepository = require('../repositories/person-repository');
const validator = require('validator');

// Check if validator is installed: npm list validator
// Install if needed: npm install validator

class PersonService {
  async getAllPersons() {
    return await personRepository.findAll();
  }

  async getPersonById(personId) {
    if (!validator.isMongoId(personId)) {
      throw new Error('Invalid person ID');
    }
    const person = await personRepository.findById(personId);
    if (!person) {
      throw new Error('Person not found');
    }
    return person;
  }

  async createPerson(personData) {
    if (!personData.name || !personData.gender) {
      throw new Error('Name and gender are required');
    }
    if (!['male', 'female', 'other'].includes(personData.gender)) {
      throw new Error('Invalid gender');
    }
    return await personRepository.create(personData);
  }

  async updatePerson(personId, personData) {
    if (!validator.isMongoId(personId)) {
      throw new Error('Invalid person ID');
    }
    if (personData.gender && !['male', 'female', 'other'].includes(personData.gender)) {
      throw new Error('Invalid gender');
    }
    const person = await personRepository.update(personId, personData);
    if (!person) {
      throw new Error('Person not found');
    }
    return person;
  }

  async deletePerson(personId) {
    if (!validator.isMongoId(personId)) {
      throw new Error('Invalid person ID');
    }
    const person = await personRepository.delete(personId);
    if (!person) {
      throw new Error('Person not found');
    }
    return person;
  }
}

module.exports = new PersonService();