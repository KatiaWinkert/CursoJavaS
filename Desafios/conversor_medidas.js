let bt = document.querySelector("input#bt")
let res = document.querySelector("div#res")
let conver = document.querySelector("div#conversão")

bt.addEventListener("click", clicar)

function clicar(){
    let M = Number(prompt("Digite A Distancia em metros(m)"))
    let Km = (m/1000).toFixed(3)
    let Hm = (M/100).toFixed(3)
    let Dam = (M/10).toFixed(3)
    let Dm = (M*10)
    let Cm = (M*100)
    let mm = (M*1000)

    res.innerHTML = `<h2>A distancia de ${M} metros, corresponde a ... <h2>`

    
}

