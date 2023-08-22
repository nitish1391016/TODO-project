import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
// import {getValues} from "./script.js"
// function getValues(){
//   let inputText=document.getElementById("task-textbox");
//   console.log(inputText.value);
//   list[3]=inputText.value;
// }

const app = express();
const port = 3000;
var dailyRunning=true;

const __dirname = dirname(fileURLToPath(import.meta.url));

const list1 = [];
const list2 = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
let list=[];
app.get("/", (req, res) => {
  if(dailyRunning){
    list=list1;
    res.render("index.ejs",{
      list
    });
  }
  else{
    list=list2;
    res.render("index.ejs",{
      list
    });
  }
});

app.post("/index",(req,res)=>{  
  dailyRunning=true;
  if(dailyRunning){
    list=list1
    res.render("index.ejs",{
      list
    });
  }
  else{
    list=list2
    res.render("index.ejs",{
      list
    });
  }
});


app.post("/submit",(req,res)=>{ 
  var ele=req.body.input_value;
  if(ele!="" && dailyRunning==true){
    list1.push(ele);
    list=list1;
    res.render("index.ejs",{
      list
    });
  }
  else if(ele!="") {
    list2.push(ele);
    list=list2;
    res.render("index.ejs",{
      list
    });
  }
  
});

app.post("/click",(req,res)=>{
  console.log("sham");
});


app.post("/WorkSelected",(req,res)=>{
  dailyRunning=false;
    list=list2;
    res.render("index.ejs",{
        list
    });
});
app.get("/button",(req,res)=>{
    res.render("views/partials/header.ejs");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});

