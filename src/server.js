// require("dotenv").config({path: "./.env"});

// import dns from "dns";
// import mongoclient from "mongodb";
// dns.setServers(["8.8.8.8","1.1.1.1"])

import './utils/dnsSetup.js'; 
import app from "./app.js";

import dotenv, { config } from "dotenv";
import connectDB from "./db/database.db.js";

// function connectDB() {}

dotenv.config({
     path: "./.env"
      });


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    })
})
.catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the process with failure
  });