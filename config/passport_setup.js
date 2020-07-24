const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/User');

//serialize the user
// when done method call from the callback functions. this serialize executes and put them into a cookie
passport.serializeUser((user, done)=>{
    done(null, user.id);
});

//deserialize user
passport.deserializeUser((id, done)=>{
    User.findById(id).then((user)=>{
        done(null, user.id);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
  },
  function(accessToken, refreshToken, profile, done) {
    //passport callback function
    User.findOne({ googleId: profile.id }).then((currentUser)=>{
        if(currentUser) {
            //already a user
            console.log('Current User: ', currentUser);
            done(null, currentUser);
        }else{
            new User({
                username: profile.displayName,
                googleId: profile.id
            })
                .save()
                .then((newUser)=>{
                    console.log('new user created: ' + newUser);
                    done(null, newUser);
            });
        }
    });
  }
));