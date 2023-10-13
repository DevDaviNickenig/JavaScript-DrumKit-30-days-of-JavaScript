function tocarSom(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

    if (!audio) return
    audio.currentTime = 0;
    audio.play();
}


// const keys = Array.from(document.querySelector('.som'));

window.addEventListener('keydown', tocarSom)


// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }

//   const keys = Array.from(document.querySelectorAll('.som'));
//   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
//   window.addEventListener('keydown', playSound);