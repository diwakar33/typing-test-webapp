const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
const Connection = require('./db/index');
const cors = require('cors');


const app = express();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
app.use(cors());
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

Connection();

// Routes
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
