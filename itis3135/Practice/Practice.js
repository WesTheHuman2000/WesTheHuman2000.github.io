//var $ = function(id) {
//	return document.getElementById(id);
//};

//window.onload = function() {
$(document).ready(function() {
	$("#picsOfCoffee a").click(function(evt){
		var price = $(this).attr("coffeePrice");
		var type = $(this).attr("coffeeType");
		var both = "$"+price+" "+type;
		$('#orderList ul').append('<li>').text(both);

		evt.preventDefault();
	});
});

	
	//add onclick event handler for each image

	// for click event add item to order and update total

	// display order and total

	
		
//}; // end onload