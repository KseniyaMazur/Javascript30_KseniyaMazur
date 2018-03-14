function audioPlay(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  audio.play();
};

function removeTransition(event){
  if (event.propertyName != 'transform') return;
  event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));

window.addEventListener('keydown', audioPlay);
keys.forEach (key => {
  key.addEventListener('transitionend', removeTransition)
});