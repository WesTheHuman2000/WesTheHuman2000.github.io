//const person =["Edelgard von Hresvelg", "Romuska Palo Ul Laputa", "Arthur Pendragon", "Dorothea Arnault"];
//const salaries =[30000, 80000, 100000, 25000];
//const merged = [
//    ["Edelgard von Hresvelg", 30000],
//    ["Romuska Palo Ul Laputa", 80000],
//    ["Arthur Pendragon", 100000],
//    ["Dorothea Arnault", 25000]
//]
const person=[];
const salaries=[];
var merged =[];
var $ = function (id) {
    return document.getElementById(id);
    };

function addSalary(salary){
    // adding salary
    salaries.push(salary);

    
    


    
}



function displaySalary(){
    merged = [];
    var table = $("results_table");
    for(var i =0; i< person.length; i++){
        merged.push([person[i],salaries[i]]);
   }
    for(var i=1; i<table.rows.length; i++){
        for(var j = 0; j< table.rows[i].cells.length; j++){
            table.rows[i].cells[j].innerHTML = merged[i-1][j];
            
       }
    }
    
        }
    





//    let table = document.createElement('table');
//    for(let row of person){
//        table.insertRow();
//        for(let cell of row){
//            let newCell = table.rows[table.rows.length - 1].insertCell();
//        }

//   }
//    var numberRows =person.length;
//    var numberColumns =2;
//    for(var i=0; i<numberRows; i++){
//        var row = $("<tr>")
//       for(var x=0; x<numberColumns; x++){
//            row.append(`<td>`).text(`${person[i]}`);
//        }
//        $("#results_table tbody").append(row);
//    }



function displayResults(){
    var total =0;
    var average=0;
    
    var biggest = Math.max(...salaries);
    
    for(var i=0; i<salaries.length; i++){
        total=parseInt(total)+ parseInt(salaries[i]);

    }
    average = total / salaries.length;
 //   $('results').innerHTML = "Results";
    $("averageResult").innerHTML = "The Average pay is $" + average + ".";
    $('maxResult').innerHTML = "The highest salary is $"+biggest+".";
}

function validateEntry(){

    // adding people
    var peopleOption = $('peopleOptions');
    

    var salary = prompt("Please enter a salary for the selected person", 50000);
    salary = parseInt(salary);
    do{
        if(!isNaN(salary)){
            person.push(peopleOption.options[peopleOption.selectedIndex].text);

            addSalary(salary);

            return;
        } else{
            alert("Make sure you input a valid number")
            return;
        }
    } while(isNaN(salary));
    
}
// try to get name input
// then get the salary input
// afterwards merge the two into an array such as  [Arthur, 100,000], [Edelgard, 30,000], [Romuska, 100,000] with [name, salary]
// need to create the head and the table body first though
