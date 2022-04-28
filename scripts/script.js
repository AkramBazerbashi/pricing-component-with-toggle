const swi = document.querySelector('.form-check-input');
const text0 = document.getElementById('text0');
const text0Alt = document.getElementById('text0Alt');
const text1 = document.getElementById('text1');
const text1Alt = document.getElementById('text1Alt');
const text2 = document.getElementById('text2');
const text2Alt = document.getElementById('text2Alt');

swi.addEventListener('click', () => {
    text0.classList.toggle('hide');
    text0Alt.classList.toggle('hide');
    text1.classList.toggle('hide');
    text1Alt.classList.toggle('hide');
    text2.classList.toggle('hide');
    text2Alt.classList.toggle('hide');
});