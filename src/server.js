// require("dotenv").config({path: "./.env"});

// import dns from "dns";
// import mongoclient from "mongodb";
// dns.setServers(["8.8.8.8","1.1.1.1"])

import './utils/dnsSetup.js'; 

import dotenv, { config } from "dotenv";
import connectDB from "./db/database.db.js";

// function connectDB() {}

dotenv.config({
     path: "./.env"
      });


connectDB()