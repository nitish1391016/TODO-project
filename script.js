
var isCheckTrue=[];

$(".checkbox").on("change",function (){
    console.log($(".single-task"));
    for(var i=0;i<$(".single-task").length;i++) {
        var ele=$(".single-task")[i].childNodes[1];
        var eleCut=$(".single-task")[i];
        if($(".single-task")[i].childNodes[1].checked)  {
            eleCut.classList.add("cut");
            isCheckTrue[i]=true;
        }
        else
            eleCut.classList.remove("cut");
            isCheckTrue[i]=false;
    }
})

