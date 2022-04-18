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

  res.innerHTML = `<h2><strong>${nome} recebeu um aumento salarial!</strong><h2>`
  conv.innerHTML = `<p>O salário atual era <strong>R$ ${d}</strong>.<p> 
                   <p> Com o aumento de <strong>${porcent}%</strong>, o salário vai aumentar <strong>R$${cent}</strong> no proximo mês.<p>
                    <p> E a partir daí, <strong>${nome}</strong> vai passar a ganhar <strong>${pagAtual}</strong>.<p> `
}
