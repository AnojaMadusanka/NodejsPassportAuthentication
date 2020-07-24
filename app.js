const express = require('express');
const alienRouter = require('./routes/aliens');
const basicRoutes = require('./routes/basic');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mongoCon = require('./connection/mongodb');
const bodyParser = require('body-parser');
const passportSetup = require('./config/passport_setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const keys = require('./config/keys');

mongoCon.on('open', ()=>{
    console.log('connected...')
});

//set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys: [keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
//app.use(express.json() );
app.use('/', basicRoutes);
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/aliens', alienRouter);

app.listen(9000, ()=>{
    console.log('Server Started');
})