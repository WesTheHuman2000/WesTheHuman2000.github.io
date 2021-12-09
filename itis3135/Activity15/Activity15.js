$(document).ready(function(){
    $.getJSON("facultyList.json", function(data){
        $.each(data, function(){
            $.each(this, function(key, value){
                var imageHref = value.image;
                $("#picture").attr("src", imageHref);
        })
        })
})
});
