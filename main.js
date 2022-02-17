// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function initialize(){
  let likes = document.getElementsByClassName('like-glyph')
  console.log(likes)
  for (const element of likes){
    element.addEventListener('click', (event)=> {
      mimicServerCall()
      .then(()=> event.target.textContent = heartChange[event.target.textContent])
      .catch(error =>{
        let modal = document.getElementById('modal');
        modal.classList.remove('hidden')
        modal.querySelector('h2').textContent = error
        setTimeout(function(){modal.classList.add('hidden')}, 3000)

      })
      // (change heart status)event.target.textContent = heartChange[event.target.textContent]
    }
    )
  }
}
initialize()


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
