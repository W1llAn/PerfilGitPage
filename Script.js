var header =document.getElementById('encabezado');

window.addEventListener('scroll',()=>{

    var scroll=window.scrollY

    if(scroll>300){
        header.style.backgroundColor = '#131313'
        header.style.transition = 'background-color 0.5s'
    }
    else{
        header.style.backgroundColor = 'transparent'
    }
})