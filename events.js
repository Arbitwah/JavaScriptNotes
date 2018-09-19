 function showVal(){
        console.log(document.getElementById('name').value);
        alert("hello");
    }

 document.getElementById('theButton').addEventListener("click",showVal);
 
 var myTxtBox = document.getElementById('name');
 myTxtBox.addEventListener("focus",newFunction);

 function newFunction(){
     myTxtBox.style.backgroundColor = "grey";
 }

 var secondButton = document.getElementById('button2');
 secondButton.addEventListener("click", function(){
     var divText= document.getElementById('theDiv').innerHTML;
     divText += " new stuff";
     document.getElementById('theDiv').innerHTML=divText;
     alert(divText);
 });

 document.getElementById('lists').addEventListener('click', 
 function(){
    var listItems = document.getElementsByTagName('li');
    var getValue = document.getElementById("addAnItem").value;

    for(let i = 0; i < listItems.length; i++ ){
        console.log(listItems[i].innerHTML);
    }

    document.getElementById('theList').innerHTML += "<li>" + getValue +"</li>";
 });