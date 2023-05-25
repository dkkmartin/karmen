// TODO
// Put in basket saves the product in localstorage as KURV
// Localstorage KURV holds the product, price, pieces
import { showKurv, updateKurvWithProducts } from './kurv'

const btn = document.querySelector('button')

btn.addEventListener('click', () => {
  if (document.URL.includes('/staffeli/')) {
    staffeli.count++
    localStorage.setItem('staffeli', JSON.stringify(staffeli))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/sukkulent/')) {
    sukkulent.count++
    localStorage.setItem('sukkulent', JSON.stringify(sukkulent))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/kurv/')) {
    kurv.count++
    localStorage.setItem('kurv', JSON.stringify(kurv))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/ugle/')) {
    ugle.count++
    localStorage.setItem('ugle', JSON.stringify(ugle))
    updateKurvWithProducts()
    showKurv()
  }
  if (document.URL.includes('/krokodille/')) {
    krokodille.count++
    localStorage.setItem('krokodille', JSON.stringify(krokodille))
    updateKurvWithProducts()
    showKurv()
  }
})
