let cota = Number(
  prompt('Antes de mais nada. Quando está a cotação do dolar agora?')
)
let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversão')

bt.addEventListener('click', clicar)

function clicar() {
  let reais = Number(prompt('Quantos reais tem na sua carteira?'))
  let dolar = (reais / cota).toFixed(2)

  if (reais > 4.7) {
    res.innerHTML = `<h2>Se você tem ${reais} na carteira, você pode obter US$ ${dolar} dolares Americanos`
  } else if (reais == 4.7) {
    res.innerHTML = `<h2>Se você tem ${reais} na carteira, você pode obter US$ ${dolar} dolares Americanos`
  } else if (reais < 4.7 && reais > 1) {
    res.innerHTML = `<h2>Se você tem ${reais} na carteira, você pode obter US$ ${dolar} Cents Americanos`
  } else if (reais == 1) {
    res.innerHTML = `<h2>Se você tem ${reais} na carteira, você pode obter US$ ${dolar} cents Americanos`
  }
}
