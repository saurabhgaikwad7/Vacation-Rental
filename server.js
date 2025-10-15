require('dotenv').config();
const express = require('express');
const app = express();

console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.CLOUD_API_KEY);
console.log("API Secret:", process.env.CLOUD_API_SECRET ? "Loaded ✅" : "Missing ❌");
