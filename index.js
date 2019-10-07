'use strict'


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//HOLA CON CUALQUIER NOMBRE
app.get('/hola/:name', (req, res) =>{
  res.send({ message: `Hola ${req.params.name}!`})
})


//HOLA MUNDO
app.get('/hola', (req, res) =>{
    res.send({ message: 'Hola Mundo'})
  })

  var fecha = new Date();
  var dd = fecha.getDate();
  var mm = fecha.getMonth()+1;
  var yyyy = fecha.getFullYear();
  
  var h = fecha.getHours();
  var m = fecha.getMinutes();
  
  
  

 //HORA
app.get('/Hora', (req, res) =>{
    res.send({ message: 'La Fecha y Hora Es:'+fecha.getDate()+ '/' +mm+'/' +yyyy+''+'-'+h+':'+m})
   
  })









app.get('/api/product', (req, res) =>{
    res.send(200, {products: []})
    })
    
    app.get('/api/product/:productId', (req, res) =>{
    
    })
    
    app.post('/api/product', (req, res) =>{
    console.log(req.body)
    res.status(200).send({message: 'Producto recibido'})
    })
    
    app.put('/api/product/:productId', (req, res) =>{
    
    })
    
    
    app.delete('/api/product/:productId',(req, res) =>{
    
    })


app.listen(port, ()=>{
    console.log(`API REST corriendo en http://localhost:${port}`)
    })

