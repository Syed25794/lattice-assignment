const express = require("express");

const dotenv = require("dotenv");

const patientRoutes = require("./routes/patient.routes");

const connection = require("./config/database");

const app = express();

dotenv.config();

const { PORT } = process.env;

app.use(express.json());

app.use("/patient",patientRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page.</h1>");
});

app.listen(PORT,()=>{
    try {
        console.log(`Server is running on the localhost port : ${PORT}`);
        connection;
        console.log("Connected with database.");
    } catch (error) {
        conosle.log("Something went wrong in connection with database.");
    }
    
});
