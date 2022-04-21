function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossivel contar!'
   // window.alert('[Erro] Faltam dados!')//
  } else {
    res.innerHTML = 'Contando: <br> '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo invalido! considerando passo 1')
      p = 1
    }
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1f449}`
      }
    } else {
      // contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }
    res.innerHTML += `\u{1f3c1}`
    // esses codigos de emotion so funcionam dentro de crase//
  }
}
// o \u{1f449} é um emotion - essa é a forma que o js aceita. Ele foi encontrado no site Unicode list //
