function contador() {
    var inicio = document.getElementById('n1')
    var final = document.getElementById('n2')
    var passos = document.getElementById('p')
    var acao = document.getElementById('contagem')


    if (inicio.value.length == 0 || final.value.length == 0 || passos.value.length == 0) {
        acao.style.color = 'red'
        acao.innerHTML = "Preencha todos os Campos!"
    } else {
        acao.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passos.value)
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                acao.innerHTML += `${c} `
            }
        }
        else {
            for (let c = i; c >= f; c -= p) {
                acao.innerHTML += `${c} `
            }
        }
    acao.innerHTML += `${c}`
    }

}
