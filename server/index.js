const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//init express
const app = express();

//enable cors 
app.use(cors());

// routes
app.get('/api/search', (req, res) => {
    res.json({ success: 'true' });
})

app.listen(PORT, () => {
    console.log(`app had started on port ${PORT}`)
})
