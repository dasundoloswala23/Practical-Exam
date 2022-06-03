const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

const CardRouter = require("./routes/cardrouter");



//getting the database url
const URL = process.env.MONGODB_URL;


//connect to database url with the given options
mongoose.connect(URL,{
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: true,
})

//database connection
const connection = mongoose.connection;
connection.once("open", function() {
    console.log("Card db connection success");
}); 


//when http://localhost:8070/card ran it will execute CardRouter.js file
app.use("/card",CardRouter);


//defining a port to run the application
//use port 8070 or use any other port if the 8070 is unavailable 
const PORT = process.env.PORT || 8080;

//running the app in previously defined port
const server = app.listen(PORT,() =>{
    console.log(`Server is up and running on: ${PORT}`);
})

//if the server crashed show it simply and stop the server
process.on("unhandledRejection", (error, promise) => {
    console.log(`Logged error: ${error}`);
    server.close(() => process.exit(1));
})
