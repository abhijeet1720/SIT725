const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// A simple endpoint
app.get('/endpoint', (req, res) => {
    res.send('Hello from the endpoint!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Web service to add two numbers
app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }

    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});
