$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function() { 
                var buildImage = new Image(); 
                buildImage.src = $(this).attr("href"); 
            });

        $("#image_list a").click(function(evt){
                var imageHref = $(this).attr("href"); 
                var imageCaption = $(this).attr("description");
                var detDescription =$(this).attr("detailedDescription");
                $("#description").fadeOut(1000);
                $("#detailedDescription").fadeOut(1000);
                $("#main_image").fadeOut(1000, function(){
                        $("#main_image").attr("src", imageHref);
                        $("#description").text(imageCaption);
                        $("#detailedDescription").text(detDescription);
                });
                
                $("#main_image").fadeIn(1000);
                $("#description").fadeIn(1000);
                $("#detailedDescription").fadeIn(1000);
                evt.preventDefault();
        });
});