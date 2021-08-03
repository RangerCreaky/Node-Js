const express = require('express');
const router = express.Router();

router.get('/register' , (req , res)=>{
    res.send('<h1> register </h1>')
});
router.get('/login' , (req , res)=>{
    res.send('<h1> login </h1>')
});
router.get('/forgot' , (req , res)=>{
    res.send('<h1> forgot password </h1>')
});
router.get('/logout' , (req , res)=>{
    res.send('<h1> logout </h1>')
});




module.exports = router;