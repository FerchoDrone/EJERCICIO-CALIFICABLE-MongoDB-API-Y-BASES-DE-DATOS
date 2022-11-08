const express = require('express');
const { getData, getData1, getData2, getData3, getData4, getData5, newPrice, sevPoint} = require('./db');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/EjercicioPunto1', async (req, res) => {
   const data = await getData();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto2', async (req, res) => {
   const data = await getData1();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto3', async (req, res) => {
   const data = await getData2();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto4', async (req, res) => {
   const data = await getData3();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto5', async (req, res) => {
   const data = await getData4();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto6', async (req, res) => {
   const data = await getData5();
   console.log(data);
   res.send(data);
})

app.get('/EjercicioPunto7', async(req,res) =>{
   const query = req.query.price;
   const data = await sevPoint(query);
   res.send(data);
});

app.post('/EjercicioPunto8', async (req, res) => {
   const body = req.body.price;
   const data = await newPrice(body);
   console.log(data);
   res.send(data);
});


app.listen(port, () => {
   console.log(`Escuchando por el puerto ${port}`);
});
