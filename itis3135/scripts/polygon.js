
function getDateAndTime(){
    var today = new Date();
    
    

    

    document.getElementById("dayAndTime").innerHTML = 
    "Today is " + today.toDateString()+ ", and the time is "+today.getHours()+ ":"+today.getMinutes();


}


function askName() {
    var personName = prompt("Please enter your name", "Billy Bob");
    var feeling = prompt("please enter how your feeling", "good")
    if(personName != null){
        document.getElementById("demo").innerHTML =
    "The Jovial Lions welcome you " + personName + "! We're glad to see you are doing "+feeling+" today!";
    }
}

function getTotal(){
    var total = prompt("How many bananas are you buying",7);
    total = .75* parseFloat(total);
    document.getElementById("total").innerHTML = "Your total cost is $"+total;
}

function getTax(){
    var total = prompt("What is your total without tax (dont enter a $ sign", 5.00);
    var taxTotal = total * 1.07;
    taxTotal = (Math.round(taxTotal*100)/100).toFixed(2);

    document.getElementById("tax").innerHTML = "Your total with tax is $"+taxTotal;
}

function countBananas(){
    var bananaCount1 = prompt("How many bananas do you have right now?", 4.00);
    var bananaCount2 = prompt("How many more bananas do you plan on getting?",5.00);
    

    var totalBananas = parseFloat(bananaCount1)+parseFloat(bananaCount2);
    document.getElementById("bananaCount").innerHTML = "You will have "+totalBananas+ " bananas in the future!";
}

function bananaShippingFee(){
    var totalBananas = prompt("Enter how many bananas you are shipping", 4);

    totalBananas = 1.50 + parseFloat(totalBananas*1.5);
    document.getElementById("shippingFee").innerHTML = "Your total shipping cost is $"+totalBananas;

}

function getTotalWithShipping(){
    var taxTotal = prompt("Enter your total with tax", 7);
    var shippingFee = prompt("Enter your total shipping cost", 8);

    var everything = parseFloat(taxTotal)+parseFloat(shippingFee);
    document.getElementById("everythingTotal").innerHTML = "Your total for everything together is $"+everything;
}

function getShape(entry){
    switch(entry){
        case 1:
            alert("Your shape is a monogon");
            break;
        case 2:
            alert("Your shape is a bigon");
            break;
        case 3: 
            alert("Your shape is a trigon");
            break;
        case 4: 
            alert("Your shape is a tetragon");
            break;
        case 5:
            alert("Your shape is a pentagon");
            break;
        case 6: 
            alert("Your shape is a hexagon");
            break;
        case 7:
            alert("Your shape is a septagon");
            break;
        case 8: 
            alert("Your shape is a octagon");
            break;
        case 9: 
            alert("Your shape is a nonagon");
            break;
        case 10: 
            alert("Your shape is a decagon");
            break;
    }


}

function validateEntry(){
    

    
    do{
        var sides = prompt("The Jovial Lion would like you number", 3);
        sides = parseInt(sides);
        if(sides>0 && sides <10 ){
            getShape(sides);
            
        } else{
            alert("Enter a number between 1 and 10!");
        }
    } while(sides <=0|| sides>10);
    

}



