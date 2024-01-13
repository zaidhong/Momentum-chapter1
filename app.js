document.h1 = 'Javascript-Basic';

const h1 = document.querySelector('.hello:first-child h1');

function handleClick() {
    /* const clickedClass = 'clicked';
    if(h1.classList.contains(clickedClass)) h1.classList.remove(clickedClass)
    else h1.classList.add(clickedClass) => toggle */
    h1.classList.toggle('clicked')
}

h1.addEventListener('click', handleClick);
