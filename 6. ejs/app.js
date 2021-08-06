const express = require('express');
const path = require('path');
const app = express();

// MIDDLEWARES
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , 'public')));

// view engine
app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

// ROUTES
app.get("/" , (req , res)=>{
    const username = 'Nav';
    res.render('index' , {username : username});
});


app.listen(3000 , ()=>{
    console.log('server up and running');
})