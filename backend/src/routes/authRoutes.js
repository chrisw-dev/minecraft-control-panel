const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');
const authController = new AuthController();

router.get('/auth/google', authController.googleAuth);
router.get('/auth/google/callback', authController.googleAuthCallback);

module.exports = router;