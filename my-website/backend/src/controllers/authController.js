const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const allowedUsers = ['user1@gmail.com', 'user2@gmail.com']; // predefined list of users

class AuthController {
  async authenticate(req, res) {
    const { token }  = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email } = ticket.getPayload();

    if (!allowedUsers.includes(email)) {
      return res.status(403).send('Access denied');
    }

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email });
      await user.save();
    }

    req.user = user;
    res.send('Authenticated');
  }
}

module.exports = new AuthController();