function tabuada() {
    let num = document.getElementById('nume')
    let tab = document.getElementById('latab')
    let info = document.getElementById('info')
    if (num.value.length == 0) {
        info.style.color = 'red'
        info.innerHTML = 'Por favor Digite um numero!'
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}