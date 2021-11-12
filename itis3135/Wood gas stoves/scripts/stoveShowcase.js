
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

const calculator = document.querySelector('calculator')
const keys = calculator.querySelector('.calculator_keys')


//https://theultimatehang.com/2012/12/14/diy-wood-gas-stove-instructions/
//https://www.instructables.com/DIY-Wood-Gasifier-Camp-Stove/
//https://sectionhiker.com/how-to-choose-a-backpacking-wood-stove/
//http://the-knowledge.org/en-gb/gasifier-stove/