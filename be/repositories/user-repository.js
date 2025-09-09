const User = require('../models/user');

class UserRepository {
  async findByEmail(email) {
    return User.findOne({ email });
  }

  async create(userData) {
    const user = new User(userData);
    return user.save();
  }

  async findById(id) {
    return User.findById(id);
  }

  async updatePassword(id, newPassword) {
    const user = await User.findById(id);
    user.password = newPassword;
    return user.save();
  }
}

module.exports = new UserRepository();