require('dotenv').config();
const express = require("express");
const app = express();
const layout = require("express-ejs-layouts");
app.use(layout);

const { mongooseConnect } = require("./dbConnection/db");
const port = 7000;
mongooseConnect();


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const noteRouter = require('./route/noteRoute')
app.use('/',  noteRouter)

const userRoutes = require('./route/userRoute')
app.use('/', userRoutes)



app.listen(port, () => {
  console.log(`Server has started on port ${port} `);
});
