let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversao')
bt.addEventListener('click', clicar)

function clicar() {
  let m = Number(prompt('Digite A Distancia em metros(m)'))
  let Km = (m / 1000).toFixed(3) // .tofixed() Ele determina a quantidade de casas decimais que preciso no programa.//
  let Hm = (m / 100).toFixed(3)
  let Dam = (m / 10).toFixed(3)
  let Dm = m * 10
  let Cm = m * 100
  let mm = m * 1000
  res.innerHTML = `<h2>A distancia de ${m} metros, corresponde a ... <h2>`
  conv.innerHTML = `  <p>${Km} Quilometros (Km)<p>
                        <p>${Hm} Hectômetros (Hm)<p>
                        <p>${Dam} Decâmetros (Dam)<p>
                        <p>${Dm} Decímetro (Dm)<p>
                        <p>${Cm} Centimetros (CM)<p>
                        <p>${mm} Milimetros (mm)<p>`
}
