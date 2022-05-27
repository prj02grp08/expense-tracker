const express = require('express');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const Categories = require('./models/Categories')
 
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
// app.use(routes);

// Start connection to DB
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Connection established'));
}).catch(err => console.log('Error connecting to', err));