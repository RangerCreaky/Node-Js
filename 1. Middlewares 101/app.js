const express = require('express');
const app = express();

// MIDDLEWARES
// they are called in between req and response
// ---- APP LEVEL MIDDLEWARE ----
// this middleware will run for every request made
const logger = (req , res , next)=>{
    console.log('This is an app level middleware');
    next();
}

app.use(logger);

// ---- ROUT LEVEL MIDDLEWARE ----
// If suppose we want a middleware to run only for a certain route
const middleware1 = (req , res , next)=>{
    console.log('Route level middleware 1');
    next();
}

const middleware2 = (req , res , next)=>{
    // console.log(req);
    req.name = "Navaneeth";
    console.log('Route level middleware2 ');
    next();
}

// ROUTES
app.get('/' , middleware1 , middleware2 , (req , res)=>{
    res.status(200);
    console.log(req.name);
    res.json({"name" : "Navaneeth",
                "language" : "javascript"});
    res.end();
});


// LISTEN
app.listen(3000 , ()=>{
    console.log('server up and running at port 8000');
});

