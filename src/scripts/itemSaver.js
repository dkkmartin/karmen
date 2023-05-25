// TODO
// Put in basket saves the product in localstorage as KURV
// Localstorage KURV holds the product, price, pieces
import {showKurv, updateKurvWithProducts } from "./kurv"

const btn = document.querySelector('button')
const staffeli = {
  name: 'staffeli',
  price: 30,
  count: 0
}
const sukkulent = {
  name: 'sukkulent',
  price: 30,
  count: 0
}
const kurv = {
  name: 'kurv',
  price: 30,
  count: 0
}
const ugle = {
  name: 'ugle',
  price: 30,
  count: 0
}
const krokodille = {
  name: 'krokodille',
  price: 65,
  count: 0
}

btn.addEventListener('click', () => {
  if (document.URL.includes('/staffeli/')) {
    staffeli.count++
    localStorage.setItem('staffeli', JSON.stringify(staffeli))
    console.log(localStorage)
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/sukkulent/')) {
    sukkulent.count++
    localStorage.setItem('sukkulent', JSON.stringify(sukkulent))
    console.log(localStorage)
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/kurv/')) {
    kurv.count++
    localStorage.setItem('kurv', JSON.stringify(kurv))
    console.log(localStorage)
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/ugle/')) {
    ugle.count++
    localStorage.setItem('ugle', JSON.stringify(ugle))
    console.log(localStorage)
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/krokodille/')) {
    krokodille.count++
    localStorage.setItem('krokodille', JSON.stringify(krokodille))
    console.log(localStorage)
    updateKurvWithProducts()
    showKurv()
  }
})
