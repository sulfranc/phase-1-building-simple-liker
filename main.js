// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const hearts = document.getElementsByClassName("like-glyph");

for (element of hearts) {
  element.addEventListener('click', (e) => {
    debugger;
    mimicServerCall()
    .then(data => {
      if (e.target.innerHTML === EMPTY_HEART) {
        e.target.innerHTML = FULL_HEART;
      } else {
        e.target.innerHTML = EMPTY_HEART;
      }
    })
    .catch((error) => {console.log(error)})
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
