const express = require('express');

const PORT = process.env.PORT || 3001;

const cors = require('cors');

const app = express();

app.use(cors());

app.listen(PORT , ()=>{
    console.log(`server running on port: ${PORT}`);
});