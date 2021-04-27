console.log('Bem a vindo a Smarttec')
console.log('Marcas de celular disponiveis no estoque.')
console.log('motorola,xiaomi note 8.')

var modelo1='xiaomi note 8'

var modelo2= 'moto g9'
var marcadocelular=prompt("Qual marca de celular deseja comprar?")

if (modelo1 === marcadocelular)
  console.log('Ok,você escolheu xiaomi note 8')
  else{

  }
  if(modelo2 === marcadocelular)
  console.log("Ok, voce escolheu o moto g9")
 
  else{

  }

 console.log("cores disponiveis")

  console.log ("azul")

  console.log ("preta")

  console.log("vermelha")

  var cor = prompt("escolha a cor ");

  switch (cor) {
   case "azul":
   console.log("Voce escolheu a cor azul");
   break
   case "preta":
   console.log("voce escolheu a cor preta");
   break
   case "vermelha":
   console.log("voce escolheu a cor vermelha");
  }
  
  var metpag = ['Credito','Debito','Boleto'] ;
  var j = 0;

console.log("Metodo de pagamento")

  while(j < 4) {
    console.log(metpag[j]);
    j++;
  }

  for(i  = 0 ; i < 3 ; i++) {
    console.log ("");
    console.log("----");
    console.log("");
  }
    var h = 0;

    do {
      console.log(metpag[h]);
      h++;
    } while (h < 4) ;