const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', async(req,res)=>{
    res.render('login', {user: req.user});
});

//auth with google
router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/redirect', 
    passport.authenticate('google'), function(req, res) {
  // Successful authentication, redirect home.
    //res.render('home', { user:req.user });
    res.redirect('/profile');
});

//auth logout
router.get('/logout', async(req, res)=>{
    req.logout();
    res.redirect('/');
});

module.exports =router;