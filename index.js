const express =require('express')
const bodyparser = require('body-parser')
const  mongoose = require('mongoose')
const dotenv = require ('dotenv')
dotenv.config()

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('./public'))

app.set('view engine','ejs')

{/* mongoose
.connect( process.env.MONGODB_URL)
.then(() => console.log('DB connected succesfully'))
.catch(error =>console.log(error))*/}

const User = mongoose.model('User', {//collection:users
firstName:String,
lastName:String,
email:String,
phoneNumber:Number
})

const child = mongoose.model('child', {//collection:children
firstName:String,
lastName:String,
email:String,
phoneNumber:Number
})

const lady = mongoose.model('lady', {//collection:ladies
firstName:String,
lastName:String,
email:String,
phoneNumber:Number
})


app.get('/',(req,res)=> {
    res.json({message:'habibi we are learning mongodb!'})
})
 
app.listen(process.env.PORT,()=>{
   mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('server running on dbms done'))
    .catch(error => console.log(error))
    console.log('server connecting on http://localhost:${process.env.PORT}')
})