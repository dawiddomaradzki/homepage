console.log(`Dzien dobry`);

const jstest = document.querySelector('.description__object--js');
const name = 'Dawid';
const age = 26;

function greeting(name, age) {
return console.log(`Czesc ${name}, masz ${age} lat`);
}

console.log(greeting(name, age));

const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
const navigationUl = document.querySelector('.navigation__ul--js');
navigationUl.classList.toggle('navigation__ul--visible');
});