const form =  document.querySelector("#form-atividade")
const imgAprovado = '<img src="./imagens/feliz.jpeg" alt="emoji feliz">'
const imgReprovado = '<img src="imagens/triste.jpeg" alt="emoji triste">'
const atividade = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a Nota minima:'))

let linhas = ''

form.addEventListener("submit", function(e) {
    e.preventDefault()
    adicionaLinha()
    atualizaTabela()
    atualizaMediaFInal()


})

function adicionaLinha (){
    const inputNomeAtividade = document.querySelector('#nome-atividade')
    const inputNotaAtividade = document.querySelector('#nota-atividade')

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    }

    atividade.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))


    let linha = '<tr>'
linha +=  `<td> ${inputNomeAtividade.value} </td>`
linha +=  `<td> ${inputNotaAtividade.value} </td>`
linha +=  `<td> ${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado} </td>`
linha +=  `</tr>`
linhas += linha

//alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`)

inputNomeAtividade.value = ''
inputNotaAtividade.value = ''
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFInal () {
    const mediaFinal = calculamediaFinal()

    document.querySelector('#media-final-valor').innerHTML = mediaFinal
    document.querySelector('#media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado
}

function calculamediaFinal() {
    let somaNotas = 0

    for(let i = 0; i < notas.length; i++)
        somaNotas += notas[i]

    return somaNotas / notas.length
}