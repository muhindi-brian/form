const express = require('express');
const port = process.env.PORT || 6000; // this is the default port

const app = express(); //this is our app or instance of express

//API Middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

//API ROUTES

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')

});

app.post('/form', (req, res) => {
    console.log(req.body); // the data we get is in the body of request.

    res.sendFile(__dirname + '/public/thanks.html')

});

// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile('public/index.html');
// });

// This is Basically to listen on Port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)

});