//Selected Elements
//Based On Id :
const SelectBasedONid = document.getElementById("Normal-id");


//Based On class name :
const SelectBasedONclass = document.getElementsByClassName("js-class");


//Based on Tag Name :
const SelectBasedONTagname = document.getElementsByTagName("h2");

//Query Selector:
const SelectBasedOnQuerySelector = document.querySelector(".js-class");

//Manipulating Element:
const ManipulatingBasedonId = document.getElementById('html');
ManipulatingBasedonId.innerHTML = "<strong><u>Html Learing</u></strong>";
ManipulatingBasedonId.style.color = 'red';
ManipulatingBasedonId.style.fontSize = '35px';
ManipulatingBasedonId.className = 'js-class';


//Creating an element:
const creatingNewelement = document.createElement ('h3');
creatingNewelement.textContent = 'Creating new element (creating method)';
ManipulatingBasedonId.appendChild(creatingNewelement);


//Removing an element:
const removingElement = document.getElementsByTagName("strong")[1];
removingElement.parentNode.removeChild(removingElement);


//Attribute -- Id,class,accesskey,title,contenteditable,insert,hidden,data..
//Get attribute values..
const existingElement = document.getElementById('Normal-id');
const getAttributeValue = existingElement.getAttribute('class');


//Set Attibute value:
existingElement.setAttribute('class','Dom-Api');
existingElement.setAttribute('titel' ,'get-attribute');
existingElement.setAttribute('data-info','Java script Dom API');

//Removing:
existingElement.removeAttribute('data-info');

//Checking the attribute is present :
const isDataAttributeAvailable = existingElement.hasAttribute('data-info');  //False   //return boolean value..

//Add new class to an existing classs attribute:
existingElement.classList.add('Javascript');

//Events:

existingElement.addEventListener('click',()=> {
    alert('Hello!');                                     //Arrow function
})


existingElement.addEventListener('click', function(){
    alert('Hello2');                                             //Anonymous function     
})


function anotherfunction(){
  alert('Hello3');
}



// Prevent default :

const anotherElement = document.getElementById('instagram');

anotherElement.addEventListener('click',(event)=>{
    event.preventDefault();
    alert('Prevented Default Behavior');
})