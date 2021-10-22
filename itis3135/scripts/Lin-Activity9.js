$(document).ready(function() {

        // get the image URL and caption for each image
        var pics = [
            "images/smash.avif",
            "images/fe3h.avif",
            "images/xc1.avif",
            "images/skywardSword.avif",
            "images/metroid.avif",
            "images/pokemon.avif"
        ]


        // preload the image for each link

        $("#images a").each(function() { 
            var gameImage = new Image(); 
            gameImage.src = $(this).attr("href"); 
        });
//        var $imgs = new Array();
//        for(var i =0; i<6; i++){
//            var $image = $("<img>").attr("src",pics[i]);
//            $imgs.push($('<img>').attr('src', pics[i]));
//        }
        
        
        
//        for(var i =0; i<6; i++){
//            var $li = $("<li>").append($imgs[i]);
//            $("#images ul").append($li);
            
//        }
    
        // set up the event handlers for each link
        $("#images a").click(function(evt){
            var imageHref = $(this).attr("href"); 
            $("#main_image").attr("src", imageHref);

            evt.preventDefault();
        });
        

        // cancel the default action of each link


    // move the focus to the first link

}); // end ready