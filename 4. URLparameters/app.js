const express = require('express');
const app = express();

app.get('/' , (req , res)=>{
    res.send('<h1> Hello world </h1>');
});

app.get('/profile/:username' , (req , res)=>{
    const username = req.params.username;
    console.log('username');
    res.send('Your username : ' +  username);
});

app.get('/events/:city/:venue?' , (req , res)=>{
    const city = req.params.city;
    const venue = req.params.venue;

    res.send('city : ' + city + ' venue : ' + venue);   
});

app.listen(3000 , ()=>{
    console.log('server up and running at port 8000');
});