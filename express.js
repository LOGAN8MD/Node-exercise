import express from 'express';

const app= express();

const port=3000

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
  })