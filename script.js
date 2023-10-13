function tocarSom(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return

    key.classList.add('tecla__pressionada')
    audio.currentTime = 0;
    audio.play();
}

function removerPressionada(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('tecla__pressionada')
}


const keys = Array.from(document.querySelectorAll(".tecla"));
keys.forEach(key => key.addEventListener("transitionend", removerPressionada))
window.addEventListener('keydown', tocarSom)


