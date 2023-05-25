// TODO
// Put in basket saves the product in localstorage as KURV
// Localstorage KURV holds the product, price, pieces
const btn = document.querySelector('button')
const staffeli = {
  name: 'staffeli',
  price: '30',
  count: '0'
}
const sukkulent = {
  name: 'sukkulent',
  price: '50',
  count: '0'
}
const kurv = {
  name: 'kurv',
  price: '30',
  count: '0'
}
const ugle = {
  name: 'ugle',
  price: '50',
  count: '0'
}
const krokodille = {
  name: 'krokodille',
  price: '65',
  count: '0'
}

btn.addEventListener('click', () => {
  if (document.URL.includes('/staffeli/')) {
    staffeli.count = staffeli.count + 1
    localStorage.setItem('staffeli', JSON.stringify(staffeli))
  }
  if (document.URL.includes('/sukkulent/')) {
    localStorage.setItem('staffeli', JSON.stringify(sukkulent))
  }
  if (document.URL.includes('/kurv/')) {
    localStorage.setItem('staffeli', JSON.stringify(kurv))
  }
  if (document.URL.includes('/ugle/')) {
    localStorage.setItem('staffeli', JSON.stringify(ugle))
  }
  if (document.URL.includes('/krokodille/')) {
    localStorage.setItem('staffeli', JSON.stringify(krokodille))
  }
})
