function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =  document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0|| Number(fano.value)>ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')   
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Um Homem'
            if (idade>=0 && idade<3){
                //Bebe
                img.setAttribute('src','foto-bebem.png')
            } else if (idade<12) {
                //Criança
                img.setAttribute('src','foto-menino.png')
            } else if (idade <17){
                //Adolesente
                img.setAttribute('src','foto-jovemm.png')
            } else if (idade <65){
                //Adulto
                img.setAttribute('src','foto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src','foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Uma Mulher'
            if (idade>=0 && idade<3){
                //Bebe
                img.setAttribute('src','foto-bebef.png')
            } else if (idade<12) {
                //Criança
                img.setAttribute('src','foto-menina.png')
            } else if (idade <17){
                //Adolesente
                img.setAttribute('src','foto-jovemf.png')
            } else if (idade <65){
                //Adulto
                img.setAttribute('src','foto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src','foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos`  
        res.appendChild(img)

    }
}