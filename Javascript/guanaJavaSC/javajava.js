function crg() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if (hora >= 0 && hora <= 11) {
        img.src = 'img/dia.jpg'
    }else if (hora >= 12 && hora <= 17){
        img.src = 'img/tarde.jpg'
        document.body.style.backgroundImage = "url(img/tarde.jpg)"
    }else {
        img.src = 'img/noite.jpg'
        document.body.style.backgroundImage = "url(img/noite.jpg)"
    }
}