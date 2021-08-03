const express = require('express');
const app = express();

// ---- APP LEVEL MIDDLEWARE ----
const logger = (req , res , next)=>{
    console.log('This is an app level middleware');
    next();
}

app.use(logger);

app.get('/' , (req , res)=>{
    res.send('hello world');
});

// ---- ROUTER ----
// All the below routes belong to home so they can be written in seperate file
/* Auth routes
        1. /contact
        2. /about
        3. /event
*/
const homeRouter = require('./homeRouter');
app.use('/' , homeRouter);


/* Auth routes
        1. /account/login
        2. /account/register
        3. /account/forgotPassword
        4. /account/logout    
*/

const authRouter = require('./authRouter');
app.use('/account' , authRouter);

app.listen(3000 , ()=>{
    console.log('server up and running');
});