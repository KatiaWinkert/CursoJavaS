let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversao')
bt.addEventListener('click', clicar)

function clicar() {
  let temperature = Number(prompt('Digite uma temperatura em *C (Celsius)'))
  let convtofahrenheit = temperature * 1.8 + 32
  let kelvinconv = temperature + 273.15

  res.innerHTML = `<h2>A temperatura de ${temperature}, corresponde a ...<h2>`
  conv.innerHTML = `<strong>${convtofahrenheit}'F (Fahrenheit) </strong> </br>
                    <strong>${kelvinconv}'K (Kelvin)</strong>`
}
