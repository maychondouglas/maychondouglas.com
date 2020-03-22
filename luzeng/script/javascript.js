
    
    /*
    window.onscroll = function() {myFunction()};

    function myFunction(){
       
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector(".barra-menu").style.backgroundColor = "var(--azul-escuro)";
            document.querySelector(".barra-menu").style.marginTop = "3rem";
            document.querySelector("header").style.backgroundColor = "var(--cinza-escuro)";
        } else {
            document.querySelector(".barra-menu").style.backgroundColor = "transparent";
            document.querySelector(".barra-menu").style.marginTop = "3rem";
            document.querySelector("header").style.backgroundColor = "var(--azul-escuro)";
        }
    }
*/
    window.onscroll = function() {myFunction()};

    function myFunction(){
       
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.querySelector(".barra-menu").style.backgroundColor = "var(--azul-escuro)";
            document.querySelector(".barra-menu").style.marginTop = "0";
            document.querySelector("header").style.backgroundColor = "var(--cinza-escuro)";
            document.querySelector(".barra-menu").style.height = "6rem";
            document.querySelector("#logo").style.height = "85px";
            document.querySelector("header").style.display = "none";
        } else {
            document.querySelector(".barra-menu").style.backgroundColor = "transparent";
            document.querySelector(".barra-menu").style.marginTop = "3rem";
            document.querySelector("header").style.backgroundColor = "var(--azul-escuro)";
            document.querySelector(".barra-menu").style.height = "7rem";
            document.querySelector("#logo").style.height = "130px";
            document.querySelector("header").style.display = "initial";
        }
    }

    /*Efeito de digitação no titulo*/
    var textoEntrada = document.getElementById("digitar").innerHTML;
    

    setTimeout(digitar(document.getElementById("digitar"), textoEntrada), 100);
    
    
    
    
    function digitar(elemento, frase){
        elemento.innerHTML = '';
        setTimeout(function(){
            var array = frase.split('');
            var i = 0;
            var id = setInterval(function(){

                var textoAgora = elemento.innerHTML;

                elemento.innerHTML = elemento.innerHTML + "|";
                setTimeout(function(){
                    elemento.innerHTML = textoAgora + array[i-1];
                },90);

                i++;

                if(i == array.length){
                    clearInterval(id);
                    setInterval(function(){
                        
                        elemento.innerHTML = textoEntrada + "|"
                        setTimeout(function(){
                            elemento.innerHTML = textoEntrada;
                        },400);

                    },900);
                }

            }, 150);
            
        }, 1000)
        
    }

    /*Scroll Div Lista de Servicos*/
    var scrollServicos = document.querySelector(".lista-de-servicos");

    var esquerdaServicos = document.getElementById("servicos-left");
    var direitaServicos = document.getElementById("servicos-right");

    
    direitaServicos.addEventListener('click', function(){
        if(scrollServicos.scrollLeft != scrollServicos.scrollLeft.lenght){
            scrollServicos.scrollLeft += 226;
        }
        
    });
    esquerdaServicos.addEventListener('click', function(){
        if(scrollServicos.scrollRight!=0){
            scrollServicos.scrollLeft -= 226;
        }
    });

    var arraySobre = [
    {id:0, tituloSobre:"MISSÃO", textoSobre:"Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do setor desdeLorem ctício padrão do setor desde1", srcImagem:"img/mission.svg"},
    {id:1, tituloSobre:"VALORES", textoSobre:"Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do setor desdeLorem ctício padrão do setor desde2", srcImagem:"img/valores.svg"},
    {id:2, tituloSobre:"VISÃO", textoSobre:"Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum é o texto fictício padrão do setor desdeLorem ctício padrão do setor desde3", srcImagem:"img/visao.svg"}
    ];

    var titulo = document.querySelector("#titulo-sobre");
    var texto = document.querySelector("#texto-sobre");
    var imagem = document.querySelector("#iconeSobre");

    var botaoMissao = document.querySelector("#amissao");
    var botaoValores = document.querySelector("#avalores");
    var botaoVisao = document.querySelector("#avisao");


    botaoMissao.addEventListener('click', function(event){
        event.preventDefault;
        colocarMissao();
        
    });
    botaoValores.addEventListener('click', function(event){
        event.preventDefault;
        colocarValores();
    });
    botaoVisao.addEventListener('click', function(event){
        event.preventDefault;
        colocarVisao();
    });

    colocarMissao();

    function colocarMissao(){
        titulo.innerHTML = arraySobre[id=0].tituloSobre;
        texto.innerHTML = arraySobre[id=0].textoSobre;
        imagem.setAttribute("src", arraySobre[id=0].srcImagem );
        botaoMissao.classList.add("negritar-ancora");
        botaoValores.classList.remove("negritar-ancora");
        botaoVisao.classList.remove("negritar-ancora");
        setTimeout(colocarValores, 6000);
    }
    function colocarValores(){
        titulo.innerHTML = arraySobre[id=1].tituloSobre;
        texto.innerHTML = arraySobre[id=1].textoSobre;
        imagem.setAttribute("src", arraySobre[id=1].srcImagem );
        botaoMissao.classList.remove("negritar-ancora");
        botaoValores.classList.add("negritar-ancora");
        botaoVisao.classList.remove("negritar-ancora");
        setTimeout(colocarVisao, 6000);
    }
    function colocarVisao(){
        titulo.innerHTML = arraySobre[id=2].tituloSobre;
        texto.innerHTML = arraySobre[id=2].textoSobre;
        imagem.setAttribute("src", arraySobre[id=2].srcImagem );
        botaoMissao.classList.remove("negritar-ancora");
        botaoValores.classList.remove("negritar-ancora");
        botaoVisao.classList.add("negritar-ancora");
        setTimeout(colocarMissao, 6000);
    }

    /*Mudar Feedback*/

    var arrayFeedbacks = 
    [
        {id:0, nomeFeedback:"HELENA", sobrenomeFeedback:"FERREIRA DE LIMA", textFeedback:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard1", srcFeedback:"/img/mulher.jpg"},
        {id:1, nomeFeedback:"PEDRO", sobrenomeFeedback:"GONLCALVES PEREIRA", textFeedback:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard2", srcFeedback:"/img/homem.jpg"},
    ];

    var divFotoFeedback = document.querySelector(".foto-pessoa-feedback");
    var primNomeFeedback = document.querySelector(".prim-nome");
    var segNomeFeedback = document.querySelector(".sobrenome");
    var textoFeedback = document.querySelector("#textoFeedback");

    var feedbackEsquerda = document.querySelector("#feedback-left");
    var feedbackDireita = document.querySelector("#feedback-right");

var contadorClicksDireitaFeedback = -1;
feedbackDireita.addEventListener("click", function(){

    contadorClicksDireitaFeedback++;
    

    divFotoFeedback.style.backgroundImage = "url('" + arrayFeedbacks[id=contadorClicksDireitaFeedback].srcFeedback + "' )";
    primNomeFeedback.innerHTML = arrayFeedbacks[id=contadorClicksDireitaFeedback].nomeFeedback;
    segNomeFeedback.innerHTML = arrayFeedbacks[id=contadorClicksDireitaFeedback].sobrenomeFeedback;
    textoFeedback.innerHTML = arrayFeedbacks[id=contadorClicksDireitaFeedback].textFeedback;
    
    if(contadorClicksDireitaFeedback == arrayFeedbacks.length - 1){
        contadorClicksDireitaFeedback = -1; 
    }
    
});

var contadorClicksEsquerdaFeedback = arrayFeedbacks.length;
feedbackEsquerda.addEventListener("click", function(){

    contadorClicksEsquerdaFeedback--;
    

    divFotoFeedback.style.backgroundImage = "url('" + arrayFeedbacks[id=contadorClicksEsquerdaFeedback].srcFeedback + "' )";
    primNomeFeedback.innerHTML = arrayFeedbacks[id=contadorClicksEsquerdaFeedback].nomeFeedback;
    segNomeFeedback.innerHTML = arrayFeedbacks[id=contadorClicksEsquerdaFeedback].sobrenomeFeedback;
    textoFeedback.innerHTML = arrayFeedbacks[id=contadorClicksEsquerdaFeedback].textFeedback;
    
    if(contadorClicksEsquerdaFeedback == 0){
        contadorClicksEsquerdaFeedback = arrayFeedbacks.length; 
    }
    
});


/*Menu Mobile*/
var botaoMenu = document.querySelector(".icon-menu-mobile");
var menuMobileDiv = document.querySelector(".menu-mobile-lista");
var fecharMenuMobile = document.querySelector(".fechar-menu-mobile");

botaoMenu.addEventListener("click", function(){
    menuMobileDiv.style.right = "0";
});
fecharMenuMobile.addEventListener("click", function(){
    menuMobileDiv.style.right = "-50%";
});

/*Menu Deslocando de acordo com o Srcoll*/
var home = document.getElementById("home");
var sobre = document.getElementById("sobre");
var projetos = document.getElementById("projetos");
var servicos = document.getElementById("servicos");
var contato = document.getElementById("contato");

var homeMenu = document.getElementById("home-menu");
var sobreMenu = document.getElementById("sobre-menu");
var projetosMenu = document.getElementById("projetos-menu");
var servicosMenu = document.getElementById("servicos-menu");
var contatoMenu = document.getElementById("contato-menu");





function  fecharMenu(){
    menuMobileDiv.style.right = "-50%";
}
    

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
