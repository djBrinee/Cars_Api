// server cofiguration

const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');
const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 9001);

const dbOptions = {
    host: 'aws.connect.psdb.cloud',
    user: '1iqifm5f7xb1b8w9awyk',
    password: 'pscale_pw_AV3iKYziCyI7EG21rnrO4meONEIDS5pwDDmWqjTthKm',
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
