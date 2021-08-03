const express = require('express');
const router = express.Router();

router.get('/contact' , (req , res)=>{
    res.send('<h1> Contact us </h1>')
});
router.get('/about' , (req , res)=>{
    res.send('<h1> About us </h1>')
});
router.get('/events' , (req , res)=>{
    res.send('<h1> Events </h1>')
});




module.exports = router;