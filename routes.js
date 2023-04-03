const express = require('express');
const routes =  express.Router();


routes.get('/getcars', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('select * from Cars;', (err,rows) =>{
            if(err) return res.send(err);
            res.json(rows)

        })
    })
})

routes.post('/insertcars', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);


        conn.query('insert into Cars set ?;', [req.body], (err,rows) =>{
            if(err) return res.send(err);
            res.json(rows)
            res.send(JSON.stringify({
                "message": "Insertion successful"
            }))
        })
    })
})

module.exports = routes;