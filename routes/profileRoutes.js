const express = require('express');
const router = express.Router();
const authCheck = require('../middleware/authCheck');

router.get('/', authCheck, async(req,res)=>{
   res.render('profile',{user:req.user});
});

module.exports = router;