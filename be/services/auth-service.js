const userRepository = require('../repositories/user-repository');
const personService = require('../services/person-service');
const jwt = require('jsonwebtoken');

class AuthService {
  async signup(email, password, personalData) {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create User
    const user = await userRepository.create({ email, password });

    // Create Person with userId
    const personData = { ...personalData, userId: user._id };
    const person = await personService.createPerson(personData);

    // Update User with Person ID
    await userRepository.updatePersonId(user._id, person._id);

    return user;
  }

  async login(email, password) {
    const user = await userRepository.findByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token };
  }

  async changePassword(userId, oldPassword, newPassword) {
    const user = await userRepository.findById(userId);
    if (!user || !(await user.comparePassword(oldPassword))) {
      throw new Error('Invalid old password');
    }
    return userRepository.updatePassword(userId, newPassword);
  }
}

module.exports = new AuthService();