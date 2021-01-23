var listOfActivities=[];

var input =document.getElementById("input");

var toDolist =document.getElementById("todolist");


document.getElementById("button").onclick=click;

function click(){

    listOfActivities.push(input.value);
    
    console.log(listOfActivities);

    input.value="";

    showList();
}

function showList(){

    toDolist.innerHTML="";

    listOfActivities.forEach(function(current_value, index){

        toDolist.innerHTML+=("<li>"+current_value+"<a onclick='editItem("+index+")'>edit</a>"+
        "<a onclick='deleteItem("+index+")'>&times |</a>")
        
    })
}

function editItem(index){
    var newValue=prompt("Please insert your value");

    listOfActivities.splice(index, 1, newValue);

    showList();
}

function deleteItem(index){
    listOfActivities.splice(index, 1);

    showList();
}