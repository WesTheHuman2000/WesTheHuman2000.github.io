$(document).ready(function() {


        // preload the image for each link
        $("#image_list a").each(function() { 
                var horseImage = new Image(); 
                horseImage.src = $(this).attr("href"); 
            });
        // set up the event handlers for each link
//        $("#image_list a").click(function(evt){
//                var imageHref = $(this).attr("href"); 
//                $("#image").attr("src", imageHref);
    
//                evt.preventDefault();
//            });

        $("#image_list a").click(function(evt){
                var imageHref = $(this).attr("href"); 
                var imageCaption = $(this).attr("title");
                $("#caption").fadeOut(3000);
                $("#image").fadeOut(3000, function(){
                        $("#image").attr("src", imageHref);
                        $("#caption").text(imageCaption);
                });
                
                $("#image").fadeIn(3000);
                $("#caption").fadeIn(3000);
                evt.preventDefault();
        });

        
    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link

}); // end ready