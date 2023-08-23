
let isDailyOne=true;

$(".type-button").on("click",function(){
    isDailyOne=$(this).attr("name") 
    //  console.log(isDailyOne)
 })
 var index="";
$(".checkbox").on("click",function (){
    for(var i=0;i<$(".single-task").length;i++) {
        var ele=$(".single-task")[i].childNodes[1];
        var eleCut=$(".single-task")[i];
        if($(".single-task")[i].childNodes[1].checked)  {
            eleCut.classList.add("cut");
        }
        else
            eleCut.classList.remove("cut");
        $.post('/update',{
            index:i+"",
            isChecked:$(".single-task")[i].childNodes[1].checked,
            isDailyOne
        })
    }
})

// $(".checkbox").on("click",function (){
//     // console.log($(this).attr("name"))
//     // console.log(isDailyOne)
//     console.log($(this).parent())
//     $.post('/update',{
//         index:$(this).attr("name"),
//         isDailyOne:$(this).attr("name"),
//         isChecked:$(this).checked

//     })
// })

