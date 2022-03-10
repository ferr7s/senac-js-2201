const p = document.getElementById("paragrafo");

//p.innerText = 'Meu texto!';
//p.style.background = 'green';

var colors = ["purple", "yellow", "orange", "brown", "black", "pink"];

for (index = 0, c = 0; index < 1000; index++, c++) {
  p.style.background = colors[c];

  console.log(p.style.background);

  if (c >= 6) c = 0;
}

console.log(p);
