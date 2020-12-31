const express=require('express')
const path=require('path')
const hbs = require('hbs')
const { registerPartials } = require('hbs')
const app=express()

app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../templates"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))
app.use(express.static(path.join(__dirname,"../public")))

app.get('/',(req,res)=>{
    res.render('index',{
       name: "Vineet",
       age: 21
    })
})

app.get('/json',(req,res)=>{
    const name='Vineet'
    const age=21
    res.send({
        name,
        age
    })
})

app.get('*',(req,res)=>{
    res.render("error")
})


app.listen(3000,()=>{
    console.log("Server started on port 3000")
})

