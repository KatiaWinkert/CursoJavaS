let bt = document.querySelector('input#bt')
let res = document.querySelector('div#res')
let conv = document.querySelector('div#conversão')

bt.addEventListener('click', clicar)
function clicar() {
  let nome = prompt('Qual é o nome do Funcionário?') // nome do funcionario //
  let d = Number(prompt(`Qual o salário de ${nome}`)).toFixed(2) // Salario atual //
  let porcent = Number(
    prompt(`O salário de ${nome} vai ser rejustado em qual porcentagem?`)
  ) // porcentagem //
  let cent = ((d * porcent)/100).toFixed(2) // Reajuste salarial
  let pagAtual = (d*(1+porcent/100)).toFixed(2) // salario reajustado

  res.innerHTML = `${nome} recebeu um aumento salarial!`
  conv.innerHTML = `O salário atual era R$ ${d}. 
                    Com o aumento de ${porcent}%, o salário vai aumentar R$${cent} no proximo mês.
                    E a partir daí, ${nome} vai passar a ganhar ${pagAtual} `
}
