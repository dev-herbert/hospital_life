function menu () {
    let menu = document.getElementById('mobile')

    if(menu.classList.contains('on')){
        menu.classList.remove('on')
       menu.classList.add('off')
    }else{
        menu.classList.remove('off')
        menu.classList.add('on')
    }
}
function login () {
    document.write(" <p>ERRO [505]</p>")
    document.body.style.color = "red"
    document.write(" <p>FORA DO AR PARA MANUTENÇÃO</p>")
    document.write(" <p>Por favor recarregue a pagina.</p>")
    document.body.style.textAlign = "center"
}