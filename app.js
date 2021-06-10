function del (e){
    document.getElementsByTagName("tr")[2].remove();    
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

var clicks = 0;
function counter(){
    clicks += 1;
  document.getElementById("btn").innerHTML = `<h1>Click me: ${clicks}</h1>`;
}