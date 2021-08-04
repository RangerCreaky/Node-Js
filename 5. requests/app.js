const express = require('express');
const path = require('path');
const app = express();

// Static folder
app.use(express.static(path.join(__dirname , 'public')));

// body parser
app.use(express.urlencoded({extended : true}));

app.get('/' , (req , res)=>{
    res.sendFile('index.html' , {root : __dirname});
});

// Submit a form using get request
app.get('/login' , (req , res)=>{
    const {email , username} = req.query;
    res.send(`${email} , ${username}`);
});

// Submit a form using post request
app.post('/login' , (req , res)=>{
    const {email , username} = req.body;
    res.send(`${email} , ${username}`);
});

app.listen(3000 , ()=>{
    console.log('ok thank you');
});

