const express = require('express');
const cors = require('cors');
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 5000;


const app = express();

app.use(cors());

app.get("/api", (req, res) => {
});

app.listen(PORT , ()=>{
    console.log(`Server running on port: ${PORT}`);
});