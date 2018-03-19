// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');


  // Event target element
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);

  // Event type
  console.log(e.type);

  // Timestamp
  console.log(e.timeStamp);

  // Coords event relative to the window
  console.log(e.clientY);
  console.log(e.clientX);

  // Coords event relative to the element
  console.log(e.offsetY);
  console.log(e.offsetX);

  console.log(e);
}


//EVENT DELEGATION

// document.body.addEventListener('click', clickEvent);
// function clickEvent(e) {
//   if(e.target.className==='rightClass') {
//     console.log('do smth');
//   }
// }