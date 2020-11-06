


function projectClicked(aux){
  if(aux.querySelector('a').classList.contains('ocultar')){
    
    aux.querySelector('a').classList.remove('ocultar');
    
    aux.querySelector('img').style.opacity = "1";
    setTimeout(function(){
      aux.querySelector('img').style.width = "100%";
      aux.querySelector('img').style.height = "auto";
      aux.querySelector('img').setAttribute('src', aux.querySelector('img').dataset.image);
    }, 300);
    
    
  }else{
    aux.querySelector('a').classList.add('ocultar');
    setTimeout(function(){
      aux.querySelector('img').style.width = "20%";
      aux.querySelector('img').style.height = "0";
      aux.querySelector('img').setAttribute('src', "img/loading.gif");
    }, 300);
    aux.querySelector('img').style.opacity = "0";
  }
}