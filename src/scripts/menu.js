const menuBtn = document.querySelectorAll('.menu__btn')
const menuNav = document.querySelector('nav')
const closeBtn = document.querySelector('.fa-circle-xmark')

menuBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    menuNav.classList.toggle('nav--active')
    menuNav.classList.toggle('animate__fadeInRight')
    closeBtn.style.display = 'block'
  })
})

closeBtn.addEventListener('click', () => {
  menuNav.classList.toggle('animate__fadeInRight')
  menuNav.classList.toggle('animate__fadeOutRight')
  delay(700).then(() => {
    menuNav.classList.toggle('nav--active')
    menuNav.classList.toggle('animate__fadeOutRight')
    closeBtn.style.display = 'none'
  })
})

menuNav.addEventListener('touchmove', (e) => {
  e.preventDefault()
})

function delay (time) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
