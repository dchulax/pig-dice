var scores, roundScore, activePlayer, playing;
var roll =document.querySelector('.btn-roll');
var hold =document.querySelector('.btn-hold');
var images = document.querySelectorAll('#player-one-img');
for (var i=0; i < images.length; i++){
  var image = images[i];
}

document.querySelector('.btn-roll').addEventListener('click', function(){
  if(playing){
    var dice = Math.floor(Math.random()*6) + 1;
    var diceDOM= $('.dice').style.display =('block').src = diceimgs['diceimg' + activePlayer + dice];
    $('#scores-') + activePlayer).innerHTML = '<em>' + dice + '</em';
  }
});
