// TODO
// Put in basket saves the product in localstorage as KURV
// Localstorage KURV holds the product, price, pieces
import { showKurv, updateKurvWithProducts } from './kurv'

const btn = document.querySelector('button')

window.onload = function () {
  if (localStorage.getItem('hasCodeRunBefore') === null) {
    const staffeli = {
      name: 'Mini staffeli',
      price: 30,
      count: 0,
      alt: 'Inkl. malerlærred',
      src: '/karmen/staffeli.png'
    }
    localStorage.setItem('staffeli', JSON.stringify(staffeli))
    const sukkulent = {
      name: 'Sukkulent',
      price: 30,
      count: 0,
      alt: 'Grøn plante',
      src: '/karmen/plante_3.png'
    }
    localStorage.setItem('sukkulent', JSON.stringify(sukkulent))
    const kurv = {
      name: 'Kurv',
      price: 30,
      count: 0,
      alt: 'Kurv af træ',
      src: '/karmen/kurv.png'
    }
    localStorage.setItem('kurv', JSON.stringify(kurv))
    const ugle = {
      name: 'Ugle',
      price: 30,
      count: 0,
      alt: 'Ugle af træ',
      src: '/karmen/ugle.png'
    }
    localStorage.setItem('ugle', JSON.stringify(ugle))
    const krokodille = {
      name: 'Krokodille',
      price: 65,
      count: 0,
      alt: 'Krokodille af træ',
      src: '/karmen/krokodille.png'
    }
    localStorage.setItem('krokodille', JSON.stringify(krokodille))
    localStorage.setItem('hasCodeRunBefore', true)
  }
}

btn.addEventListener('click', () => {
  if (document.URL.includes('/staffeli/')) {
    const LSObject = JSON.parse(localStorage.getItem('staffeli'))
    LSObject.count++
    localStorage.setItem('staffeli', JSON.stringify(LSObject))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/sukkulent/')) {
    const LSObject = JSON.parse(localStorage.getItem('sukkulent'))
    LSObject.count++
    localStorage.setItem('sukkulent', JSON.stringify(LSObject))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/kurv/')) {
    const LSObject = JSON.parse(localStorage.getItem('kurv'))
    LSObject.count++
    localStorage.setItem('kurv', JSON.stringify(LSObject))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/ugle/')) {
    const LSObject = JSON.parse(localStorage.getItem('ugle'))
    LSObject.count++
    localStorage.setItem('ugle', JSON.stringify(LSObject))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/krokodille/')) {
    const LSObject = JSON.parse(localStorage.getItem('krokodille'))
    LSObject.count++
    localStorage.setItem('krokodille', JSON.stringify(LSObject))
    updateKurvWithProducts()
    showKurv()
  }
})
