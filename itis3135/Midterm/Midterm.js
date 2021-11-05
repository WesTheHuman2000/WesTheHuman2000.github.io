var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    //event handlers
    $('#updateCalories').click(function(){
        var myText = "Ter text you like!";
        alert (myText);
    })

};
function updateCalories(){
    
    var newCal  = document.getElementById('calories').value

    newCal = newCal.parseInt(newCal);
    alert(newCal);
    do{
        if(!isNan(newCal)){
            calories.push(newCal);
            alert("Your updated calories are "+ calories);
        }
    } while(isNan(newCal))

   
}
function showAlert() {
    var myText = "This can be whatever text you like!";
    alert (myText);
  }