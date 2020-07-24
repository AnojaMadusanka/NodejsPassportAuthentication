const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', async(req,res)=>{
    res.render('login');
});

//auth with google
router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', 
    passport.authenticate('google'), function(req, res) {
  // Successful authentication, redirect home.
    req.logout();
    res.render('home', { user:req.user });
});

//auth logout
router.get('/logout', async(req, res)=>{
    res.send('Logging out');
});

module.exports =router;