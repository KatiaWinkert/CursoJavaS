let res = document.querySelector('div#res')
let conver = document.querySelector('div#conversao')

bt.addEventListener('click', clicar)

function clicar() {
  let M = Number(prompt('Digite A Distancia em metros(m)'))
  let Km = (m / 1000).toFixed(3) // .tofixed() Ele determina a quantidade de casas decimais que preciso no programa.//
  let Hm = (M / 100).toFixed(3)
  let Dam = (M / 10).toFixed(3)
  let Dm = M * 10
  let Cm = M * 100
  let mm = M * 1000
  res.innerHTML = `A distancia de ${M} metros, corresponde a ...`
  conver.innerHTML = `  <p>${Km} Quilometros (Km)<p>.
                        <p>${Hm} Hectômetros (Hm).
                        <p>${Dam} Decâmetros (Dam)
                        <p>${Dm} Decímetro (Dm)
                        <p>${Cm} Centimetros (CM)
                        <p>${mm} Milimetros (mm)`
}
