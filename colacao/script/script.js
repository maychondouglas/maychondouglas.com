/*O Código abaixo manipula o combobox de Seleção de Curso - Página de Colação de Grau*/

var selecionarCurso = document.getElementById("selecionar-curso")

var objetos = [
    {"value":0, "nome":'SELECIONE O SEU CURSO...', "dia": 0, "mes":"0", "link":"0"}, 
    {"value":1, "nome":'ADMINISTRAÇÃO', "dia": 13, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":2, "nome":'AGRONOMIA', "dia": 15, "mes":"FEVEREIRO", "link":"grupo3"}, 
    {"value":3, "nome":'ARQUITETURA E URBANISMO', "dia": 20, "mes":"FEVEREIRO", "link":"grupo4"}, 
    {"value":4, "nome":'CIÊNCIAS CONTÁBEIS', "dia": 25, "mes":"FEVEREIRO", "link":"grupo5"}, 
    {"value":5, "nome":'CIÊNCIAS BIOLÓGICAS', "dia": 45, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":6, "nome":'DIREITO', "dia": 12, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":7, "nome":'ENFERMAGEM', "dia": 12, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":8, "nome":'ENGENHARIA CIVIL', "dia": 32, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":9, "nome":'ENGENHARIA DA COMPUTAÇÃO', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":10, "nome":'ENGENHARIA ELÉTRICA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":11, "nome":'FARMÁCIA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":12, "nome":'PEDAGOGIA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":13, "nome":'PUBLICIDADE E PROPAGANDA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":14, "nome":'TECNOL. ANÁLISE E DESENV. DE SISTEMAS', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":15, "nome":'TECNOL. GESTÃO AMBIENTAL', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":16, "nome":'TECNOL. GESTÃO COMERCIAL', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":17, "nome":'TECNOL. RECURSOS HUMANOS', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"},  
    {"value":18, "nome":'TECNOL. SEGURANÇA PÚBLICA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}, 
    {"value":19, "nome":'QUÍMICA', "dia": 20, "mes":"FEVEREIRO", "link":"grupo1"}

];
carregarComboBox(objetos, selecionarCurso);

selecionarCurso.addEventListener('change', function(){
    var indice = selecionarCurso.options[selecionarCurso.selectedIndex].value;
    if(indice==0){
        document.querySelector(".dinamico").style.display = "none";
        document.querySelector(".sel h4").style.display = "block";
    }else{
        document.querySelector(".dinamico").style.display = "flex";
        document.querySelector(".dia-calendario").innerHTML = objetos[value=indice].dia;
        document.querySelector(".mes-calendario").innerHTML = objetos[value=indice].mes;
        document.querySelector(".sel h4").style.display = "none";
    }
    
});

var selecionarPergunta = document.querySelector(".select-duvida");

var duvidas = [
    {"value":1, "nome":"QUANTOS CONVIDADOS ASDSPODEREI LEVAR?", "resposta":"NÃO LIMITAMOS A QUANTIDADE DE CONVIDADOS POIS O TEATRO ONDE SERÃO REALIZADAS AS COLAÇÕES DE GRAU POSSUI GRANDE NÚMERO DE ASSENTOS."},
    {"value":2, "nome":"QUANTOS CONVIDADOS PODEREI LEVAR?", "resposta":"NÃO LIMITAMOS A QUANTIDADE DE CONVIDADOS POIS O TEATRO ONDE SERÃO REALIZADAS AS COLAÇÕES DE GRAU POSSUI GRANDE NÚMERO DE ASSENTOS."},
    {"value":3, "nome":"DESEJO PARTICIPAR DA COLAÇÃO EXTRAORDINÁRIA, O QUE FAZER?", "resposta":"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"},
    {"value":4, "nome":"QUANTOS CONVIDADOS PODEREI LEVAR?", "resposta":"NÃO LIMITAMOS A QUANTIDADE DE CONVIDADOS POIS O TEATRO ONDE SERÃO REALIZADAS AS COLAÇÕES DE GRAU POSSUI GRANDE NÚMERO DE ASSENTOS."},
    {"value":5, "nome":"QUANTOS CONVIDADOS PODEREI LEVAR?", "resposta":"NÃO LIMITAMOS A QUANTIDADE DE CONVIDADOS POIS O TEATRO ONDE SERÃO REALIZADAS AS COLAÇÕES DE GRAU POSSUI GRANDE NÚMERO DE ASSENTOS."},
    {"value":6, "nome":"QUANTOS CONVIDADOS PODEREI LEVAR?", "resposta":"NÃO LIMITAMOS A QUANTIDADE DE CONVIDADOS POIS O TEATRO ONDE SERÃO REALIZADAS AS COLAÇÕES DE GRAU POSSUI GRANDE NÚMERO DE ASSENTOS."}
];

carregarComboBox(duvidas, selecionarPergunta);

var indice = selecionarPergunta.options[selecionarPergunta.selectedIndex].value;
document.querySelector(".resposta").innerHTML = duvidas[value=indice].resposta;

selecionarPergunta.addEventListener('change', function(){
    var indice = selecionarPergunta.options[selecionarPergunta.selectedIndex].value;
    document.querySelector(".resposta").innerHTML = duvidas[value=indice].resposta;
});



/*Carregando Array no ComboBox*/
function carregarComboBox( array, comboBox){

    for(var i = 0; i<array.length; i++){
        var op = document.createElement("option");
        op.value = i;
        op.text = array[value=i].nome;
    
        comboBox.add(op, comboBox.options[i]);
    }
}









