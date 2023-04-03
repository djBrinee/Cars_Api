const express = require('express');
const routes =  express.Router();


// get all cars
routes.get('/getcars', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('select * from Cars;', (err,rows) =>{
            if(err) return res.send(err);
            res.json(rows)

        })
    })
})


// insert cars
routes.post('/insertcars', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);


        conn.query('insert into Cars set ?;', [req.body], (err,rows) =>{
            if(err) return res.send(err);
            res.send(JSON.stringify({
                "message": "Car inserted successfully"
            }))
        })
    })
})


// deleter cars
routes.delete('/deletecars/:id', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);


        conn.query('DELETE FROM Cars where car_id = ?;', [req.params.id], (err,rows) =>{
            if(err) return res.send(err);
            res.send(JSON.stringify({
                "message": `Car deleted successfully`
            }))
        })
    })
})

routes.post('/updatecars/:id', (req, res) =>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);


        conn.query(`UPDATE Cars set ? where car_id = ?;`, [req.body, req.params.id], (err,rows) =>{
            if(err) return res.send(err);
            res.send(JSON.stringify({
                "message": `Car updated successfully`
            }))
        })
    })
})

module.exports = routes;