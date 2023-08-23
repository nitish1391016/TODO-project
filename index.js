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

const list1 = [
  "Morning exercise",
  "Breakfast",
  "Check emails",
  "Attend team meeting",
  "Work on project A",
  "Lunch break",
  "Review project B",
  "Call with client",
  "Submit weekly report",
  "Read for 30 minutes",
  "Cook dinner",
  "Relax and unwind",
  "Plan tomorrow's tasks"
];
const list2 = [
  "Prepare presentation for meeting",
  "Review project timeline",
  "Client follow-up emails",
  "Brainstorm new marketing ideas",
  "Code review for feature X",
  "Submit expense report",
  "Update project documentation",
  "Meet with cross-functional team",
  "Research industry trends",
  "Design UI mockups",
  "Collaborate on project proposal",
  "Write blog post for company website",
  "Organize files and folders",
  "Conduct user testing",
  "Schedule social media posts"
];



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
let list=[];
app.get("/", (req, res) => {
  list=dailyRunning ? list1: list2;
  res.render("index.ejs",{
    list
  });
});

app.post("/index",(req,res)=>{  
  dailyRunning=true;
  list=dailyRunning ? list1 : list2;
  res.redirect("/");
});


app.post("/submit",(req,res)=>{ 
  var ele=req.body.input_value;
  list= dailyRunning ? list1 : list2;
  if(ele!=""){
    list.push(ele);
  }
  res.redirect("/");
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

