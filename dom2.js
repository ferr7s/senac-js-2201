const p = document.getElementById("paragrafo");

p.innerText = "Meu texto!";


if (confirm('Quer entra com um valor?')) {
    
    let valor = prompt("Digite um numero de 0 a 10");
    
    if (valor >= 0 && valor <= 10) {
        p.innerText = '';
        
      for (let index = 0; index < valor; index++) {
    
        p.innerText = p.innerText + "Matheus Ferrari\n";
      }
    } else {
    
        p.innerText = "Valor invalido"; 
    }
}else{
    p.innerText = "Pena que n usou nenhum valor :(";     
}

