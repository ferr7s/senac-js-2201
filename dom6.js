const li = document.createElement('li');

li.className = 'collection-item';

li.id = 'nova tarefa qualquer';

li.setAttribute('title', 'Pare o mouse para ver');

const texto = document.createTextNode('Tarefa inserida dinamicamente');

li.appendChild(texto);

const a = document.createElement('a');

a.className = 'delete-item secondary-content';

a.setAttribute('href', '#');
// Criamos o elemento a

const i = document.createElement('i');
// Criamos o elemnto i

i.className = 'fa fa-remove';
//Criamos o elemento i

a.appendChild(i); //Colocamos o i no a

li.appendChild(a); //Colocamos o a no li

console.log(li);

const ul = document.querySelector('ul.collection');
//capturamos o ul para poder inserir o li

ul.appendChild(li); //colocamos o li no ul

const acaoNoCard = document.querySelector('.card-action')
const tituloAntigo = document.getElementById('task-title');
const novoTitulo = document.createElement('h2');

novoTitulo.id = 'task-title';

novoTitulo.appendChild(document.createTextNode('Lista'));
acaoNoCard.replaceChild(novoTitulo, tituloAntigo);