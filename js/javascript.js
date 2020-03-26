var esquerda = document.querySelector('#left i');
var direita = document.querySelector('#right i');
var imagem1 = document.querySelector('.imagem1');
var esquerda_m = document.querySelector('#left-mobile i');
var direita_m = document.querySelector('#right-mobile i');
var count = 0;
function avancarGaleria($i){
    if($i<=13){
        imagem1.style.backgroundImage = "URL(/img/".concat($i+1).concat(".jpg)");
        count+=1;
    }else{
        count=0;
        avancarGaleria(count);
    }
}
function voltarGaleria($i){
    if($i>=4){
        imagem1.style.backgroundImage = "URL(/img/".concat($i-1).concat(".jpg)");
        count-=1;
    }else{
        count=13;
        avancarGaleria(count);
    }
}
esquerda.addEventListener('click', function(){
    avancarGaleria(count);
});
direita.addEventListener('click', function(){
    voltarGaleria(count);
});
esquerda_m.addEventListener('click', function(){
    avancarGaleria(count);
});
direita_m.addEventListener('click', function(){
    avancarGaleria(count);
});

/* Máscaras ER */
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,"");             //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function idd( el ){
    return document.getElementById( el );
}
window.onload = function(){
    idd('telefone').onkeyup = function(){
        mascara( this, mtel );
    }
}
