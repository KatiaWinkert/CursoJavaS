function clicar() {
  let num = document.getElementById('txt1')
  let Tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    window.alert('Por favor, digite um numero!')
  } else {
    let n = Number(num.value)
    let c = 1
    Tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      Tab.appendChild(item)

      c++
    }
  }
}
