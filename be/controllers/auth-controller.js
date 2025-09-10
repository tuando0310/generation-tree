const authService = require('../services/auth-service');

class AuthController {
   async signup(req, res) {
    const { email, password, personalData } = req.body;
    if (!email || !password || !personalData) {
      return res.status(400).json({ message: 'Email, password, and personal data are required' });
    }

    try {
      await authService.signup(email, password, personalData);
      res.status(201).json({ message: 'User and person created successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      const { token } = await authService.login(email, password);
      res.json({ token });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }

  async changePassword(req, res) {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: 'Old and new passwords are required' });
    }

    try {
      await authService.changePassword(req.userId, oldPassword, newPassword);
      res.json({ message: 'Password changed successfully' });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
}

module.exports = new AuthController();