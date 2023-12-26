let obj = {
    Сегодня: 'У вас всё суппер если вы скорпион',
    Завтра: 'У вас всё плохо если вы водолей',
    Послезавтра: 'У вас всё хорошо если вы рыбы'
};

let p = document.querySelectorAll('p');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

p.forEach(elem => {
    elem.addEventListener('click', () => {
        h1.textContent = obj[elem.textContent];
    })
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        h1.textContent = obj[input.value];
    }
})