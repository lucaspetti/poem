/*const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex');*/

const Poems = [
  {
    name: 'William Shakespeare',
    poem: 'Come away, come away, death'/*, <br>\ 
\    And in sad cypress let me be laid. <br>\ 
Fly away, fly away, breath\; <br>\
\    I am slain by a fair cruel maid. <br>\
My shroud of white, stuck all with yew, <br>\
\             O, prepare it! <br>\
My part of death, no one so true <br>\
\         Did share it. <br>\
<br>\
Not a flower, not a flower sweet, <br>\
\    On my black coffin let there be strown. <br>\
Not a friend, not a friend greet <br>\
\    My poor corpse, where my bones shall be thrown. <br>\
A thousand thousand sighs to save, <br>\
\             Lay me, O, where <br>\
Sad true lover never find my grave, <br>\
\             To weep there!'*/
  },

  {
    name: 'E.E. Cummings',
    poem: 'i carry your heart with me(i carry it in<br>\
my heart)i am never without it(anywhere<br>\
i go you go,my dear;and whatever is done<br>\
by only me is your doing,my darling)<br>\
\ i fear<br>\
no fate(for you are my fate,my sweet)i want<br>\
no world(for beautiful you are my world,my true)<br>\
and it’s you are whatever a moon has always meant<br>\
and whatever a sun will always sing is you<br>\
<br>\
here is the deepest secret nobody knows<br>\
(here is the root of the root and the bud of the bud<br>\
and the sky of the sky of a tree called life;which grows<br>\
higher than soul can hope or mind can hide)<br>\
and this is the wonder that\'s keeping the stars apart<br>\
<br>\
i carry your heart\(i carry it in my heart)<br>'
  },
]
//Sort poems in English
const sortBtn = document.querySelector('.sort-btn');
const poemAuthor = document.querySelector('.poem-author');
const poem = document.querySelector('#poem');

sortBtn.addEventListener('click', displayQuote);

function displayQuote (){

  let number = Math.floor(Math.random()*Poems.length);
  poemAuthor.innerHTML = Poems[number].name;
  poem.innerHTML = Poems[number].poem;

}
//access instructions:
const instruction = document.querySelector('#instruction');
//Access language buttons:
const englishBtn = document.querySelector('#english-btn');
const frenchBtn = document.querySelector('#french-btn');
const spanishBtn = document.querySelector('#spanish-btn');
const germanBtn = document.querySelector('#german-btn');
const italianBtn = document.querySelector('#italian-btn');
const portugueseBtn = document.querySelector('#portuguese-btn');

frenchBtn.addEventListener('click', frenchSite);
spanishBtn.addEventListener('click', spanishSite);
germanBtn.addEventListener('click', germanSite);
italianBtn.addEventListener('click', italianSite);
portugueseBtn.addEventListener('click', portugueseSite);

function frenchSite (){
  sortBtn.innerHTML = 'Trier';
  instruction.innerHTML = 'Cliquez sur le bouton pour trier un poème:';
}
function spanishSite (){
  sortBtn.innerHTML = 'Sortear';
  instruction.innerHTML = 'Clica al botón para sortear un poema';
}
function germanSite (){
  sortBtn.innerHTML = 'Sortieren';
  instruction.innerHTML = 'Klicken Sie hier, um ein Gedicht zu sortieren:';
}
function italianSite (){
  sortBtn.innerHTML = 'Ordinare';
  instruction.innerHTML = 'Fare clic sul pulsante per ordinare una poesia:';
}
function portugueseSite (){
  sortBtn.innerHTML = 'Sortear';
  instruction.innerHTML = 'Clique abaixo para sortear um poema:';
}