//Sort poems
const sortBtn = document.querySelector('.sort-btn');
const poemAuthor = document.querySelector('.poem-author');
const poem = document.querySelector('#poem');
const imageContainer = document.querySelector('#img-container');
const poemImage = new Image(672, 372);
poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
// imageContainer.appendChild(poemImage);
let query = "english";

const instruction = document.querySelector('#instruction');

const englishBtn = document.querySelector('#english-btn');
const frenchBtn = document.querySelector('#french-btn');
const spanishBtn = document.querySelector('#spanish-btn');
const germanBtn = document.querySelector('#german-btn');
const italianBtn = document.querySelector('#italian-btn');
const portugueseBtn = document.querySelector('#portuguese-btn');

// englishBtn.addEventListener('click', englishSite);
// frenchBtn.addEventListener('click', frenchSite);
// spanishBtn.addEventListener('click', spanishSite);
// germanBtn.addEventListener('click', germanSite);
// italianBtn.addEventListener('click', italianSite);
// portugueseBtn.addEventListener('click', portugueseSite);

// sortBtn.addEventListener('click', displayPoem);

function clearImage(){
  poemImage.src = 'handwriting.jpg';
}

function displayPoem (){
  clearImage();
  fetch(`data/${query}-poems.json`)
    .then(response => response.json())
    .then((data) => {
      let number = Math.floor(Math.random()*data.length);
      poemImage.src = data[number].imgSource;
      poemAuthor.innerHTML = data[number].name;
      poemImage.height = data[number].imgHeight;
      poemImage.width = data[number].imgWidth;
      poem.innerHTML = data[number].poem.join('<br />\ ');
    });
}

function changeLanguage () {
  event.preventDefault();
  clearImage();
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
}

function englishSite (){
  sortBtn.innerHTML = 'Sort';
  query = "english";
  instruction.innerHTML = 'Click the button to sort a poem:';
  changeLanguage();
  poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
  poemImage.height = 372;
  poemImage.width = 672;
}
function frenchSite (){
  sortBtn.innerHTML = 'Trier';
  query = "french";
  instruction.innerHTML = 'Cliquez sur le bouton pour trier un poème:';
  changeLanguage();
  poemImage.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg';
  poemImage.height = 620;
  poemImage.width = 780;
}
function spanishSite (){
  sortBtn.innerHTML = 'Sortear';
  query = "spanish";
  instruction.innerHTML = 'Clica al botón para sortear un poema:';
  changeLanguage();
  poemImage.src = 'https://ep00.epimg.net/cultura/imagenes/2016/07/06/actualidad/1467838131_406594_1467838290_noticia_normal.jpg';
  poemImage.height = 380;
  poemImage.width = 490;
}
function germanSite (){
  sortBtn.innerHTML = 'Sortieren';
  query = "german";
  instruction.innerHTML = 'Klicken Sie hier, um ein Gedicht zu sortieren:';
  changeLanguage();
  poemImage.src = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Delacroix_Faust_1.jpg';
  poemImage.height = 555;
  poemImage.width = 375;
}
function italianSite (){
  sortBtn.innerHTML = 'Assortire';
  query = "italian";
  instruction.innerHTML = 'Fare clic sul pulsante per ordinare una poesia:';
  changeLanguage();
  poemImage.src = 'http://blog.graphe.it/wp-content/uploads/2016/10/PortaInfernoDante.jpg';
  poemImage.height = 351;
  poemImage.width = 620;
}
function portugueseSite (){
  sortBtn.innerHTML = 'Sortear';
  query = "portuguese";
  instruction.innerHTML = 'Clique abaixo para sortear um poema:';
  changeLanguage();
  poemImage.src = 'https://www.jornaltornado.pt/wp-content/uploads/2018/02/Recriar-Os-Lusiadas-em-teatro-animado-900x506.jpg';
  poemImage.height = 378;
  poemImage.width = 675;
}
