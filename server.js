// server cofiguration

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const app = express();
app.set('port', 3000);

const dbOptions = {
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9613381',
    password: 'vTbInsma3I',
    database: 'sql9613381',
    port: 3306
  };
  

// middlewares
app.use(myconn(mysql, dbOptions, 'single'));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.use('/api', routes);

// server running 
app.listen(app.get('port'), () => {
    console.log('Server running on port', app.get('port'));
});
