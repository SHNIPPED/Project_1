const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphnd = require('express-handlebars')
const studentsRoutes = require ('./routes/students') 
const curatorRoutes = require('./routes/curator')
const projectRoutes = require('./routes/project')

const port = process.env.port || 3000

const app = express()
const hbs = exphnd.create({
  defaultLayout:'main',
  extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views' , 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(studentsRoutes)
app.use(curatorRoutes)
app.use(projectRoutes)

async function start(){
  try{
    await mongoose.connect('mongodb://localhost/recording')
    app.listen(port, () =>{
      console.log('Сервер запущен')
    })
    
  }
  catch(e){
    console.log(e)
  }
  
}

start();