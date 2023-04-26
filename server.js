require('dotenv').config();
const express = require('express');
const app = express;

const PORT = process.env.PORT || 3500;

app.length('/', (req,res) => {
    try {
        res.status(200).json({ msg : 'Sikeres elindítás!'});
    }
    res 
    }
})

app.listen(PORT, () => {
    console.log('http://localhost:${PORT}');
})