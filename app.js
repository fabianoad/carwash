const express = require('express');
const app = express();
const PORT = 8080;
const connection = require('./database/connection.js')
const mongoose = require('mongoose')
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* import models */
const {Car} = require('./models/Car.js');

app.get('/cars', (req,res)=> {
    Car.find()
    .then(result=> {
        if(result==='')
            res.json(false)
        else res.json(result)
    })
    .catch(err=>res.json(err))
})

app.get('/search', (req,res) => {
    console.log(req.query)
    Car.find({})
    .then(result=> {
        
        res.json(result)

    
    })
    .catch(err=>console.log(err))
})


app.post('/addcar', (req,res) => {
    console.log(req.body)

    const car = new Car(req.body);
    car.phone.push(req.body.phone1)
    car.phone.push(req.body.phone2)
    car.save()
    .then(result=> {
        console.log(result)
        res.json(result)
    })
    .catch(err=>res.json(err))
})

connection.once('open', () => {

    console.log('connected to MongoDB Atlas, database: ' + process.env.DATABASE);
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
        
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});
