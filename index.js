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

const list1 = ["sham","babu","singha","roy"];
const list2 = ["sdlfj","bsdabu","hgsingha","ardoy"];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  if(dailyRunning){
    res.render("index.ejs",{
      list1
    });
  }
  else{
    res.render("index.ejs",{
      list2
    });
  }
});

app.post("/index",(req,res)=>{  
  dailyRunning=true;
  if(dailyRunning){
    res.render("index.ejs",{
      list1
    });
  }
  else{
    res.render("index.ejs",{
      list2
    });
  }
});

app.post("/submit",(req,res)=>{ 
  var ele=req.body.input_value;
  if(ele!="" && dailyRunning==true){
    res.render("index.ejs",{
      list1
    });
    list1.push(ele);
  }
  else  {
    res.render("index.ejs",{
      list2
    });
    list2.push(ele);
  }
  
});

app.post("/click",(req,res)=>{
  console.log("sham");
});


app.post("/WorkSelected",(req,res)=>{
  dailyRunning=false;
    res.render("WorkSelected.ejs",{
        list2
    });
});
app.get("/button",(req,res)=>{
    res.render("views/partials/header.ejs");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});

