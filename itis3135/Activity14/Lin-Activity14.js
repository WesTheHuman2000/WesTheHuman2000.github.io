$(document).ready(function() {
	$("#nav_list a").click(function(){
        $.getJSON($(this).attr("title")+".json", function(data){


            $.each(data, function(){
                $.each(this, function(key, value){
                    $("#header1").html("");
                    $("#header2").html('');
                    $("#header3").html('');
                    $("#para").html('');

                    $("#header1").append(value.title);
                    $("#header2").append(value.month);
                    $("#header3").append(value.speaker);

                    var imageHref = value.image;

                    $("#picture").attr("src", imageHref);
                    $("#para").append(value.text);

                })
            })
 //           $.each(data, function(){
 //             $.each(this, function(key, value){
 //               $("#team").append(
 //                  "<h3>"+ value.name+ "</h3>" +
 //                  value.title + "<br>" + 
 //                  value.bio +"<br>"
 //               )
 //           })  
        })
    })
}); // end ready