$(document).ready(function(){
    var pics=[
        "images/showcase1.jpg",
        "images/showcase2.jpg",
        "images/showcase3.jpg",
        "images/showcase4.jpg",
        "images/showcase5.jpg"
    ]
    var temp =0;
    $.getJSON("stoves.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){

                $("#image_list").append("<li><img width='186' height='216'src=" + value.image + ">"+"</img></li>");
//                $("#main").append("<h2>"+value.stove_name+"</h2>");
                $("#main").append("<img width= '446' height='518' style='display: none;' src=" +value.image+" id=showcase" +temp +">"+"</img></li>")
temp+=1;
            //    $("#main").append("<h3>"+value.department+"</h3>");
            //    $("#main").append('<p>'+value.bio+'</p>');

        })
        })
    })

 temp =0;
var firstImg= "showcase0";
setInterval(function(){
    var mainID= document.getElementById("main");
    var currentID = "showcase"+temp;
    var currentImg =document.getElementById(currentID);
    if(temp!=0){
        $(currentImg).prev().hide();
    }
    $(currentImg).show();
    temp+=1;
if(temp>pics.length){
    $(mainID.lastElementChild).hide();
    currentImg= firstImg;
    $(currentImg).show();
    temp=0;
   
}

}, 1000);



});





//https://theultimatehang.com/2012/12/14/diy-wood-gas-stove-instructions/
//https://www.instructables.com/DIY-Wood-Gasifier-Camp-Stove/
//https://sectionhiker.com/how-to-choose-a-backpacking-wood-stove/
//http://the-knowledge.org/en-gb/gasifier-stove/