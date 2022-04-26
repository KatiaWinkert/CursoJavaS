let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inlista(n, L) {
  if (L.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isnumero(num.value) && !inlista(num.value, valores)) {
    valores.push(Number(num.value)) // esse comando ate lis.appendchild serve para adicionar os objetos na lista
    let item = document.createElement('option')
    item.text = `Numero adicionado é ${num.value}`
    list.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já esta adicionado na lista.')
  }
  num.value = '' // esse comando apaga o valor do input assim que for adicionado
  num.focus()
}

function fechar() {
  if (valores.length == 0) {
    window.alert(' Adicione valores antes de finalizar!')
  } else {
    let total = valores.length
    let maior = [0]
    let menor = [0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos]
    }
    media = soma/total
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${total} numeros cadastrados. </p>`
    res.innerHTML += ` <p> O maior valor informado foi  ${maior}.</p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p> somando todos os valores temos ${soma}.</p>`
    res.innerHTML += `<p> A media dos valores digitados é ${media}</p>`
  }
}
