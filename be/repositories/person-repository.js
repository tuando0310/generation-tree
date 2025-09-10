const Person = require('../models/person');

class PersonRepository {
  async findAll() {
    return await Person.find();
  }

  async findById(id) {
    return await Person.findById(id);
  }

  async findByUserId(userId) {
    return Person.findOne({ userId });
  }
  
  async create(personData) {
    const person = new Person(personData);
    return await person.save();
  }

  async update(id, personData) {
    return await Person.findByIdAndUpdate(id, personData, { new: true });
  }

  async delete(id) {
    return await Person.findByIdAndDelete(id);
  }
}

module.exports = new PersonRepository();