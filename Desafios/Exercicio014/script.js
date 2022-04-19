function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
 
  msg.innerHTML = `<strong> Agora são ${hora} horas</strong>.`
  if (hora >= 0 && hora < 12) {
    //vair se Bom dia !!!
    img.src = 'fotomanha.png'
    document.body.style.background = '#7ec9fa'
  } else if (hora >= 12 && hora <= 18) {
    //vai ser boa tarde!!!
    img.src = 'fototarde.png'
    document.body.style.background = '#fe5a02'
  } else {
    //Se não será Boa noite!!!
    img.src = 'fotonoite.png'
    document.body.style.background = '#000f13'
  }
}
