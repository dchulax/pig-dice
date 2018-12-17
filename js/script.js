var scores, roundScore, activePlayer, playing;
var roll =document.querySelector('.btn-roll');
var hold =document.querySelector('.btn-hold');
var diceimgs = {
 diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
 diceimg02: 'https://cdn.pbrd.co/images/711lemsMX.png',
 diceimg03: "https://cdn.pbrd.co/images/711NjfjV5.png",
 diceimg04: "https://cdn.pbrd.co/images/712dK3C2z.png",
 diceimg05: "https://cdn.pbrd.co/images/70Zqc4icX.png",
 diceimg06: "https://cdn.pbrd.co/images/712DzRw22.png",
 diceimg11: "https://cdn.pbrd.co/images/713n3lHQN.png",
 diceimg12: 'https://cdn.pbrd.co/images/713JSMJDr.png',
 diceimg13: "https://cdn.pbrd.co/images/HvoZO4Gb.png",
 diceimg14: "https://cdn.pbrd.co/images/HvqN3Kjq.png",
 diceimg15: "https://cdn.pbrd.co/images/714IXBStH.png",
 diceimg16: "https://cdn.pbrd.co/images/714ZovsdD.png"
};
init();


document.querySelector('.btn-roll').addEventListener('click', function(){
  if(playing){
    var dice = Math.floor(Math.random()*6) + 1;
    var diceDOM= $('.dice').style.display =('block').src = diceimgs['diceimg' + activePlayer + dice];
    $('#scores-') + activePlayer).innerHTML = '<em>' + dice + '</em';
  }
});
