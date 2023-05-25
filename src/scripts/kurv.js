// TODO

// KURV:
// On the site kurv, pull data from localstorage
// Display the product, pieces and price
// Clicking on plus and minus increments and decrements
// the localstorage for the item
// Clicking on trash deletes the product from localstorage
// Clicking on go gå til betaling checks if localstorage is empty
// if not empty it proceeds to form site

// PAYMENT:
// Pulls data from locastorage and fills the needed data
const kurv = document.querySelector('.modal')

window.addEventListener('load', () => {
  updateKurvWithProducts()
})

export function showKurv () {
  kurv.classList.add('modal--active')
  kurv.classList.add('animate__slideInDown')
  delay(1000).then(() => {
    kurv.classList.remove('animate__slideInDown')
    kurv.classList.add('animate__slideOutUp')
    delay(200).then(() => {
      kurv.classList.remove('modal--active')
      kurv.classList.remove('animate__slideOutUp')
    })
  })
}

export function updateKurvWithProducts () {
  if (localStorage) {
    kurv.innerHTML = ''
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      const localStorageObject = JSON.parse(localStorage.getItem(key))
      if (localStorageObject.count > 0) {
        const newP = document.createElement('p')
        newP.textContent = `${localStorageObject.name} ${localStorageObject.count}x`
        kurv.append(newP)
      }
    }
  }
}

function delay (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}
