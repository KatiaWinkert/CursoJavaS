function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') //criando inclusão de imagem pelo js//
    img.setAttribute('id', 'foto') // criando um id para foto é a mesma coisa que voce fosse no html e incluice um id lá//
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        //criança//
        img.setAttribute('src', 'fotomeninobebe.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'fotomeninojovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotohomemadulto.png')
      } else {
        //idoso
        img.setAttribute('src', 'fotohomemidoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        //criança//
        img.setAttribute('src', 'fotomeninabebe.png')
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'fotomulherjovem.png')
      } else if (idade < 50) {
        //Adulto
        img.setAttribute('src', 'fotomulheradulta.png')
      } else {
        //idoso
        img.setAttribute('src', 'fotomulheridosa.png')
      }
    }
    res.style.textAlign = 'center' //essa linha centraliza o texto
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
