let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversão')

bt.addEventListener('click', clicar)

function clicar() {
  let produto = prompt('Qual é o produto que você esta comprando?')
  let valor = Number(prompt(`Qual é o preço do ${produto}`))
  let desconto = (valor/10).toFixed(2) //calculando desconto
  let des = (valor-desconto).toFixed(2) // desconto dado

  res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}: <h2>`
  conv.innerHTML = `<p> O preço original do produto era <strong>'${valor}' reais</strong>. <p>
                    <p> Voce acaba de ganhar <strong>${desconto}</strong> reais de desconto (-10%).<p>
                    <p> Você pagará <strong>${des}</strong> reais no produto <strong>'${produto}'</strong>.<p>`
}
