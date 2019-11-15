
window.onload=function(){
 
var main_test =document.querySelector('.btn-roll')
main_test.addEventListener('click', function() {
  // if(gamePlaying) {
      // 1. Random number
      var random = Math.floor(Math.random() * 6) + 1;

      //2. Display the result
      var diceDOM = document.getElementById('dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + random + '.png';
    });
  }