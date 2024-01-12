document.h1 = 'Javascript-Basic'

const h1 = document.querySelector('.hello:first-child h1')

function handleClick() {
    h1.className = 'active'
}

function handleMouseLeave() {
}

function handleMouseEnter () {
    h1.style.color = 'yellow'
}

function handleWindowResize () {
    document.body.style.backgroundColor = 'tomato'
}
function handleWindowCopy () {
    alert('Copy Ban!')
}

function handleWindowOffline () {
    alert('No Wifi')
}
function handleWindowOnline () {
    alert('Connect Wifi')
}

h1.addEventListener('click', handleClick)
//h1.onclick=handleClick
h1.addEventListener('mouseenter', handleMouseEnter)
h1.addEventListener('mouseleave', handleMouseLeave)

window.addEventListener('resize', handleWindowResize)
window.addEventListener('copy', handleWindowCopy)
window.addEventListener('offline', handleWindowOffline)
window.addEventListener('online', handleWindowOnline)