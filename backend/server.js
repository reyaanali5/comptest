const express = require ('express');
const axios = require ('axios');
const cors = require('cors'); // Use to only allow reqs from frontend once domain is created I think

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/telescopes/images/latest', async (req, res) => {
    try {
        const response = await axios.get('https://webbapi.avatsaev.com/telescopes/1/images/latest');
        console.log('API Response:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching from JWT Tracker API:', error.message);
        res.status(500).json({ error: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});