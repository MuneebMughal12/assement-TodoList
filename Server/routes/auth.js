const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google login route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'] // Request profile and email information
}));

// Google callback route
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }), // Redirect to /login if authentication fails
  (req, res) => {
    // Successful authentication, redirect to /todo
    res.redirect('/todo');
  }
);

// User logout route
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.redirect('/'); // Redirect to homepage after logout
  });
});

module.exports = router;
