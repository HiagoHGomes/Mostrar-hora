function carregar( ) {
    var msg = document.getElementById ('msg')
    var img = document.getElementById ('imagem')
    var data = new Date ()
    var hora = data.getHours()
    var  min = data.getMinutes()
    var sec = data.getSeconds ()
    msg.innerHTML = (`Hora local: ${hora}:${min}:${sec}`)
   
    window.setInterval('carregar()', 1000)
    if (hora>=0 && hora<6) {
        //boa madrugada
        img.src = 'imagens/madrugada.jpg'
        document.body.style.background = '#0d0e12'

    }else if(hora>=6 && hora <12){
        //bom dia
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#7d92b1'
    }else if (hora>=12 && hora <18){
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#ff6002'
    }else{
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#000000'
    }
    
}

