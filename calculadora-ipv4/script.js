    var controle = 0;
    var campoIP = document.getElementById('campoip');

    var mainPrincipal = document.querySelector('main');
    var inicioPrincipal = document.querySelector('inicio');

    var campoMascara = document.querySelector('form input:nth-child(2)');
    var tituloPagina = document.getElementById('tituloDaPagina');
    var inicio = document.querySelector('nav .menu li:nth-child(1)');
    var ipv4ComClasse = document.querySelector('nav .menu li:nth-child(2)');
    var ipv4SemClasse = document.querySelector('nav .menu li:nth-child(3)');

    var mensagemDeErro = document.getElementById('mensagem-erro');

    /*Elementos de Resultado (spans)*/
    var classeCampo = document.getElementById('ipclasse');
    
    var maskDecimal = document.getElementById('ipmaskdec');
    var maskCIDR = document.getElementById('ipmaskcidr');
    var ipNumHosts = document.getElementById('ipnumhosts');
    var ipDeRede = document.getElementById('iprede');
    var ipDeBroadcast = document.getElementById('ipbroadcast');
    var primeiroIp = document.getElementById('ipprimeiro');
    var ultimoIp = document.getElementById('ipultimo');


    
    ipv4ComClasse.addEventListener('click', function(){
        controle = 1;
        document.getElementById('campoClasse').style.display = "block";
        document.querySelector('main').style.display = "block";
        tituloPagina.innerHTML = 'COM CLASSE';
        
        campoMascara.style.display = "none";
        ipv4ComClasse.style.backgroundColor = "rgba(255, 255, 255, 40%)";
        ipv4ComClasse.style.color = "blue";
        ipv4ComClasse.style.borderRight = "0.2rem solid blue";

        inicio.style.borderStyle = "hidden";
        inicio.style.backgroundColor = "transparent";
        inicio.style.color = "black";

        ipv4SemClasse.style.borderStyle = "hidden";
        ipv4SemClasse.style.backgroundColor = "transparent";
        ipv4SemClasse.style.color = "black";
    });
    
    inicio.addEventListener('click', function(){
        controle = 0;
        tituloPagina.innerHTML = 'CALCULADORA';
        document.querySelector('main').style.display = "none";
         

        campoMascara.style.display = "none";
        inicio.style.backgroundColor = "rgba(255, 255, 255, 40%)";
        inicio.style.color = "blue";
        inicio.style.borderRight = "0.2rem solid blue";

        ipv4ComClasse.style.borderStyle = "hidden";
        ipv4ComClasse.style.backgroundColor = "transparent";
        ipv4ComClasse.style.color = "black";

        ipv4SemClasse.style.borderStyle = "hidden";
        ipv4SemClasse.style.backgroundColor = "transparent";
        ipv4SemClasse.style.color = "black";
    });
    
    ipv4SemClasse.addEventListener('click', function(){
        controle = 2;
        document.getElementById('campoClasse').style.display = "none";
        document.querySelector('main').style.display = "block";
        
        tituloPagina.innerHTML = 'SEM CLASSE';
        campoMascara.style.display = "flex";
        ipv4SemClasse.style.backgroundColor = "rgba(255, 255, 255, 40%)";
        ipv4SemClasse.style.color = "blue";
        ipv4SemClasse.style.borderRight = "0.2rem solid blue";

        ipv4ComClasse.style.borderStyle = "hidden";
        ipv4ComClasse.style.backgroundColor = "transparent";
        ipv4ComClasse.style.color = "black";

        inicio.style.borderStyle = "hidden";
        inicio.style.backgroundColor = "transparent";
        inicio.style.color = "black";
    });

    var botaoCalcular = document.getElementById('calcular');
    botaoCalcular.addEventListener('click', function(){
        var vetor = campoIP.value.split(".");
        if(vetor.length != 4 || vetor[0] > 255 || vetor[1] > 255 || vetor[2] > 255 || vetor[3] > 255 || vetor[0] <=0 || vetor[1] < 0 || vetor[2] < 0 || vetor[3] < 0 ){
            mensagemDeErro.innerHTML = "O Endereço IP digitado é inválido! Digite um Ip Válido";

        }else{
            if(controle == 1){
                
                mensagemDeErro.innerHTML = "";
                var x = vetor[0];
                var y = vetor[1];
                var z = vetor[2];
                var classe = "";
                var mascaraDecimal = "";
                var mascaraCIDR = 0;
                var numeroDeHosts = 0;
                var enderecoRede = [x, y, z, 0];
                var enderecoBroadcast = [x, y, z, 255];
                var primeiroEnderecoUtilizavel = [x, 0, 0, 1];
                var ultimoEnderecoUtilizavel =[x, 255, 255, 254];
                
                if(vetor[0]<=127){
                    classe = "A";
                    mascaraDecimal = "255.0.0.0";
                    mascaraCIDR = 8;
                    var teste = (32-mascaraCIDR);
                    numeroDeHosts = Math.pow(2, teste) - 2;
                    enderecoRede[1] = 0;
                    enderecoRede[2] = 0;
                    enderecoRede[3] = 0;
                    enderecoBroadcast[1] = 255;
                    enderecoBroadcast[2] = 255;
                    enderecoBroadcast[3] = 255;
                }else{
                    if(vetor[0]<=191){
                        classe = "B";
                        mascaraDecimal = "255.255.0.0";
                        mascaraCIDR = 16;
                        var teste = (32-mascaraCIDR);
                        numeroDeHosts = Math.pow(2, teste) - 2;
                        enderecoRede[2] = 0;
                        enderecoRede[3] = 0;
                        enderecoBroadcast[2] = 255;
                        enderecoBroadcast[3] = 255;
                        primeiroEnderecoUtilizavel[1] = y;
                        ultimoEnderecoUtilizavel[1] = y;
                    }else{
                        if(vetor[0]<=223){
                        classe = "C";
                        mascaraDecimal = "255.255.255.0";
                        mascaraCIDR = 24;
                        var teste = (32-mascaraCIDR);
                        numeroDeHosts = Math.pow(2, teste) - 2;
                        primeiroEnderecoUtilizavel[1] = y;
                        primeiroEnderecoUtilizavel[2] = z;
                        ultimoEnderecoUtilizavel[1] = y;
                        ultimoEnderecoUtilizavel[2] = z;
                        }else{
                            if(vetor[0]<=239){
                                classe = "D";
                            }else{
                                classe = "E";
                            }
                        }
                    }
                }
            classeCampo.innerHTML = classe;
            maskDecimal.innerHTML = mascaraDecimal;
            maskCIDR.innerHTML = mascaraCIDR;
            ipNumHosts.innerHTML = numeroDeHosts;
            ipDeRede.innerHTML = enderecoRede[0] + '.' + enderecoRede[1] + '.' + enderecoRede[2] + '.' + enderecoRede[3];
            ipDeBroadcast.innerHTML = enderecoBroadcast[0] + '.' + enderecoBroadcast[1] + '.' + enderecoBroadcast[2] + '.' + enderecoBroadcast[3];
            primeiroIp.innerHTML = primeiroEnderecoUtilizavel[0] + '.' + primeiroEnderecoUtilizavel[1] + '.' + primeiroEnderecoUtilizavel[2] + '.' + primeiroEnderecoUtilizavel[3];
            ultimoIp.innerHTML =  ultimoEnderecoUtilizavel[0] + '.' + ultimoEnderecoUtilizavel[1] + '.' + ultimoEnderecoUtilizavel[2] + '.' + ultimoEnderecoUtilizavel[3];
            
            }else{
                mensagemDeErro.innerHTML = "";
                
                if(controle == 2){//sem classe

                    document.getElementById('campoClasse').style.display = "none";
                    var vetorMascara = campoMascara.value.split("");
                    if(vetorMascara[0] == "/"){//mascara na notacao CIDR
                        var mascaraCidr = parseInt((vetorMascara[1])+((vetorMascara[2]!=null)?vetorMascara[2]:""));
                        if(mascaraCidr>=32 || mascaraCidr == 0){
                            mensagemDeErro.innerHTML = "Mascara Inválida";
                        }else{

                                //GERANDO A MASCARA em BINARIO PARA PASSAR PARA NOTACAO DECIMAL
                                //
                                var vetorIp = campoIP.value.split(".");
                                var x = vetorIp[0];
                                var y = vetorIp[1];
                                var z = vetorIp[2];
                                var t = vetorIp[3];
                                var cidr = mascaraCidr;
                                var mascaraInvertida = [];
                                var mascaraBinario = [];
                                for(let i = 0; i<32; i++){
                                    if(i<cidr){
                                        mascaraBinario[i] = 1;
                                        mascaraInvertida[i] = 0;
                                    }else{
                                        mascaraBinario[i] = 0;
                                        mascaraInvertida[i] = 1;
                                    }
                                }
                                /////PASSANDO MASCARA PARA DECIMAL
                                var xM = parseInt(converterParaDecimal(mascaraBinario, 0));
                                var yM = parseInt(converterParaDecimal(mascaraBinario, 8));
                                var zM = parseInt(converterParaDecimal(mascaraBinario, 16));
                                var tM = parseInt(converterParaDecimal(mascaraBinario, 24));
                                
                                //CALCULANDO A MASCARA INVERTIDA;
                                
                                var xB = convertendoParaBinario(x);
                                var yB = convertendoParaBinario(y);
                                var zB = convertendoParaBinario(z);
                                var tB = convertendoParaBinario(t);
                                
                                
                                
                                var ipBinario = [];
                                
                                for(let i = 0, j = 0; i < 32; i++, j++){
                                    if(i == 8 || i == 16 || i == 24){
                                        j = 0;
                                    }
                                    
                                    //UNINDO OS 4 VETORES DO IP BINARIO EM UM UNICO VETOR DE 32 BITS
                                    if(i < 8){
                                            ipBinario[i] = xB[j];
                                        }
                                        else{
                                            if(i <16) {
                                                ipBinario[i] = yB[j];
                                            }
                                            else{
                                                if(i < 24){
                                                    ipBinario[i] = zB[j];
                                                }else{
                                                    ipBinario[i] = tB[j];
                                                }
                                            }
                                        }
                                }
                                
                                //FAZER OPERAÇÃO OR ENTRE O IP E A MASCARA NEGADA(INVERTIDA) PARA OBTER O BROADCAST
                                var ipBroadcast = [];
                                for(let i = 0; i<32; i++){
                                    ipBroadcast[i] = (mascaraInvertida[i] | ipBinario[i]);
                                }
                                
                                
                                var broadcastX = 0, broadcastY = 0, broadcastZ = 0, broadcastT = 0;
                                broadcastX = converterParaDecimal(ipBroadcast, 0);
                                broadcastY = converterParaDecimal(ipBroadcast, 8);
                                broadcastZ = converterParaDecimal(ipBroadcast, 16);
                                broadcastT = converterParaDecimal(ipBroadcast, 24); 
                                
                                //NUMERO DE HOST'S DESCONTANDO REDE E BROADCAST
                                var numeroDeHosts = Math.pow(2, 32 - cidr) - 2 ;
                                
                                //PARA ENCONTRAR O ENDERECO DE REDE UTILIZAREI A OPERACAO AND ENTRE O ENDERECO E A MASCARA DECIMAL
                                var enderecoRede = [x & xM, y & yM, z & zM, t & tM];
                                
                                //PARA ENCONTRAR O PRIMEIRO ENDERECO DO BLOCO UTILIZAVEL, SOMA-SE 1 NO ULTIMO OCTETO DO ENDERECO DE REDE
                                var primeiroEnderecoUtilizavel = [x & xM, y & yM, z&zM, (t&tM)+1];

                                document.getElementById('ipdigitado').innerHTML = campoIP.value;
                                maskDecimal.innerHTML = xM + '.' + yM +  '.' + zM + '.' + tM;
                                maskCIDR.innerHTML = "/" + cidr;
                                ipNumHosts.innerHTML = numeroDeHosts;
                                ipDeRede.innerHTML = enderecoRede[0] + '.' + enderecoRede[1] + '.' + enderecoRede[2] + '.' + enderecoRede[3];
                            
                                ipDeBroadcast.innerHTML = broadcastX + '.' + broadcastY + '.' + broadcastZ + '.' + broadcastT;
                                primeiroIp.innerHTML = primeiroEnderecoUtilizavel[0] + '.' + primeiroEnderecoUtilizavel[1] + '.' + primeiroEnderecoUtilizavel[2] + '.' + primeiroEnderecoUtilizavel[3];
                                ultimoIp.innerHTML = broadcastX + '.' + broadcastY + '.' + broadcastZ + '.' + parseInt(broadcastT-1);
















                        }
                    }else{ //mascara na notacao Decimal
                            var vetorMascaraDecimal = campoMascara.value.split(".");
                            var mascaraDecimal = campoMascara.value;
                            var xM = parseInt(vetorMascaraDecimal[0]);
                            var yM = parseInt(vetorMascaraDecimal[1]);
                            var zM = parseInt(vetorMascaraDecimal[2]);
                            var tM = parseInt(vetorMascaraDecimal[3]); 
                            
                            var vetorIp = campoIP.value.split(".");
                            var x = parseInt(vetorIp[0]);
                            var y = parseInt(vetorIp[1]);
                            var z = parseInt(vetorIp[2]);
                            var t = parseInt(vetorIp[3]);  
                            
                            //TRANSFORMANDO A MASCARA EM BINARIO, PARA IDENTIFICAR A NOTACAO EM CIDR
                            var xMB = convertendoParaBinario(xM);
                            var yMB = convertendoParaBinario(yM);
                            var zMB = convertendoParaBinario(zM);
                            var tMB = convertendoParaBinario(tM);
                            
                            var xB = convertendoParaBinario(x);
                            var yB = convertendoParaBinario(y);
                            var zB = convertendoParaBinario(z);
                            var tB = convertendoParaBinario(t);
                            
                            //UNINDO OS VETORES IP E MASCARA BINARIA EM UM SO VETOR, CALCULANDO A MASCARA INVERTIDA, CALCULANDO A MASCARA CIDR;
                            var mascaraBinaria = [], mascaraInvertida = [], p = 0, ipBinario = [];
                            for(let i = 0; i<8; i++){
                                //MASCARA
                                mascaraBinaria[i] = xMB[i];
                                
                                //IP
                                ipBinario[i] = xB[i];
                                        
                                //CALCULANDO MASCARA CIDR
                                if(mascaraBinaria[i]==0 && mascaraBinaria[i-1]==1){
                                    p = i;
                                }
                                
                                //GERANDO MASCARA INVERTIDA
                                if(xMB[i]==1) { 
                                    mascaraInvertida[i]=0;
                                    }
                                else {
                                    mascaraInvertida[i]=1;
                                    }
                                    
                                
                            }
       
                            for(let i = 8, j = 0; j< 8; i++, j++){
                                //MASCARA
                                mascaraBinaria[i] = yMB[j];
                                //IP
                                ipBinario[i] = yB[j];
                                
                                //CALCULANDO MASCARA CIDR
                                if(mascaraBinaria[i]==0 && mascaraBinaria[i-1]==1){
                                    p = i;
                                }
                                
                                //GERANDO MASCARA INVERTIDA
                                if(yMB[j]==1) {mascaraInvertida[i]=0;}
                                else {mascaraInvertida[i]=1;}
                                
                            }

                            for(let i = 16, j = 0; j < 8; i++, j++){
                                //MASCARA 
                                mascaraBinaria[i] = zMB[j];
                                //IP
                                ipBinario[i] = zB[j];
                                
                                //CALCULANDO MASCARA EM CIDR
                                if(mascaraBinaria[i]==0 && mascaraBinaria[i-1]==1){
                                    p = i;
                                }
                                
                                //GERANDO MASCARA INVERTIDA
                                if(zMB[j]==1) {mascaraInvertida[i]=0;}
                                else { mascaraInvertida[i]=1;}
                                
                            }

                            for(let i = 24, j = 0; j < 8; i++, j++){
                                
                                //MASCARA
                                mascaraBinaria[i] = tMB[j];
                                
                                //IP
                                ipBinario[i] = tB[j];
                                
                                //CALCULANDO MASCARA EM CIDR
                                if(mascaraBinaria[i]==0 && mascaraBinaria[i-1]==1){
                                    p = i;
                                }
                                
                                //GERANDO MASCARA INVERTIDA
                                if(tMB[j]==1) {
                                    mascaraInvertida[i]=0;
                                    }else {
                                        mascaraInvertida[i]=1;
                                    }
                                   
                            }
                            
 
                     
                            
                            //FAZER OPERAÇÃO OR ENTRE O IP E A MASCARA NEGADA(INVERTIDA) PARA OBTER O BROADCAST
                            var ipBroadcast = [];
                            for(let i = 0; i<32; i++){
                                ipBroadcast[i] = (mascaraInvertida[i] | ipBinario[i]);
                            }
                           
                            
                            
                            var broadcastX = 0, broadcastY = 0, broadcastZ = 0, broadcastT = 0;
                            broadcastX = converterParaDecimal(ipBroadcast, 0);
	                        broadcastY = converterParaDecimal(ipBroadcast, 8);
	                        broadcastZ = converterParaDecimal(ipBroadcast, 16);
	                        broadcastT = converterParaDecimal(ipBroadcast, 24); 
                            //MASCARA CIDR
                            var mascaraCIDR = p;
                            
                            //CALCULANDO NUMERO DE HOSTS
                            var numeroDeHosts = Math.pow(2, (32-mascaraCIDR))-2;
                            
                            //PARA ENCONTRAR O ENDERECO DE REDE UTILIZAREI A OPERACAO AND ENTRE O ENDERECO E A MASCARA DECIMAL
                            var enderecoRede = [x & xM, y & yM, z & zM, t & tM];
                            
                            //PARA ENCONTRAR O PRIMEIRO ENDERECO DO BLOCO UTILIZAVEL, SOMA-SE 1 NO ULTIMO OCTETO DO ENDERECO DE REDE
                            var primeiroEnderecoUtilizavel= [x & xM, y&yM, z&zM, (t&tM)+1];



                            document.getElementById('ipdigitado').innerHTML = campoIP.value;
                            maskDecimal.innerHTML = mascaraDecimal;
                            maskCIDR.innerHTML = mascaraCIDR;
                            ipNumHosts.innerHTML = numeroDeHosts;
                            ipDeRede.innerHTML = enderecoRede[0] + '.' + enderecoRede[1] + '.' + enderecoRede[2] + '.' + enderecoRede[3];
                        
                            ipDeBroadcast.innerHTML = broadcastX + '.' + broadcastY + '.' + broadcastZ + '.' + broadcastT;
                            primeiroIp.innerHTML = primeiroEnderecoUtilizavel[0] + '.' + primeiroEnderecoUtilizavel[1] + '.' + primeiroEnderecoUtilizavel[2] + '.' + primeiroEnderecoUtilizavel[3];
                            ultimoIp.innerHTML = broadcastX + '.' + broadcastY + '.' + broadcastZ + '.' + parseInt(broadcastT-1);
                    }
                } 
            }
        }

    });
    function  converterParaDecimal(ipBroadcast, inicio){
	
	//CONVERTER BINARIO DE 8 BITS PARA DECIMAL
	var j = inicio+7; 
	var inteiro = 0;
	
	for(var i = 0; i < 8; i++){
		
		if(ipBroadcast[j] == 1 ){
			
			inteiro += Math.pow(2, i);
		}
		
		j--;
	}
	
	return inteiro;
}
function  convertendoParaBinario(number){
	var x = number;
	var b = [];
	for(let i = 7; i >= 0 ; i--){

        if(x >= 1){
            b[i] = parseInt(x%2);
            x = parseInt(x / 2);
        }
        else{
            b[i] = 0;
        }
    }
	return b;
}
    