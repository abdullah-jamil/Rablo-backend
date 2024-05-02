const express = require("express");
const app = express();
const cors = require("cors");

const corsOptions = {
  origin: "https://rablo-frontend.onrender.com/",
  credentials: true, // Allow credentials (cookies, etc.)
};

app.use(cors(corsOptions));

//Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//Middleware to parse json request body
app.use(express.json());

//Import routes for CRUD API
const crudRoutes = require("./routes/cruds");

//Mount the CRUD API routes
app.use("/api/v1", crudRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

//Connect to the database
const dbConnect = require("./config/database");
dbConnect();

//Default Route
app.get("/", (req, res) => {
  res.send(`<h1> This is HomePage for the Assignment given by Rablo.</h1>`);
});
