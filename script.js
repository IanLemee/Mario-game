const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let distance = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './assetts/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        btnReiniciar.classList.remove('sumir')
        reiniciar()

        clearInterval(loop);

    } else  {

    }

    distance++;

  const distanceCounter = document.getElementById('distance-counter');
  distanceCounter.textContent = distance;

}, 100);

document.addEventListener('keydown', jump);

const btnReiniciar = document.querySelector('.btn-reiniciar')

function reiniciar() {
    
    btnReiniciar.addEventListener('click', () => {
        window.location.reload() 
    })
}
