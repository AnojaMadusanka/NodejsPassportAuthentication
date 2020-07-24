const authhCheck = (req, res, next)=>{
    if(!req.user){
        //if user not loggedin
        res.redirect('/auth/login');
    }else{
        next();    // tells this is go to the next function
    }
};

module.exports = authhCheck;