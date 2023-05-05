function verf() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Number(f_ano.value.length) == 0 || Number(f_ano.value) >= ano || Number(f_ano.value) == 0) {
        document.getElementById('res').style.color = 'red';
        res.innerHTML = 'Verifique os Dados e Tente Novamente...'

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(f_ano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'fot')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'img/c-m.jpg')
                //crianc
            } else if (idade < 21) {
                img.setAttribute('src', 'img/j-m.jpg')
                //jov
            } else if (idade < 50) {
                img.setAttribute('src', 'img/a-m.jpg')
                //adul
            } else {
                img.setAttribute('src', 'img/i-m.jpg')
                //idoss
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
         if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', 'img/c-f.jpg')
            //crianc
        } else if (idade < 21) {
            img.setAttribute('src', 'img/j-f.jpg')
            //jov
        } else if (idade < 50) {
            img.setAttribute('src', 'img/a-f.jpg')
            //adul
        } else {
            img.setAttribute('src', 'img/i-f.jpg')
            //idoss
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}

}