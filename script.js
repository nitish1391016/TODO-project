// export function getValues(){
//     let inputText=document.getElementById("task-textbox");
//     console.log(inputText.value);
//     list[3]=inputText.value;
// }

var isCheckTrue=[];

$(".checkbox").on("change",function (){
    console.log($(".single-task"));
    for(var i=0;i<$(".single-task").length;i++) {
        var ele=$(".single-task")[i].childNodes[1];
        var eleCut=$(".single-task")[i];
        // .childNodes[2]
        // console.log(ele.checked);
        if($(".single-task")[i].childNodes[1].checked)  {
            eleCut.classList.add("cut");
            isCheckTrue[i]=true;
        }
        else
            eleCut.classList.remove("cut");
            isCheckTrue[i]=false;
        // if($(".single-task")[i].children(".checkbox").checked)
        //     console.log("yes");
    }
})




// $(".checkbox").click($(".checkbox").each(element => {
//     console.log(element);
// }));

// // if(checkbox.checked){
// //     checkbox.classList.add("cut");
// // }
// // else {
// //     checkbox.classList.remove("cut");
// // }
// // }); 

