let num = [5, 8, 2, 9, 3]
num.push(1) // acrescenta valor no array
num.sort() // sort coloca o vetor em ordem
console.log(`o Vetor tem  ${num.length} posições`) // leangth informa quantas posiçoes tem o array
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)
let pos = num.indexOf(8)
if (pos == -1) {
  console.log('o valor não foi encontrado!')
} else {
  console.log(`o valor esta na posição ${pos}`)
}

/*console.log(`O valor 8 esta na posição ${pos}`)*/
