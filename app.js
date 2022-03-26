
import express from "express"
import { connectdb } from "./db/connectdb.js";
import {join} from "path"
const app=express();
const port=process.env.PORT || 3000;
const url= process.env.DATABASE_URL  ||"mongodb://localhost:27017"
import web from "./routes/web.js"
// connect to database
connectdb(url);

// to enable= recive form input
app.use(express.urlencoded({extended:false}));

// making static folder
  app.use('/student',express.static(join(process.cwd(),'public')));
  app.use('/student/edit',express.static(join(process.cwd(),'public')));
// app.use(express.static('public'))

// set ejs
app.set('view engine','ejs');
// app.set('view', './views');

// set routes
app.use("/student",web);

app.listen(3000,()=>{
    console.log(`ServerRunning at port ${port}`);
})
