const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/persons/:id/credit-cards', (req, res) => {
    console.log('Data received:', req.body);

    return res.send();
})

app.listen(3333, () => {
    console.log('Server started on http://localhost:3333');
})

