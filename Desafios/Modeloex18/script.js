let num = document.querySelector('input#fnum')
let list = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnumero(n) {
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}else {
    return false
}

}
 function inlista(n, L) {
     if(L.indexOf(Number(n)) != -1){
         return true
     } else {
         return false
     }
 }

function adicionar(){
  if (isnumero(num.value) && !inlista(num.value, valores)) {
      
  } else {
    window.alert('Valor inválido ou já esta adicionado na lista.')
  }
}
