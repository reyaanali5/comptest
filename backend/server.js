const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Use to only allow reqs from frontend once domain is created I think

const fs = require('fs');

const app = express();

const rawData = fs.readFileSync("backend/favplanets.json");
const data = JSON.parse(rawData)

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/apod', async (req, res) => {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: 'Us13y5RztgZArqKp5Bk6NHYLuVL8L6fLgFCRAHIS'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching from APOD API: ", error.response.data);
        res.status(500).send(error.response.data || 'Error, unable to fetch from APOD API');
    }
});




app.get('/api/favplanets', (request, response) => {
    response.json(data);
});

app.get('/api/planets', (request, response) => {
    response.json(data.planets);
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});