// server cofiguration

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9001);

const dbOptions = {
    host: 'aws.connect.psdb.cloud',
    user: '5tdxwgerjwwy1pujqweb',
    password: 'pscale_pw_Wi0b9hMssGaL6zzP5veFsXYMwYoykTkkDOIvmoTB4m1',
    database: 'dbcars',
    port: 3306,
    ssl: {
        ca: 'BaltimoreCyberTrustRoot.crt.pem',
        rejectUnauthorized: false
    }
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
