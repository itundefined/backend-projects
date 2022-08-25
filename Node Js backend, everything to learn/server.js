const express = require('express');
const app = express();
app.listen(process.env.PORT || 3000);

app.use(express.json());


const createAccountRouter = require('./Routes/create-account')
const loginRouter = require('./Routes/login');
const allpostsRouter = require('./Routes/allposts');
const subscribersRouter = require('./Routes/subscribers');

app.use("/", allpostsRouter);
app.use("/create-account", createAccountRouter);
app.use('/login', loginRouter);
app.use("/admins", subscribersRouter);
