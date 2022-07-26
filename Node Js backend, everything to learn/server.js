// Create a server,                 [DONE]
// Routes,                          [DONE]
// Authentication,                  [DONE]
// User Role to access the page     [DONE]
// Then keep the user saved with json web token and save web token in localstorage and secret key to server .env file's variable

const express = require('express');
const app = express();
app.listen(3000);

app.use(express.json());

const createAccountRouter = require('./Routes/create-account')
const loginRouter = require('./Routes/login');
const allpostsRouter = require('./Routes/allposts');
const subscribersRouter = require('./Routes/subscribers');



app.use("/create-account", createAccountRouter);
app.use('/login', loginRouter);
app.use("/allposts", allpostsRouter);
app.use("/subscribers", subscribersRouter);





















