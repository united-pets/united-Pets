const express = require("express");
// const mysql2 = require('mysql2/promise');
// const session = require("express-session")
// var MySQLStore = require('express-mysql-session')(session)
let app=express() ;
const PORT=3000
var cors = require('cors')
var json = require('express-json')
var db = require('./database/index.js')
app.use(cors());
app.use(express.json())  

app.use(express.urlencoded({extended:true}))

var test = require('./routers/test.js');
var items = require("./routers/item.js");


var test = require('./routers/test.js');
var signup = require('./routers/signup.js')
var login = require('./routers/login.js')
var updateProfile = require('./routers/updateProfile.js')
var userData = require('./routers/getuserData.js')
var postItem = require ('./routers/postItem')
var postStore = require('./routers/postStore')
var getstoreItem=require('./routers/getStorItem')
var post = require('./routers/posts.js');
var pets = require('./routers/pets.js')

var GetsPets = require('./routers/GetPets.js')
 
var Email = require('./routers/Email.js')
var getStore = require('./routers/getStore.js')
var PostMobile = require('./routers/postsMobile.js')
app.use('/',PostMobile)
app.use('/',GetsPets)
app.use("/",getStore)
app.use("/",getstoreItem)
app.use("/",test);
app.use("/",items);
app.use("/",signup);
app.use("/",login);
app.use("/",updateProfile);
app.use("/",post);
app.use("/",userData);
app.use("/",postItem);
app.use("/",postStore);
app.use('/',pets)
app.use('/',Email)

//session 
// var options = {
// 	host: 'localhost',
// 	port: 3306,
// 	user: 'root',
// 	password: 'root',
// 	database: 'mydb'
// };
// var connection = mysql2.createPool(options);
// var sessionStore = new MySQLStore({

// }, connection);
// app.use(session({
//     secret:"hello",
//     resave:false,
//     saveUninitialized:false,
//     store: sessionStore
// }))
// app.get("/",(req,res)=>{
//     req.session.isAuth=true
//     console.log(req.session)
//     console.log(req.session.id);
//     res.send("seession")
// })

const server = app.listen(PORT, function(){
    console.log('server is running at %s', server.address().port);
});

