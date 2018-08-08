const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Key codes for A, B, and C keys.
//const alphabet = [65, 66, 67];
 
// Keep track of index outside of the event handler.
let index = 0;
 
// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  ///const key = parseInt(e.detail || e.which);
  const key = e.keyCode;
  console.log(key);
 
  if (key === code[index]) {
    index++;
    console.log(index);
 
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
  }
}
document.body.addEventListener('keydown', onKeyDownHandler);