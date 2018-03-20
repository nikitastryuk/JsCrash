/////////////////////////////////////////////////////////
//EXAMINIG DOM
/////////////////////////////////////////////////////////
//Document
// console.log(document);
// console.log(document.all);
// console.log(document.all.length);
// console.log(document.head);
// console.log(document.body);
// console.log(document.doctype);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.characterSet);
// console.log(document.contentType);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// console.log(document.scripts);
// console.log(document.forms[0].id);
// console.log(document.forms[0].method);
// console.log(document.forms[0].action);
// console.log(document.forms[0].classList);

//HTMLCollection to Array
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);
// scriptsArr.forEach(element => {
//     console.log(element);
// });


/////////////////////////////////////////////////////////
//DOM SEARCH
/////////////////////////////////////////////////////////

//Finding HTML Elements
//document.getElementById(id)
//document.getElementsByTagName(name)
//document.getElementsByClassName(name)

//Finding HTML Elements by CSS Selectors
//document.querySelectorAll(selector) NodeList containing all matching Element nodes
//document.queySelector(selector) first matching Element node 
// console.log(document.querySelector('li:nth-child(2)').style.color="yellow");

//Changing HTML Elements
//element.innerHTML =  new html content
//element.attribute = new value
//element.setAttribute(attribute, value)
//element.style.property = new style	


/////////////////////////////////////////////////////////
//TRAVERSING DOM
/////////////////////////////////////////////////////////

//Ul>li*3
// const list = document.querySelector('ul');
// const listItem = document.querySelector('li.collection-item:first-child');

// //Child nodes
// console.log(list.childNodes); //NodeList
// console.log(list.children); //HtmlCollection


// //NodeTypes
// console.log(list.childNodes[0].nodeType);
// //1 - Element
// //2 - Attribute
// //3 - Text node
// //8 - Comment
// //9 - Document itself
// //10 - Doctype


// //First child
// console.log(list.firstChild);
// console.log(list.firstElementChild);

// //Last child
// console.log(list.lastChild);
// console.log(list.lastElementChild);

// //Count child elemets
// console.log(list.childElementCount);

// //Get parent node
// console.log(listItem.parentNode);
// console.log(listItem.parentElement);

// //Get next sibling
// console.log(listItem.nextSibling);
// console.log(listItem.nextElementSibling);

// //Get prev sibling
// console.log(listItem.previousSibling);
// console.log(listItem.previousElementSibling);


/////////////////////////////////////////////////////////
//CREATING DOM
/////////////////////////////////////////////////////////

//Create element
// const li = document.createElement('li');

// //Add class
// li.className = 'collection-item';

// //Add id 
// li.id = 'new-item';

// //Add attribute
// li.setAttribute('title', 'New Item');

// //Create text node and append
// li.appendChild(document.createTextNode('Hello world'));

// //Create new link element
// const link = document.createElement('a');

// //Add icon html
// link.innerHTML= '<i class="fa fa-remove"></i>';

// //Append link to li
// li.appendChild(link);

// //Append li as child to ul
// document.querySelector('ul').appendChild(li);

//parent.insertBefore(newChild, refNode)

/////////////////////////////////////////////////////////
//REMOVING/REPLACING DOM
/////////////////////////////////////////////////////////

// //Create elem to replace with
// const newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode('New title'));

// //Get old heading
// const oldHeading = document.querySelector('.heading');

// //Parent replaceChild
// oldHeading.parentElement.replaceChild(newHeading,oldHeading);

// //Remove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //Remove list item
// lis[0].remove();

// //Remove child element
// list.removeChild(lis[1]);

/////////////////////////////////////////////////////////
//CLASSES & ATTR
/////////////////////////////////////////////////////////
//Classes
const heading = document.querySelector('.heading');
heading.classList.add("added-class");
heading.classList.remove('test-class');

//Attr
console.log(heading.getAttribute('title'));
heading.setAttribute('test', 'test-attr');
console.log(heading.hasAttribute('test'));
heading.removeAttribute('test');
console.log(heading);
