var agora = new Date()
var diasem = agora.getDay()
/*
0= domingo
1= Segunda
2= Terça
3= Quarta
4= Quinta
5= Sexta
6= Sabado 
*/
console.log(diasem)

switch (diasem) {
  case 0:
    console.log('domingo')
    break
  case 1:
    console.log('Segunda')
    break
  case 2:
    console.log('terça')
    break
  case 3:
    console.log('Quarta')
    break
  case 4:
    console.log('Quinta')
    break
  case 5:
    console.log('Sexta')
    break
  case 6:
    console.log('Sabado')
    break
  default:
    console.log('Dia invalido')
    break
}
