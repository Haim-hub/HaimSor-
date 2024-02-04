const express = require('express');
const cors = require('cors');
const axios = require('axios');
app=express();

app.use(cors());

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});


app.get('/api', (req, res) => {
    axios.get('http://5.186.16.43:8001/api')
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
});