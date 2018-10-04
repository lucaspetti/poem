//Sort poems
const sortBtn = document.querySelector('.sort-btn');
const poemAuthor = document.querySelector('.poem-author');
const poem = document.querySelector('#poem');
const imageContainer = document.querySelector('#img-container');
const poemImage = new Image(672, 372);
poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
imageContainer.appendChild(poemImage);

sortBtn.addEventListener('click', displayPoem);

function displayPoem (){
//sort poems in English
  if (sortBtn.innerHTML === 'Sort') {
    let number = Math.floor(Math.random()*englishPoems.length);
    poemAuthor.innerHTML = englishPoems[number].name;
    poem.innerHTML = englishPoems[number].poem;
    poemImage.src = englishPoems[number].imgSource;
    poemImage.height = englishPoems[number].imgHeight;
    poemImage.width = englishPoems[number].imgWidth;
  }
//sort poems in French
  else if (sortBtn.innerHTML === 'Trier') {
    let number = Math.floor(Math.random()*frenchPoems.length);
    poemAuthor.innerHTML = frenchPoems[number].name;
    poem.innerHTML = frenchPoems[number].poem;
    poemImage.src = frenchPoems[number].imgSource;
    poemImage.height = frenchPoems[number].imgHeight;
    poemImage.width = frenchPoems[number].imgWidth;
  }
//sort poems in Spanish
  else if (instruction.innerHTML === 'Clica al botón para sortear un poema:') {
    let number = Math.floor(Math.random()*Poesias.length);
    poemAuthor.innerHTML = Poesias[number].name;
    poem.innerHTML = Poesias[number].poem;
    poemImage.src = Poesias[number].imgSource;
    poemImage.height = Poesias[number].imgHeight;
    poemImage.width = Poesias[number].imgWidth;
  }
//sort poems in German
  else if (sortBtn.innerHTML === 'Sortieren') {
    let number = Math.floor(Math.random()*Gedichte.length);
    poemAuthor.innerHTML = Gedichte[number].name;
    poem.innerHTML = Gedichte[number].poem;
    poemImage.src = Gedichte[number].imgSource;
    poemImage.height = Gedichte[number].imgHeight;
    poemImage.width = Gedichte[number].imgWidth;
  }
//sort poems in Italian
  else if (sortBtn.innerHTML === 'Assortire') {
    let number = Math.floor(Math.random()*Poesia.length);
    poemAuthor.innerHTML = Poesia[number].name;
    poem.innerHTML = Poesia[number].poem;
    poemImage.src = Poesia[number].imgSource;
    poemImage.height = Poesia[number].imgHeight;
    poemImage.width = Poesia[number].imgWidth;
  }
//sort poems in Portuguese
  else if (instruction.innerHTML === 'Clique abaixo para sortear um poema:') {
    let number = Math.floor(Math.random()*Poemas.length);
    poemAuthor.innerHTML = Poemas[number].name;
    poem.innerHTML = Poemas[number].poem;
    poemImage.src = Poemas[number].imgSource;
    poemImage.height = Poemas[number].imgHeight;
    poemImage.width = Poemas[number].imgWidth;
  }
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
//Change the language:
englishBtn.addEventListener('click', englishSite);
frenchBtn.addEventListener('click', frenchSite);
spanishBtn.addEventListener('click', spanishSite);
germanBtn.addEventListener('click', germanSite);
italianBtn.addEventListener('click', italianSite);
portugueseBtn.addEventListener('click', portugueseSite);

function englishSite (){
  sortBtn.innerHTML = 'Sort';
  instruction.innerHTML = 'Click the button to sort a poem:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
  poemImage.height = 372;
  poemImage.width = 672;
}
function frenchSite (){
  sortBtn.innerHTML = 'Trier';
  instruction.innerHTML = 'Cliquez sur le bouton pour trier un poème:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg';
  poemImage.height = 620;
  poemImage.width = 780;
}
function spanishSite (){
  sortBtn.innerHTML = 'Sortear';
  instruction.innerHTML = 'Clica al botón para sortear un poema:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'https://ep00.epimg.net/cultura/imagenes/2016/07/06/actualidad/1467838131_406594_1467838290_noticia_normal.jpg';
  poemImage.height = 380;
  poemImage.width = 490;
}
function germanSite (){
  sortBtn.innerHTML = 'Sortieren';
  instruction.innerHTML = 'Klicken Sie hier, um ein Gedicht zu sortieren:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'https://upload.wikimedia.org/wikipedia/commons/9/93/Delacroix_Faust_1.jpg';
  poemImage.height = 555;
  poemImage.width = 375;
}
function italianSite (){
  sortBtn.innerHTML = 'Assortire';
  instruction.innerHTML = 'Fare clic sul pulsante per ordinare una poesia:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'http://blog.graphe.it/wp-content/uploads/2016/10/PortaInfernoDante.jpg';
  poemImage.height = 351;
  poemImage.width = 620;
}
function portugueseSite (){
  sortBtn.innerHTML = 'Sortear';
  instruction.innerHTML = 'Clique abaixo para sortear um poema:';
  poemAuthor.innerHTML = '';
  poem.innerHTML = '';
  poemImage.src = 'https://www.jornaltornado.pt/wp-content/uploads/2018/02/Recriar-Os-Lusiadas-em-teatro-animado-900x506.jpg';
  poemImage.height = 378;
  poemImage.width = 675;
}
/*

SOURCES:

Poetry Foundation
poets.org
frenchPoems-francaise.fr
unjourunpoeme.fr
poesi.as
poemas-del-alma.com
culturacolectiva.com
deutschelyrik.de
Modo de usar e co
Escamandro

*/
//English poems array:
const englishPoems = [
  {
    name: '<strong>William Shakespeare</strong>',
    imgSource: 'https://cdn.pensador.com/img/authors/wi/ll/william-shakespeare-2-l.jpg',
    imgWidth: 250,
    imgHeight: 250,
    poem: 'Come away, come away, death, <br>And in sad cypress let me be laid.<br>\
Fly away, fly away, breath\; <br>I am slain by a fair cruel maid. <br>\
My shroud of white, stuck all with yew, <br>O, prepare it! <br>\
My part of death, no one so true <br>Did share it. <br><br>\
Not a flower, not a flower sweet, <br>On my black coffin let there be strown. <br>\
Not a friend, not a friend greet <br>My poor corpse, where my bones shall be thrown. <br>\
A thousand thousand sighs to save, <br>Lay me, O, where <br>\
Sad true lover never find my grave, <br>To weep there!'
  },
  {
    name: '<strong>bp Nichol</strong>',
    imgSource: 'https://www.poetryinvoice.com/sites/default/files/images/authors/bp-nichol.jpg',
    imgWidth: 250,
    imgHeight: 250,
    poem: 'of those saints we know the listing follows<br>saint orm married saint rain<br>\
gave birth to saint iff and saint ave<br>this is the oldest family<br>\
saint iff married saint rive<br>gave birth to saint reat<br>\
who married saint agnes<br>gave birth to saint rand<br>\
saint ave married saint raits<br>gave birth to saint ranglehold<br>\
who did not marry<br>of the other families<br>\
these we mention<br>saint ill married saint ove<br>\
gave birth to saint and & saint rike<br>saint and did not marry<br>\
saint rike married saint ain<br>gave birth to their son<br>\
the nameless one<br>saint aggers wife is now forgotten<br>\
gave birth to saint ump & saint rap<br>gave birth to noone<br>\
dying in the fire reat had set<br><br>(from Martyrology 1)<br>'
  },
  {
    name: '<strong>E.E. Cummings</strong>',
    imgSource: 'https://2.bp.blogspot.com/--af-ZtkuKOQ/Wq-20a3gTZI/AAAAAAAATeI/LZhHTJAuz3EXGMooR8bAs_fFKzi8z2t8wCLcBGAs/s1600/eecummings.jpg',
    imgWidth: 240,
    imgHeight: 150,
    poem: 'i carry your heart with me (i carry it in<br>\
my heart) i am never without it (anywhere<br>\
i go you go, my dear; and whatever is done<br>\
by only me is your doing, my darling)<br>\
\ i fear<br>\
no fate (for you are my fate, my sweet) i want<br>\
no world (for beautiful you are my world, my true)<br>\
and it’s you are whatever a moon has always meant<br>\
and whatever a sun will always sing is you<br>\
<br>\
here is the deepest secret nobody knows<br>\
(here is the root of the root and the bud of the bud<br>\
and the sky of the sky of a tree called life; which grows<br>\
higher than soul can hope or mind can hide)<br>\
and this is the wonder that\'s keeping the stars apart<br>\
<br>\
i carry your heart (i carry it in my heart)<br>'
  },
  {
    name: '<strong>Edgar Allan Poe</strong>',
    imgSource: 'https://www.telegraph.co.uk/content/dam/books/2016/04/19/edgardallanpoe_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450',
    imgWidth: 270,
    imgHeight: 175,
    poem: '<strong>Dream-Land</strong><br><br>By a route obscure and lonely,<br />\
  Haunted by ill angels only,<br /> \
  Where an Eidolon, named NIGHT,<br />\
  On a black throne reigns upright,<br />\
  I have reached these lands but newly<br />\
  From an ultimate dim Thule<br />\
  From a wild weird clime that lieth, sublime,<br />\
  Out of SPACE -- out of TIME.<br /><br />\
\
  Bottomless vales and boundless floods,<br />\
  And chasms, and caves, and Titan woods,<br />\
  With forms that no man can discover<br />\
  For the dews that drip all over;<br />\
  Mountains toppling evermore<br />\
  Into seas without a shore;<br />\
  Seas that restlessly aspire,<br />\
  Surging, unto skies of fire;<br />\
  Lakes that endlessly outspread<br />\
  Their lone waters -- lone and dead, --<br />\
  Their still waters -- still and chilly<br />\
  With the snows of the lolling lily.<br /><br />\
\
  By the lakes that thus outspread<br />\
  Their lone waters, lone and dead, --<br />\
  Their sad waters, sad and chilly<br />\
  With the snows of the lolling lily, --<br />\
  By the mountains -- near the river<br />\
  Murmuring lowly, murmuring ever, --<br />\
  By the grey woods, -- by the swamp<br />\
  Where the toad and the newt encamp, --<br />\
  By the dismal tarns and pools<br />\
  Where dwell the Ghouls, --<br />\
  By each spot the most unholy --<br />\
  In each nook most melancholy, --<br />\
  There the traveller meets aghast<br />\
  Sheeted Memories of the Past --<br />\
  Shrouded forms that start and sigh<br />\
  As they pass the wanderer by --<br />\
  White-robed forms of friends long given,<br />\
  In agony, to the Earth -- and Heaven.<br /><br />\
  \
  For the heart whose woes are legion<br />\
  \'Tis a peaceful, soothing region --<br />\
  For the spirit that walks in shadow<br />\
  \'Tis -- oh \'tis an Eldorado!<br />\
  But the traveller, travelling through it,<br />\
  May not -- dare not openly view it;<br />\
  Never its mysteries are exposed<br />\
  To the weak human eye unclosed;<br />\
  So wills its King, who hath forbid<br />\
  The uplifting of the fringed lid;<br />\
  And thus the sad Soul that here passes<br />\
  Beholds it but through darkened glasses.<br /><br />\
  \
  By a route obscure and lonely,<br />\
  Haunted by ill angels only, <br />\
  Where an Eidolon, named NIGHT,<br />\
  On a black throne reigns upright,<br />\
  I have wandered home but newly<br />\
  From this ultimate dim Thule.<br />'
  },
  {
    name: '<strong>Adrienne Rich</strong>',
    imgSource: 'http://static.poetryfoundation.org/o/harriet/2012/04/adrienne-rich.jpg',
    imgWidth: 324,
    imgHeight: 216,
    poem: '<strong>What kinds of times are these?</strong><br><br>\
There\'s a place between two stands of trees where the grass grows uphill<br>\
and the old revolutionary road breaks off into shadows<br>\
near a meeting-house abandoned by the persecuted<br>\
who disappeared into those shadows<br><br>\
I\'ve walked there picking mushrooms at the edge of dread, but don\'t be fooled<br>\
this isn\'t a Russian poem, this is not somewhere else but here,<br>\
our country moving closer to its own truth and dread,<br>\
its own ways of making people disappear<br>'
  },
  { 
    name: '<strong>W.B. Yeats</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg/220px-William_Butler_Yeats_by_George_Charles_Beresford.jpg',
    imgWidth: 220,
    imgHeight: 308,
    poem: '<strong>Before The World Was Made</strong><br><br>\
    If I make the lashes dark<br>And the eyes more bright\
And the lips more scarlet,<br>Or ask if all be right<br>\
From mirror after mirror,<br>No vanity\'s displayed:<br>\
I\'m looking for the face I had<br>Before the world was made.<br><br>\
What if I look upon a man<br>As though on my beloved,<br>\
And my blood be cold the while<br>And my heart unmoved?<br>\
Why should he think me cruel<br>Or that he is betrayed?<br>\
I\'d have him love the thing that was<br>Before the world was made'
  },
  {
    name: '<strong>Robert Frost</strong>',
    imgSource: 'https://media.poetryfoundation.org/m/image/15024/robert-frost-hires-cropped.jpg',
    imgWidth: 294,
    imgHeight: 199,
    poem: '<strong>The Road not Taken</strong><br><br>\
Two roads diverged in a yellow wood,<br>\
And sorry I could not travel both<br>\
And be one traveler, long I stood<br>\
And looked down one as far as I could<br>\
To where it bent in the undergrowth;<br><br>\
Then took the other, as just as fair,<br>\
And having perhaps the better claim,<br>\
Because it was grassy and wanted wear;<br>\
Though as for that the passing there<br>\
Had worn them really about the same,<br><br>\
And both that morning equally lay<br>\
In leaves no step had trodden black.<br>\
Oh, I kept the first for another day!<br>\
Yet knowing how way leads on to way,<br>\
I doubted if I should ever come back.<br><br>\
I shall be telling this with a sigh<br>\
Somewhere ages and ages hence:<br>\
Two roads diverged in a wood, and I—<br>\
I took the one less traveled by,<br>\
And that has made all the difference.'
  },
  {//number eight. Add William Wordsworth, Emily Dickinson,
    name: '<strong>John Keats</strong>',
    imgSource: 'https://media.poetryfoundation.org/m/image/17209/John_Keats_by_William_Hilton.jpg',
    imgWidth: 324,
    imgHeight: 216,
    poem: '<strong>To Autumn</strong><br><br>\
    Season of mists and mellow fruitfulness,<br>\
   Close bosom-friend of the maturing sun;<br>\
Conspiring with him how to load and bless<br>\
   With fruit the vines that round the thatch-eves run;<br>\
To bend with apples the moss\'d cottage-trees,<br>\
   And fill all fruit with ripeness to the core;<br>\
      To swell the gourd, and plump the hazel shells<br>\
   With a sweet kernel; to set budding more,<br>\
And still more, later flowers for the bees,<br>\
Until they think warm days will never cease,<br>\
      For summer has o\'er-brimm\'d their clammy cells.<br><br>\
Who hath not seen thee oft amid thy store?<br>\
   Sometimes whoever seeks abroad may find<br>\
Thee sitting careless on a granary floor,<br>\
   Thy hair soft-lifted by the winnowing wind;<br>\
Or on a half-reap\'d furrow sound asleep,<br>\
   Drows\'d with the fume of poppies, while thy hook<br>\
      Spares the next swath and all its twined flowers:<br>\
And sometimes like a gleaner thou dost keep<br>\
   Steady thy laden head across a brook;<br>\
   Or by a cyder-press, with patient look,<br>\
      Thou watchest the last oozings hours by hours.<br><br>\
Where are the songs of spring? Ay, Where are they?<br>\
   Think not of them, thou hast thy music too,—<br>\
While barred clouds bloom the soft-dying day,<br>\
   And touch the stubble-plains with rosy hue;<br>\
Then in a wailful choir the small gnats mourn<br>\
   Among the river sallows, borne aloft<br>\
      Or sinking as the light wind lives or dies;<br>\
And full-grown lambs loud bleat from hilly bourn;<br>\
   Hedge-crickets sing; and now with treble soft<br>\
   The red-breast whistles from a garden-croft;<br>\
      And gathering swallows twitter in the skies.'
  },
  {
    name: '<strong>Emily Dickinson</strong>',
    imgSource: 'https://media.poetryfoundation.org/m/image/15913/emily-dickinson-hires-cropped.jpg',
    imgWidth: 324,
    imgHeight: 216,
    poem: '<strong>"Hope" is the thing with feathers</strong><br><br>\
“Hope” is the thing with feathers -<br>\
That perches in the soul -<br>\
And sings the tune without the words -<br>\
And never stops - at all -<br><br>\
And sweetest - in the Gale - is heard -<br>\
And sore must be the storm -<br>\
That could abash the little Bird<br>\
That kept so many warm -<br><br>\
I’ve heard it in the chillest land -<br>\
And on the strangest Sea -<br>\
Yet - never - in Extremity,<br>\
It asked a crumb - of me.'
  },
  {
    name: '<strong>Bernadette Mayer</strong>',
    imgSource: 'http://writing.upenn.edu/epc/authors/mayer/hunger.jpg',
    imgWidth: 198,
    imgHeight: 250,
    poem: '<strong>Windrowing</strong><br><br>\
abide with me<br>\
don’t ever abide<br>\
gimme anytime a pile<br>\
of leaf-hay across<br>\
the field underneath<br>\
the bright new blue<br>\
tractor pulling the tedder<br>\
which is the waffler or fluffer'
  },
  /*
  {
    name: '<strong></strong>',
    imgSource: '',
    imgWidth: ,
    imgHeight: ,
    poem: '<strong></strong>'
  },  
  */
]

//French poems array:
//////////////
/////////////

const frenchPoems = [
  {
    name: '<strong>François Villon</strong>',
    imgSource: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxMzA0OTEyMzk3/francois-villon-38551-1-402.jpg',
    imgWidth: 250,
    imgHeight: 250,
    poem: 'Frères humains qui après nous vivez<br>\
N\'ayez les cœurs contre nous endurcis,<br>\
Car, se pitié de nous pauvres avez,<br>\
Dieu en aura plus tost de vous merciz.<br>\
Vous nous voyez cy attachez cinq, six<br>\
Quant de la chair, que trop avons nourrie,<br>\
Elle est pieça devoree et pourrie,<br>\
Et nous les os, devenons cendre et pouldre.<br>\
De nostre mal personne ne s\'en rie :<br>\
Mais priez Dieu que tous nous vueille absouldre!<br>'
  },
  {
    name: '<strong>Jacques Brel</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jacques_Brel_1963.jpg/220px-Jacques_Brel_1963.jpg',
    imgWidth: 220,
    imgHeight: 323,
    poem: '<strong>A mon dernier repas</strong><br>\
<br>\
Je veux voir mes voisins<br>\
Et puis quelques Chinois<br>\
En guise de cousins<br>\
Et je veux qu\'on y boive<br>\
En plus du vin de messe<br>\
De ce vin si joli<br>\
Qu\'on buvait en Arbois<br>'
  },
  {
    name: '<strong>Aimé Césaire</strong>',
    imgSource: 'https://images.gr-assets.com/authors/1288990863p5/49591.jpg',
    imgWidth: 250,
    imgHeight: 250,
    poem: '<strong>entre autres massacres</strong><br>\
<br>\
de toutes leurs forces \
le soleil et la lune s’entrechoquent/les \
étoiles tombent comme des témoins trop mûrs/et \
comme une portée de souris grises//ne crains \
rien apprête tes grosses eaux/qui si bien emportent \
la berge des miroirs//ils ont mis de la boue sur mes yeux/et \
vois je vois terriblement je vois/de toutes les montagnes de \
toutes les îles/il ne reste plus rien que les quelques mauvais chicots/de l’impenitente salive de la mer\
<br>\
<br>"Soleil cou coupé" (1948)'
  },
  {
    name: '<strong>Arthur Rimbaud</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rimbaud.PNG/226px-Rimbaud.PNG',
    imgWidth: 250,
    imgHeight: 250,
    poem: '<strong>Ophélie</strong><br><br>\
I<br>\
<br>\
Sur l\'onde calme et noire où dorment les étoiles<br>\
La blanche Ophélia flotte comme un grand lys,<br>\
Flotte très lentement, couchée en ses longs voiles...<br>\
- On entend dans les bois lointains des hallalis.<br>\
<br>\
Voici plus de mille ans que la triste Ophélie<br>\
Passe, fantôme blanc, sur le long fleuve noir.<br>\
Voici plus de mille ans que sa douce folie<br>\
Murmure sa romance à la brise du soir.<br>\
<br>\
Le vent baise ses seins et déploie en corolle<br>\
Ses grands voiles bercés mollement par les eaux ;<br>\
Les saules frissonnants pleurent sur son épaule,<br>\
Sur son grand front rêveur s\'inclinent les roseaux.<br>\
<br>\
Les nénuphars froissés soupirent autour d\'elle ;<br>\
Elle éveille parfois, dans un aune qui dort,<br>\
Quelque nid, d\'où s\'échappe un petit frisson d\'aile :<br>\
- Un chant mystérieux tombe des astres d\'or.<br>\
<br>\
II<br>\
<br>\
Ô pâle Ophélia ! belle comme la neige !<br>\
Oui tu mourus, enfant, par un fleuve emporté !<br>\
- C\'est que les vents tombant des grands monts de Norwège<br>\
T\'avaient parlé tout bas de l\'âpre liberté ;<br>\
<br>\
C\'est qu\'un souffle, tordant ta grande chevelure,<br>\
A ton esprit rêveur portait d\'étranges bruits ;<br>\
Que ton coeur écoutait le chant de la Nature<br>\
Dans les plaintes de l\'arbre et les soupirs des nuits ;<br>\
<br>\
C\'est que la voix des mers folles, immense râle,<br>\
Brisait ton sein d\'enfant, trop humain et trop doux ;<br>\
C\'est qu\'un matin d\'avril, un beau cavalier pâle,<br>\
Un pauvre fou, s\'assit muet à tes genoux !<br>\
<br>\
Ciel ! Amour ! Liberté ! Quel rêve, ô pauvre Folle !<br>\
Tu te fondais à lui comme une neige au feu :<br>\
Tes grandes visions étranglaient ta parole<br>\
- Et l\'Infini terrible effara ton oeil bleu !<br>\
<br>\
III<br>\
<br>\
- Et le Poète dit qu\'aux rayons des étoiles<br>\
Tu viens chercher, la nuit, les fleurs que tu cueillis ;<br>\
Et qu\'il a vu sur l\'eau, couchée en ses longs voiles,<br>\
La blanche Ophélia flotter, comme un grand lys.'
  },
  {
    name: '<strong>Antoine Wauters</strong>',
    imgSource: 'http://www.literaturenights.eu/uploads/304/a70265ce208eff1ef497ca85903831c5.jpg',
    imgWidth: 220,
    imgHeight: 270,
    poem: 'Tout part d’un coup de sang, d’un<br>appel rouge au corps. D’un besoin<br>\
de passer, d’être passé, traversé sur-le-<br>champ. D’un besoin d’entendre plus<br>\
que de parler. Tout part d’un cri<br>éclair venu d’en bas, babil ou diable,<br>\
dense aux entrailles.'
  },
  { 
    name: '<strong>Charles Baudelaire</strong>',
    imgSource: 'https://almabooks.com/wp-content/uploads/2016/10/Baudelaire-231x300.jpg',
    imgWidth: 231,
    imgHeight: 300,
    poem: '<strong>À une passante</strong><br><br>\
La rue assourdissante autour de moi hurlait.<br>\
Longue, mince, en grand deuil, douleur majestueuse,<br>\
Une femme passa, d\'une main fastueuse<br>\
Soulevant, balançant le feston et l\'ourlet;<br><br>\
Agile et noble, avec sa jambe de statue.<br>\
Moi, je buvais, crispé comme un extravagant,<br>\
Dans son oeil, ciel livide où germe l\'ouragan,<br>\
La douceur qui fascine et le plaisir qui tue.<br><br>\
Un éclair... puis la nuit! - Fugitive beauté<br>\
Dont le regard m\'a fait soudainement renaître,<br>\
Ne te verrai-je plus que dans l\'éternité?<br><br>\
Ailleurs, bien loin d\'ici! trop tard! jamais peut-être!<br>\
Car j\'ignore où tu fuis, tu ne sais où je vais,<br>\
Ô toi que j\'eusse aimée, ô toi qui le savais!'
  },
  { 
    name: '<strong>Paul Valery</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Paul_Val%C3%A9ry_-_photo_Henri_Manuel.jpg/220px-Paul_Val%C3%A9ry_-_photo_Henri_Manuel.jpg',
    imgWidth: 220,
    imgHeight: 322,
    poem: '<strong>Intérieur</strong><br><br>\
Une esclave aux longs yeux chargés de molles chaînes<br>\
Change l’eau de mes fleurs, plonge aux glaces prochaines,<br>\
Au lit mystérieux prodigue ses doigts purs;<br>\
Elle met une femme au milieu de ces murs<br>\
Qui, dans ma rêverie errant avec décence,<br>\
Passe entre mes regards sans briser leur absence,<br>\
Comme passe le verre au travers du soleil,<br>\
Et de la raison pure épargne l’appareil.'
  },
  {
    name: '<strong>Victor Hugo</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg/260px-Victor_Hugo_by_%C3%89tienne_Carjat_1876.jpg',
    imgWidth: 260,
    imgHeight: 340,
    poem: '<strong>Fable ou Histoire</strong><br><br>\
Un jour, maigre et sentant un royal appétit,<br>\
Un singe d’une peau de tigre se vêtit.<br>\
Le tigre avait été méchant ; lui, fut atroce.<br>\
Il avait endossé le droit d’être féroce.<br>\
Il se mit à grincer des dents, criant : Je suis<br>\
Le vainqueur des halliers, le roi sombre des nuits!<br>\
Il s’embusqua, brigand des bois, dans les épines<br>\
Il entassa l’horreur, le meurtre, les rapines,<br>\
Egorgea les passants, dévasta la forêt,<br>\
Fit tout ce qu’avait fait la peau qui le couvrait.<br>\
Il vivait dans un antre, entouré de carnage.<br>\
Chacun, voyant la peau, croyait au personnage.<br>\
Il s’écriait, poussant d’affreux rugissements:<br>\
Regardez, ma caverne est pleine d’ossements;<br>\
Devant moi tout recule et frémit, tout émigre,<br>\
Tout tremble ; admirez-moi, voyez, je suis un tigre!<br>\
Les bêtes l’admiraient, et fuyaient à grands pas.<br>\
Un belluaire vint, le saisit dans ses bras,<br>\
Déchira cette peau comme on déchire un linge,<br>\
Mit à nu ce vainqueur, et dit : Tu n’es qu’un singe!'
  },
  {
    name: '<strong>Anne Marie Albiach</strong>',
    imgSource: 'https://jacket2.org/sites/jacket2.org/files/commentary-images/Albiach-Jan-71.jpg',
    imgWidth: 224,
    imgHeight: 300,
    poem: '<strong>Flammigère [I]</strong><br><br>\
La taille du sexe<br>dans l’indécision du genre<br>\
et les singularités du pluriel<br>nous demeure<br>\
à nous étrangers<br>assignés à cette blessure<br><br>\
cette quête rigide<br><br>\
quelle que soit l’équation<br>résultante inhérée à<br>\
l’énigme<br>la chair rejoint le sang<br>\
et s’y confond<br>à la chaleur<br>\
existe<br>dans la précision de l’absence<br>\
Espace alourdit à noir<br>lenteur de caresse<br>\
simultanéité charnelle<br>au point d’espace où se confrontent<br>\
nos futurs assimilables<br>et la jointure mâle qui nous unit<br>\
l’un à l’autre<br>dans “l’énigme chaleureuse de la langue”<br>\
cet envers du réel<br>où<br>\
Ortie femelle<br><br>\
la stérilité pince l’entraille verte<br>à immobile<br>\
à impavide<br>à netteté des cicatrices<br>\
et mort renouvelée des lames<br>couteaux inhérents dans leur lumière<br><br>\
il se lève     il se rabaisse<br>\
il se lève     il se replie    en noir     tel en l’œuf d’une<br>\
plage chatoyante de chaleur<br>\
et lové au sable il renaît dans les fibres stériles de<br>\
l’androgyne trinitaire'
  },
  {//number ten. Add Mallarmé, Jean Cocteau, Antonin Artaud
    name: '<strong>Christine de Pizan</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Christine_de_Pisan_-_cathedra.jpg/220px-Christine_de_Pisan_-_cathedra.jpg',
    imgWidth: 220,
    imgHeight: 237,
    poem: '<strong>Mon vrai amour</strong><br><br>\
Je vous prie,<br>\
mon doux amour,<br>\
Mon bien, ma paix, ma vigueur,<br>\
Ma ressource,<br>\
Ce que j\'aime le mieux,<br>\
Qu\'en tous lieux<br>\
Gai, joli, joyeux toujours,<br>\
Sans réserve,<br>\
Soyez et plein d\'allégresse.<br><br>\
Ami, médecin de mes maux,<br>\
Me faites vivre et sans déplaisir,<br>\
Dont on ne pourrait<br>\
Estimer ni penser les grands biens<br>\
Car sans cesse<br>\
Votre bon coeur les attire,<br>\
Où ont refuge<br>\
Tout ceux qui sont oppressés.'
  },
]
//Spanish poems array:
//////////////
/////////////

const Poesias = [
  {
    name: '<strong>Pablo Neruda</strong>',
    imgSource: 'http://www.agenciabalcells.com/fileadmin/_processed_/csm_Neruda__Pablo_cd1395ffd0.jpg',
    imgWidth: 300,
    imgHeight: 402,
    poem: 'NECESITO del mar porque me enseña:<br>\
no sé si aprendo música o conciencia:<br>\
no sé si es ola sola o ser profundo<br>\
o sólo ronca voz o deslumbrante<br>\
suposición de peces y navios.<br>\
El hecho es que hasta cuando estoy dormido<br>\
de algún modo magnético circulo<br>\
en la universidad del oleaje.<br>\
No son sólo las conchas trituradas<br>\
como si algún planeta tembloroso<br>\
participara paulatina muerte,<br>\
no, del fragmento reconstruyo el día,<br>\
de una racha de sal la estalactita<br>\
y de una cucharada el dios inmenso.<br>\
<br>\
Lo que antes me enseñó lo guardo! Es aire,<br>\
incesante viento, agua y arena.<br>\
<br>\
Parece poco para el hombre joven<br>\
que aquí llegó a vivir con sus incendios,<br>\
y sin embargo el pulso que subía<br>\
y bajaba a su abismo,<br>\
el frío del azul que crepitaba,<br>\
el desmoronamiento de la estrella,<br>\
el tierno desplegarse de la ola<br>\
despilfarrando nieve con la espuma,<br>\
el poder quieto, allí, determinado<br>\
como un trono de piedra en lo profundo,<br>\
substituyó el recinto en que crecían<br>\
tristeza terca, amontonando olvido,<br>\
y cambió bruscamente mi existencia:<br>\
di mi adhesión al puro movimiento.<br>'
  },
  {
    name: '<strong>Ajo</strong>',
    imgSource: 'http://www.culturasur.com/typo3temp/pics/e12e321467.jpg',
    imgWidth: 425,
    imgHeight: 268,
    poem: '<strong>Pseudobiografía</strong><br><br>\
Si quiero que nieve pongo<br>\
una lavadora de ropa blanca,<br>\
si quiero que llueva<br>\
la tiendo de ropa gris.<br>\
No es casualidad que todos<br>\
los yogures de fresa<br>\
caduquen en mi cumpleaños.<br>\
Fumo mucho para olvidarlo todo,<br>\
no consigo toser siquiera.'
  },{
    name: '<strong>Blanca Varela</strong>',
    imgSource: 'https://deadorkicking.com/wp-content/uploads/featured-img/b/blanca-varela-300x224.jpg',
    imgWidth: 300,
    imgHeight: 224,
    poem: '<strong>Nadie nos dice cómo</strong><br>\
<br>\
Nadie nos dice cómo<br>\
voltear la cara contra la pared<br>\
y<br>morirnos sencillamente<br>así como lo hicieron el gato<br>\
o el perro de la casa<br>o el elefante<br>que caminó en pos de su agonía<br>\
como quien va<br>a una impostergable ceremonia<br>batiendo orejas<br>\
al compás<br>del cadencioso resuello<br>de su trompa<br>\
sólo en el reino animal<br>hay ejemplares de tal<br>comportamiento<br>\
cambiar el paso<br>acercarse<br>y oler lo ya vivido<br>\
y dar la vuelta<br>sencillamente<br>dar la vuelta'
  },{
  name: '<strong>Cecilia Pavón</strong>',
  imgSource: 'http://2.bp.blogspot.com/_5wUPFCGo68w/TTWbRV-RVzI/AAAAAAAABSU/_6ObuHfL_n4/s1600/pavon.jpg',
  imgWidth: 280,
  imgHeight: 425,
  poem: '<strong>Bicicleta robada secuestrada</strong><br><br>\
Quizás la revolución está en sus cuerpos y yo no la vea<br><br>\
Esta es la historia de una bicicleta robada<br>\
Sólo sé que cerca del canal está el dueño<br>\
o la dueña<br>\
Cerca del canal,<br>\
cerca de un canal<br>\
Pero he olvidado el nombre de las calles<br><br>\
Una madrugada salimos de beber de un bar revolucionario<br>\
y mi bicicleta estaba atada accidentalmente a otra,<br>\
una cadena se enredaba por entre los cables del freno y<br>\
la mantenía<br>sujeta a un poste<br>\
Todos se iban<br>en taxis,<br>\
en colectivos,<br>en autos que estaban llenos<br>\
y a mi bicicleta, yo no la podía sacar<br>tuve que dejarla ahí<br><br>\
Si alguien la encuentra<br>rompe el candado<br>\
y se la lleva<br>pero de todas formas era robada,<br>\
comprada a muy bajo precio<br>en el mercado de pulgas<br>\
o en un patio de atrás sospechoso<br>a una mujer inmigrante<br>\
a quien que no se le entendia muy bien lo que decía,<br>pero de todos modos decía:<br>\
“esta ser bicicleta mia vieja”<br>“esta no ser robô”<br><br>\
Son las tres de la tarde de un día de verano con viento<br>\
Los árboles que hasta ahora había visto secos<br>se mueven demasiado cargados<br>\
de hojas rebosantes de vida<br>En lugar de nieve, hebras de pólen alargadas que vuelan<br>\
como insectos<br>Alguien ató su bicicleta accidentalmente a la mia<br>\
no sé si es un accidente o es un robô<br>no sé si es un robo o es la verdadera dueña<br>\
que sé que existe porque un día se me acerco en un parque<br><br>\
Yo no soy la verdadera dueña, y ola compré<br>por ese precio tan bajo<br>\
en ese patio<br>de atrás<br>\
o mercado de pulgas<br>a una mujer con acento extranjero<br>\
de pelo largo y jeans gastados<br>que decía<br>\
“no peligro, esta ser bicicleta mía pasado”<br><br>\
Luego de conocer la felicidade de la bicicleta<br>estar sin ella es como vivir sin alas<br><br>\
Pasaban los días y la bicicleta seguía ahí en el Puente<br>\
el dueño no la venía a desatar, era verano, volava el polen<br>\
manchado de sol<br>yo pedía bebidas que me hacían mal<br>\
como espresso<br>café<br>\
negro<br>sin leche<br>\
miraba la bicicleta desde el otro lado del Puente, y lloraba<br><br>\
La bicicleta rosada atada<br>a través del cable del freno<br>\
por error<br>a la bicicleta celeste, oxidada, de un desconocido<br><br>\
El secuestro de la bicicleta robada sucede<br>durante la única semana de sol del año<br><br>\
Las grandes cosas<br>las cosas raras<br>\
sucedem en momentos de decisión o de locura<br>por ejemplo:<br>\
dejar su país,<br>cortar el cable del freno<br>\
con una pinza para liberar a la bicicleta,<br>disfrutar,<br>\
gozar<br>con el crimen,<br>\
romperle la rueda a la otra bicicleta o<br>tirarle ácido al asiento<br>\
Algo así.<br><br>\
La bicicleta era mi única fuente de diversion<br>\
Ahora que está llegando el verano<br>\
y hay pocas horas de verdadera noche<br>\
la bicicleta era mi mejor,<br>mi única amiga<br>\
Es tonto decirlo<br>es hasta tan simple<br>\
pero con la bicicleta paseando por la ciudad<br>me sentía libre<br>\
la ciudad era como un paisaje<br>que yo podía ver gratis<br>\
pasando a toda velocidad<br>por la ventana de un tren inter-city<br>\
sólo que la ventana no tenía marcos<br>era una ventana sin límite<br>\
y rosada<br>una ventana con forma de bicicleta rosada<br>\
robada<br>comprada a una chica<br>que decía “no ser peligro, no robado, mía antes bicicleta”<br><br>\
Yo sabía que era robada<br>igual la compré<br>\
Un día en un parque se acercó<br>la verdadera dueña<br>\
una mujer de unos treinta años<br>y dijo que esa sería su bicicleta<br>\
pero yo la defendí con uñas y dientes<br>inventé una historia extrañísima<br>\
complicada<br>con muchas etapas<br>\
de cómo esa bicicleta había<br>venido de Paris en barco<br>\
en correo, desarmada<br>en una caja de carton<br>\
enviada como obsequio por un ex-amante<br><br>\
¿Si me quitan la bicicleta<br>qué más me queda acá?<br>\
Sí,<br>están los Cafés Revolucionarios<br>\
donde se discute el futuro del mundo<br>Pero nada,<br>\
nada<br>puede compararse<br>\
con ella.'
},{
  name: '<strong>Violeta Parra</strong>',
  imgSource: 'http://www.eldesconcierto.cl/wp-content/uploads/2017/10/violeta-parra-810x540.jpg',
  imgWidth: 405,
  imgHeight: 270,
  poem: '<strong>Maldigo del alto cielo</strong><br><br>\
Maldigo del alto cielo<br>La estrella con su reflejo<br>\
Maldigo los azulejos<br>Destellos del arroyuelo<br>\
Maldigo del bajo suelo<br>La piedra con su contorno<br>\
Maldigo el fuego del horno<br>Porque mi alma está de luto<br>\
Maldigo los estatutos<br>Del tiempo con sus bochornos<br>\
Cuánto será mi dolor.<br><br>\
Maldigo la cordillera<br>De los Andes y de la costa<br>\
Maldigo señor la angosta<br>Y larga faja de tierra<br>\
También la paz y la guerra<br>Lo franco y lo veleidoso<br>\
Maldigo lo perfumoso<br>Porque mi anhelo está muerto<br>\
Maldigo todo lo cierto<br>Y lo falso con lo dudoso<br>\
Cuánto será mi dolor.<br><br>\
Maldigo la primavera<br>Con sus jardines en flor<br>\
Y del otoño el color<br>Yo lo maldigo de veras<br>\
A la nube pasajera<br>La maldigo tanto y tanto<br>\
Porque me asiste un quebranto<br>Maldigo el invierno entero<br>\
Con el verano embustero<br>Maldigo profano y santo<br>\
Cuánto será mi dolor.<br><br>\
Maldigo a la solitaria<br>Figura de la bandera<br>\
Maldigo cualquier emblema<br>La venus y la araucaria<br>\
El trino de la canaria<br>El cosmo y sus planetas<br>\
La tierra y todas sus grietas<br>Porque me aqueja un pesar<br>\
Maldigo del ancho mar<br>Sus puertos y sus caletas<br>\
Cuánto será mi dolor.<br><br>\
Maldigo luna y paisaje<br>Los valles y los desiertos<br>\
Maldigo muerto por muerto<br>Y al vivo de rey a paje<br>\
Al ave con su plumaje<br>Yo la maldigo a porfia<br>\
Las aulas , las sacrsitias<br>Porque me aflije un dolor<br>\
Maldigo el vocablo amor<br>Con toda su porquería<br>\
Cuánto será mi dolor.<br><br>\
Maldigo por fin lo blanco<br>Lo negro con lo amarillo<br>\
Obispos y monaguillos<br>Ministros y predicantes<br>\
Yo los maldigo llorando<br>Lo libre y lo prisionero<br>\
Lo dulce y lo pendenciero<br>Le pongo mi maldición<br>\
En griego y español<br>Por culpa de un traicionero<br>\
Cuánto será mi dolor.'
  },
  { 
    name: '<strong>Jorge Luis Borges</strong>',
    imgSource: 'https://images.gr-assets.com/authors/1537559279p5/500.jpg',
    imgWidth: 200,
    imgHeight: 202,
    poem: 'Ese alto caballero americano<br>\
cierra el volumen de Montaigne y sale<br>\
en busca de otro goce que no vale<br>\
menos, la tarde que ya exalta el llano.<br><br>\
Hacia el hondo poniente y su declive,<br>\
hacia el confín que ese poniente dora,<br>\
camina por los campos como ahora<br>\
por la memoria de quien esto escribe.<br><br>\
Piensa: Leí los libros esenciales<br>\
y otros compuse que el oscuro olvido<br>\
no ha de borrar. Un dios me ha concedido<br><br>\
lo que es dado saber a los mortales.<br>\
Por todo el continente anda mi nombre;<br>\
no he vivido. Quisiera ser otro hombre.'
  },
  {
  	name: '<strong>Federico Garcia Lorca</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Lorca_%281914%29.jpg/220px-Lorca_%281914%29.jpg',
    imgWidth: 220,
    imgHeight: 242,
  	poem: '<strong>El poeta habla por teléfono con el amor</strong><br><br>\
Tu voz regó la duna de mi pecho<br>\
en la dulce cabina de madera.<br>\
Por el sur de mis pies fue primavera<br>\
y al norte de mi frente flor de helecho.<br><br>\
Pino de luz por el espacio estrecho<br>\
cantó sin alborada y sementera<br>\
y mi llanto prendió por vez primera<br>\
coronas de esperanza por el techo.<br><br>\
Dulce y lejana voz por mí vertida.<br>\
Dulce y lejana voz por mí gustada.<br>\
Lejana y dulce voz amortecida.<br><br>\
Lejana como oscura corza herida.<br>\
Dulce como un sollozo en la nevada.<br>\
¡Lejana y dulce en tuétano metida!'
  },
  {
  	name: '<strong>Octavio Paz</strong>',
    imgSource: 'https://res.cloudinary.com/ndbooks/image/upload/w_500,f_auto,q_80,dpr_auto/Paz_Octavio600.jpg',
    imgWidth: 250,
    imgHeight: 250,
  	poem: '<strong>La Calle</strong><br><br>\
Es una calle larga y silenciosa.<br>\
Ando en tinieblas y tropiezo y caigo<br>\
y me levanto y piso con pies ciegos<br>\
las piedras mudas y las hojas secas<br>\
y alguien detrás de mí también las pisa:<br>\
si me detengo, se detiene;<br>\
si corro, corre. Vuelvo el rostro: nadie.<br>\
Todo está oscuro y sin salida,<br>\
y doy vueltas en esquinas<br>\
que dan siempre a la calle<br>\
donde nadie me espera ni me sigue,<br>\
donde yo sigo a un hombre que tropieza<br>\
y se levanta y dice al verme: nadie.'
  },
  { 
  	name: '<strong>Juana Inés de la Cruz</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sor_Juana_In%C3%A9s_de_la_Cruz_%28Juan_de_Miranda%29.jpg/220px-Sor_Juana_In%C3%A9s_de_la_Cruz_%28Juan_de_Miranda%29.jpg',
    imgWidth: 220,
    imgHeight: 347,
  	poem: '<strong>Redondillas</strong><br><br>\
Hombres necios que acusáis<br>\
a la mujer sin razón,<br>\
sin ver que sois la ocasión<br>\
de lo mismo que culpáis:<br><br>\
si con ansia sin igual<br>\
solicitáis su desdén,<br>\
¿por qué queréis que obren bien<br>\
si las incitáis al mal?<br><br>\
Cambatís su resistencia<br>\
y luego, con gravedad,<br>\
decís que fue liviandad<br>\
lo que hizo la diligencia.<br><br>\
Parecer quiere el denuedo<br>\
de vuestro parecer loco<br>\
el niño que pone el coco<br>\
y luego le tiene miedo.<br><br>\
Queréis, con presunción necia,<br>\
hallar a la que buscáis,<br>\
para pretendida, Thais,<br>\
y en la posesión, Lucrecia.<br><br>\
¿Qué humor puede ser más raro<br>\
que el que, falto de consejo,<br>\
él mismo empaña el espejo,<br>\
y siente que no esté claro?<br><br>\
Con el favor y desdén<br>\
tenéis condición igual,<br>\
quejándoos, si os tratan mal,<br>\
burlándoos, si os quieren bien.<br><br>\
Siempre tan necios andáis<br>\
que, con desigual nivel,<br>\
a una culpáis por crüel<br>\
y a otra por fácil culpáis.<br><br>\
¿Pues como ha de estar templada<br>\
la que vuestro amor pretende,<br>\
si la que es ingrata, ofende,<br>\
y la que es fácil, enfada?<br><br>\
Mas, entre el enfado y pena<br>\
que vuestro gusto refiere,<br>\
bien haya la que no os quiere<br>\
y quejaos en hora buena.<br><br>\
Dan vuestras amantes penas<br>\
a sus libertades alas,<br>\
y después de hacerlas malas<br>\
las queréis hallar muy buenas.<br><br>\
¿Cuál mayor culpa ha tenido<br>\
en una pasión errada:<br>\
la que cae de rogada,<br>\
o el que ruega de caído?<br><br>\
¿O cuál es más de culpar,<br>\
aunque cualquiera mal haga:<br>\
la que peca por la paga,<br>\
o el que paga por pecar?<br><br>\
Pues ¿para qué os espantáis<br>\
de la culpa que tenéis?<br>\
Queredlas cual las hacéis<br>\
o hacedlas cual las buscáis.<br><br>\
Dejad de solicitar,<br>\
y después, con más razón,<br>\
acusaréis la afición<br>\
de la que os fuere a rogar.<br><br>\
Bien con muchas armas fundo<br>\
que lidia vuestra arrogancia,<br>\
pues en promesa e instancia<br>\
juntáis diablo, carne y mundo.'
  },
  { //number ten. Add Antonio Machado, Lope de Vega
    name: '<strong>Rosario Castellanos</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Rosario_Castellanos.jpg/220px-Rosario_Castellanos.jpg',
    imgWidth: 220,
    imgHeight: 336,
    poem: '<strong>Canción de Cuna</strong><br><br>\
    ¿Es grande el mundo? Es grande. Del tamaño del miedo.<br>\
¿Es largo el tiempo? Es largo. Largo como el olvido.<br>\
¿Es profunda la mar? Pregúntaselo al náufrago.<br><br>\
(El Tentador sonríe. Me acaricia el cabello<br>\
y me dice que duerma.)'
  },
]

//German poems array:
//////////////
/////////////

const Gedichte = [
  {
    name: '<strong>Goethe</strong>',
    imgSource: 'https://images.gr-assets.com/authors/1532614109p5/285217.jpg',
    imgWidth: 200,
    imgHeight: 266,
    poem: '<strong>Glückliche Fahrt</strong><br><br>\
Die Nebel zerreißen, <br>Der Himmel ist helle, <br>\
Und Äolus löset <br>Das ängstliche Band. <br>\
Es säuseln die Winde, <br>Es rührt sich der Schiffer. <br>\
Geschwinde! Geschwinde! <br>Es teilt sich die Welle, <br>\
Es naht sich die Ferne; <br>Schon seh ich das Land!<br>'
  },
  {
    name: '<strong>Bertolt Brecht</strong>',
    imgSource: 'https://usefulstooges.com/wp-content/uploads/2016/10/bertolt-brecht-pic.jpg',
    imgWidth: 353,
    imgHeight: 500,
    poem: '<strong>Die neuen Zeitalter</strong><br>\
<br>\
Die neuen Zeitalter beginnen nicht auf einmal.<br>\
Mein Großvater lebte schon in der neuen Zeit.<br>\
Mein Enkel wird wohl noch in der alten leben.<br>\
<br>\
Das neue Fleisch wird mit den alten Gabeln gegessen.<br>\
<br>\
Die selbstfahrenden Fahrzeuge waren es nicht<br>\
Noch die Tanks.<br>\
Die Flugzeuge über unseren Dächern waren es nicht.<br>\
Noch die Bomber.<br>\
<br>\
Von den neuen Antennen kamen die alten Dummheiten.<br>\
Die Weisheit wurde von Mund zu Mund weitergegeben.<br>'
  },
  {
    name: '<strong>Heinrich Heine</strong>',
    imgSource: 'https://www.kunstkopie.de/kunst/e_palm/heinrich-heine_palm.jpg',
    imgWidth: 327,
    imgHeight: 400,
    poem: '<strong>Vermächtniß</strong><br>\
<br>\
Nun mein Leben geht zu End’,<br>\
Mach’ ich auch mein Testament;<br>\
Christlich will ich drin bedenken<br>\
Meine Feinde mit Geschenken.<br>\
<br>\
Diese würd’gen, tugendfesten<br>\
Widersacher sollen erben<br>\
All mein Siechthum und Verderben,<br>\
Meine sämmtlichen Gebresten.<br>\
<br>\
Ich vermach’ Euch die Coliken,<br>\
Die den Bauch wie Zangen zwicken,<br>\
Harnbeschwerden, die perfiden<br>\
Preußischen Hämorrhoiden.<br>\
<br>\
Meine Krämpfe sollt Ihr haben,<br>\
Speichelfluß und Gliederzucken,<br>\
Knochendarre in dem Rucken,<br>\
Lauter schöne Gottesgaben.<br>\
<br>\
Codizill zu dem Vermächtniß:<br>\
In Vergessenheit versenken<br>\
Soll der Herr Eu’r Angedenken,<br>\
Er vertilge Eu’r Gedächtniß.<br>\
<br>\
[1851]'
  },
  {
    name: '<strong>Matthias Claudius</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/MatthiasClaudius.jpg/170px-MatthiasClaudius.jpg',
    imgWidth: 170,
    imgHeight: 237,
    poem: '<strong>Abendlied</strong><br><br>\
    Der Mond ist aufgegangen,<br>Die goldnen Sternlein prangen<br>\
Am Himmel hell und klar;<br>Der Wald steht schwarz und schweiget,<br>\
Und aus den Wiesen steiget<br>Der weiße Nebel wunderbar.<br><br>\
Wie ist die Welt so stille,<br>Und in der Dämmrung Hülle<br>\
So traulich und so hold!<br>Als eine stille Kammer,<br>\
Wo ihr des Tages Jammer<br>Verschlafen und vergessen sollt.<br><br>\
Seht ihr den Mond dort stehen?<br>Er ist nur halb zu sehen,<br>\
Und ist doch rund und schön!<br>So sind wohl manche Sachen,<br>\
Die wir getrost belachen,<br>Weil unsre Augen sie nicht sehn.<br><br>\
Wir stolze Menschenkinder<br>Sind eitel arme Sünder<br>\
Und wissen gar nicht viel;<br>Wir spinnen Luftgespinste<br>\
Und suchen viele Künste<br>Und kommen weiter von dem Ziel.<br><br>\
Gott, laß uns dein Heil schauen,<br>Auf nichts Vergänglichs trauen,<br>\
Nicht Eitelkeit uns freun!<br>Laß uns einfältig werden<br>\
Und vor dir hier auf Erden<br>Wie Kinder fromm und fröhlich sein!<br><br>\
Wollst endlich sonder Grämen<br>Aus dieser Welt uns nehmen<br>\
Durch einen sanften Tod!<br>Und, wenn du uns genommen,<br>\
Laß uns in Himmel kommen,<br>Du unser Herr und unser Gott!<br><br>\
So legt euch denn, ihr Brüder,<br>In Gottes Namen nieder;<br>\
Kalt ist der Abendhauch.<br>Verschon uns, Gott! mit Strafen,<br>\
Und laß uns ruhig schlafen!<br>\
Und unsern kranken Nachbar auch!'
  }, { //number five:
    name: '<strong>Rainer Maria Rilke</strong>',
    imgSource: 'https://images.gr-assets.com/authors/1493785350p5/7906.jpg',
    imgWidth: 200,
    imgHeight: 236,
    poem: '<strong>Eranna an Sappho</strong><br><br>\
O du wilde weite Werferin:<br>Wie ein Speer bei andern Dingen<br>\
lag ich bei den Meinen. Dein Erklingen<br>warf mich weit. Ich weiß nicht, wo ich bin.<br>\
Mich kann keiner wiederbringen.<br><br>\
Meine Schwestern denken mich und weben,<br>und das Haus ist voll vertrauter Schritte.<br>\
Ich allein bin fern und fortgegeben,<br>und ich zittere wie eine Bitte;<br>\
denn die schöne Göttin in der Mitte<br>\
ihrer Mythen glüht und lebt mein Leben.'
  },
  { 
    name: '<strong>Rose Ausländer</strong>',
    imgSource: 'http://1.bp.blogspot.com/_5wUPFCGo68w/Sl0mqSrElJI/AAAAAAAAA90/BF09_M8eFf0/s320/rose_auslander.jpg2.jpg',
    imgWidth: 220,
    imgHeight: 320,
    poem: '<strong>Noch bist du da</strong><br><br>\
Wirf deine Angst<br>in die Luft<br><br>\
Bald<br>ist deine Zeit um<br>\
bald<br>wächst der Himmel<br>\
unter dem Gras<br>fallen deine Träume<br>\
ins Nirgends<br><br>\
Noch<br>duftet die Nelke<br>\
singt die Drossel<br>noch darfst du lieben<br>\
Worte verschenken<br>noch bist du da<br><br>\
Sei was du bist<br>Gib was du hast'
  },
  { 
    name: '<strong>Herman Hesse</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hermann_Hesse_2.jpg/220px-Hermann_Hesse_2.jpg',
    imgWidth: 220,
    imgHeight: 263,
    poem: '<strong>Kopflos</strong><br><br>\
Man nehm den Deckel nur vom Topfe<br>\
Und sieh, wie froh der Dampf entweicht!<br>\
Wie lebt nach abgeschnittnem Kopfe<br>\
Das schwere Leben sich so leicht!<br>\
Kein Schnupfen mehr, kein Nasentropfen,<br>\
ein Zahnweh und kein Augenbrand<br>\
Noch Stirnkatarrh noch Schläfenklopfen,<br>\
Es ist wie im Schlaraffenland.<br>\
Zwar gibt es ohne Kopf kein Denken,<br>\
Doch ist es darum nicht so schad,<br>\
Man kann mit Wein die Kehle tränken,<br>\
Es ist das beste Gurgelbad.<br>\
Und ach, wie lebt es sich so stille:<br>\
Kein Wort, kein Lärm, kein grelles Licht!<br>\
Und nie mehr sucht man seine Brille<br>\
Und nie mehr macht man ein Gedicht.'
  },
  {
    name: '<strong>Friedrich Schiller</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Friedrich_Schiller_by_Ludovike_Simanowiz.jpg/439px-Friedrich_Schiller_by_Ludovike_Simanowiz.jpg',
    imgWidth: 220,
    imgHeight: 300,
    poem: '<strong>Mädchen aus der Fremde</strong><br><br>\
In einem Tal bei armen Hirten<br>\
Erschien mit jedem jungen Jahr,<br>\
Sobald die ersten Lerchen schwirrten,<br>\
Ein Mädchen, schön und wunderbar.<br><br>\
Sie war nicht in dem Tal geboren,<br>\
Man wußte nicht, woher sie kam,<br>\
Und schnell war ihre Spur verloren,<br>\
Sobald das Mädchen Abschied nahm.<br><br>\
Beseligend war ihre Nähe,<br>\
Und alle Herzen wurden weit,<br>\
Doch eine Würde, eine Höhe<br>\
Entfernte die Vertraulichkeit.<br><br>\
Sie brachte Blumen mit und Früchte,<br>\
Gereift auf einer andern Flur,<br>\
In einem andern Sonnenlichte,<br>\
In einer glücklichern Natur.<br><br>\
Und teilte jedem eine Gabe,<br>\
Dem Früchte, jenem Blumen aus,<br>\
Der Jüngling und der Greis am Stabe,<br>\
Ein jeder ging beschenkt nach Haus.<br><br>\
Willkommen waren alle Gäste,<br>\
Doch nahte sich ein liebend Paar,<br>\
Dem reichte sie der Gaben beste,<br>\
Der Blumen allerschönste dar.'
  },
  { //number nine. Add Günter Grass, Nelly Sachs, Novalis
    name: '<strong>Erich Kästner</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Erich_K%C3%A4stner_1961.jpg',
    imgWidth: 159,
    imgHeight: 217,
    poem: '<strong>Dem revolutionär Jesus zum Geburtstag</strong><br><br>\
Zweitausend Jahre sind es fast,<br>\
seit du die Welt verlassen hast,<br>\
du Opferlamm des Lebens!<br>\
Du gabst den Armen ihren Gott.<br>\
Du littest durch der Reichen Spott.<br>\
Du tatest es vergebens!<br><br>\
Du sahst Gewalt und Polizei.<br>\
Du wolltest alle Menschen frei<br>\
und Frieden auf der Erde.<br>\
Du wusstest, wie das Elend tut<br>\
und wolltest allen Menschen gut,<br>\
damit es schöner werde!<br><br>\
Du warst ein Revolutionär<br>\
und machtest dir das Leben schwer<br>\
mit Schiebern und Gelehrten.<br>\
Du hast die Freiheit stets beschützt<br>\
und doch den Menschen nichts genützt.<br>\
Du kamst an die Verkehrten!<br><br>\
Du kämpftest tapfer gegen sie<br>\
und gegen Staat und Industrie<br>\
und die gesamte Meute.<br>\
Bis man an dir, weil nichts verfing,<br>\
Justizmord, kurzerhand, beging.<br>\
Es war genau wie heute.<br><br>\
Die Menschen wurden nicht gescheit.<br>\
Am wenigsten die Christenheit,<br>\
trotz allem Händefalten.<br>\
Du hattest sie vergeblich lieb.<br>\
Du starbst umsonst.<br>\
Und alles blieb<br>\
beim alten.'
  },
]

//Italian poems array:
//////////////
/////////////

const Poesia = [
  {
    name: '<strong>Dante Alighieri</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Portrait_de_Dante.jpg/220px-Portrait_de_Dante.jpg',
    imgWidth: 220,
    imgHeight: 336,
    poem: '<strong>INFERNO</strong><br>\
<br>\
\         <strong>Dal CANTO I</strong><br>\
<br>\
<br>\
Nel mezzo del cammin di nostra vita<br>\
mi ritrovai per una selva oscura<br>\
ché la diritta via era smarrita. <br>\
<br>\
Ah quanto a dir qual era è cosa dura<br>\
esta selva selvaggia e aspra e forte<br>\
che nel pensier rinova la paura!<br>\
<br>\
Tant\'è amara che poco è più morte;<br>\
ma per trattar del ben ch\'i\' vi trovai,<br>\
dirò de l\'altre cose ch\'i\' v\'ho scorte.<br>\
<br>\
Io non so ben ridir com\'i\' v\'intrai,<br>\
tant\'era pien di sonno a quel punto<br>\
che la verace via abbandonai.<br>\
<br>\
Ma poi ch\'i\' fui al piè d\'un colle giunto,<br>\
là dove terminava quella valle<br>\
che m\'avea di paura il cor compunto,<br>\
<br>\
guardai in alto, e vidi le sue spalle<br>\
vestite già de\' raggi del pianeta<br>\
che mena dritto altrui per ogne calle.<br>\
<br>\
Allor fu la paura un poco queta<br>\
che nel lago del cor m\'era durata<br>\
la notte ch\'i\' passai con tanta pieta.<br>\
<br>\
E come quei che con lena affannata<br>\
uscito fuor del pelago a la riva<br>\
si volge a l\'acqua perigliosa e guata,<br>\
<br>\
così l\'animo mio, ch\'ancor fuggiva,<br>\
si volse a retro a rimirar lo passo<br>\
che non lasciò già mai persona viva.<br>\
<br>\
(...)'
  },
  {
    name: '<strong>Francesco Petrarca</strong>',
    imgSource: 'https://d3d00swyhr67nd.cloudfront.net/w1200h1200/NTIII/NTIII_BLI_355512.jpg',
    imgWidth: 450,
    imgHeight: 600,
    poem: 'S’ amor non è, che dunque è quel ch’ io sento?<br>\
Ma s’egli è amor, per Dio, che cosa e quale?<br>\
Se buona, ond è effetto aspro mortale?<br>\
Se ria, ond’ è si dolce ogni tormento?<br>\
<br>\
S’a mia voglia arado, ond’ è ‘I pianto e ‘I lamento?<br>\
S’a mal mio grado, il lamentar che vale?<br>\
O viva morte, o dilettoso male,<br>\
Come puoi tanto in me s’io nol consento?<br>\
<br>\
E s’io ‘I consento, a gran torto mi doglio.<br>\
Fra sì contrari venti, in frale barca<br>\
Mi trivo in alto mar, senza governo,<br>\
<br>\
Sí lieve di saber, d’error sí carca,<br>\
Ch’ i i’ medesmo non so quel ch’ io mi voglio,<br>\
E tremo a mèzza state, ardemdo il verno.<br>\
<br>\
Soneto XXII, “Il Canzonieri”'
  }, {
    name: '<strong>Giovanni Boccaccio</strong>',
    imgSource: 'https://m.media-amazon.com/images/M/MV5BZjdlZmQwNDItZDVhZi00MzU1LTlhMGMtMDBhZDdlOGZmZWUyXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_UY317_CR20,0,214,317_AL_.jpg',
    imgWidth: 214,
    imgHeight: 317,
    poem: '<strong>Oh come son talora</strong><br><br>\
    Oh come son talora<br>maravigliosi in noi,<br>\
Amor, gl\'incendii tuoi!<br>Con accorciato crin, succinta in gonna,<br>\
innamorata donna<br>seguì del suo fedel l\'orme leggiadre<br>\
fra bellicose squadre.<br>Ma così gran valore<br>\
nelle donne moderne or non si vede,<br>\
che, s\'han maggior bellezza, han minor fede.'
  }, {
    name: '<strong>Pier Paolo Pasolini</strong>',
    imgSource: 'https://m.media-amazon.com/images/M/MV5BMjMyOTk0NjU3OF5BMl5BanBnXkFtZTcwNzMwMDgxOA@@._V1_.jpg',
    imgWidth: 370,
    imgHeight: 512,
    poem: '<strong>Alla bandiera rossa</strong><br><br>\
Per chi conosce solo il tuo colore, bandiera rossa,<br>\
tu devi realmente esistere, perché lui esista:<br>chi era coperto di croste è coperto di piaghe,<br>\
il bracciante diventa mendicante,<br>il napoletano calabrese, il calabrese africano,<br>\
l\'analfabeta una bufala o un cane.<br>Chi conosceva appena il tuo colore, bandiera rossa,<br>\
sta per non conoscerti più, neanche coi sensi:<br>tu che già vanti tante glorie borghesi e operaie,<br>\
ridiventa straccio, e il più povero ti sventoli.'
  }, { //number five:
    name: '<strong>Giuseppe Ungaretti</strong>',
    imgSource: 'https://www.libriantichionline.com/typo3temp/pics/fe33cff6b2.jpeg',
    imgWidth: 450,
    imgHeight: 275,
    poem: '<strong>VEGLIA</strong><br><br>\
Un’intera nottata<br>buttato vicino<br>\
a un compagno<br>massacrato<br>\
con la sua bocca<br>digrignata<br>\
volta al plenilunio,<br>con la congestione<br>\
delle sue mani<br>penetrata<br>\
nel mio silenzio<br>ho scritto<br>\
lettere piene d’amore.<br>Non sono mai stato<br>\
tanto<br>attaccato alla vita.'
  },
  { 
    name: '<strong>Gaspara Stampa</strong>',
    imgSource: 'https://mypoeticside.com/wp-content/uploads/gallery-images/374ddf7.jpeg',
    imgWidth: 335,
    imgHeight: 400,
    poem: '<strong>La mia vita è un mar</strong><br><br>\
La mia vita è un mar: l\'acqua è \'l mio pianto,<br>\
i venti sono l\'aure de\' sospiri,<br>\
la speranza è la nave, i miei desiri<br>\
la vela e i remi, che la caccian tanto.<br><br>\
La tramontana mia è il lume santo<br>\
de\' miei duo chiari, due stellanti iri,<br>\
a\' quai convien ch\'ancor lontana i\' miri<br>\
sena timon, senza nocchier a canto.<br><br>\
Le perigliose e sùbite tempeste<br>\
son le teme e le fredde gelosie,<br>\
al dipartirsi tarde, al venir preste.<br><br>\
Bonacce non vi son, perché dal die<br>\
che voi, conte, da me lontan vi feste,<br>\
partîr con voi l\'ore serene mie.'
  },
  {
    name: '<strong>Alda Merini</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alda_Merini.jpg/220px-Alda_Merini.jpg',
    imgWidth: 220,
    imgHeight: 331,
    poem: '<strong>L’uccello di fuoco</strong><br><br>\
della mia mente malata,<br>\
questo passero grigio<br>\
che abita nel profondo<br>\
e col suo pigolio<br>\
sempre mi fa tremare<br>\
perché pare indifeso,<br>\
bisognoso d’amore,<br>\
qualche volta ha una voce<br>\
così tenera e nuova<br>\
che sotto il suo trionfo<br>\
detto la poesia.'
  },
  {
    name: '<strong>Gabriele D\'Annunzio</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Gabriele_D%27Anunnzio.png/220px-Gabriele_D%27Anunnzio.png',
    imgWidth: 220,
    imgHeight: 312,
    poem: '<strong>O falce di luna calante</strong><br><br>\
O falce di luna calante<br>\
che brilli su l’acque deserte,<br>\
o falce d’argento, qual mèsse di sogni<br>\
ondeggia al tuo mite chiarore qua giù!<br><br>\
Aneliti brevi di foglie,<br>\
sospiri di fiori dal bosco<br>\
esalano al mare: non canto non grido<br>\
non suono pe ’l vasto silenzio va.<br><br>\
Oppresso d’amor, di piacere,<br>\
il popol de’ vivi s’addorme...<br>\
O falce calante, qual mèsse di sogni<br>\
ondeggia al tuo mite chiarore qua giù!'
  },
  {//number nine. Add Ludovico Ariosto, Michelangelo, Moderata Fonte,
    name: '<strong>Amelia Rosselli</strong>',
    imgSource: 'https://www.poets.org/sites/default/files/styles/286x289/public/images/biographies/AmeliaRosselli_NewBioImage.png?itok=lcF4-klX',
    imgWidth: 286,
    imgHeight: 289,
    poem: '<strong>Tutto il mondo è vedovo</strong><br><br>\
Tutto il mondo è vedovo se è vero che tu cammini ancora<br>\
tutto il mondo è vedovo se è vero! Tutto il mondo<br>\
è vero se è vero che tu cammini ancora, tutto il<br>\
mondo è vedovo se tu non muori! Tutto il mondo<br>\
è mio se è vero che tu non sei vivo ma solo<br>\
una lanterna per i miei occhi obliqui. Cieca rimasi<br>\
dalla tua nascita e l’importanza del nuovo giorno<br>\
non è che notte per la tua distanza. Cieca sono<br>\
chè tu cammini ancora! Cieca sono che tu cammini<br>\
e il mondo è vedovo e il mondo è cieco se tu cammini<br>\
ancora aggrappato ai miei occhi celestiali.'
  },
]

//Portuguese poems array:
//////////////
/////////////

const Poemas = [
  {
    name: '<strong>Carlos Drummond de Andrade</strong>',
    imgSource: 'https://assets.mubi.com/images/cast_member/74538/image-w240.jpg?1506559121',
    imgWidth: 240,
    imgHeight: 285,
    poem: '<strong>Congresso Internacional do Medo</strong><br>\
<br>\
Provisoriamente não cantaremos o amor,<br>\
que se refugiou mais abaixo dos subterrâneos.<br>\
Cantaremos o medo, que esteriliza os abraços,<br>\
não cantaremos o ódio, porque este não existe,<br>\
existe apenas o medo, nosso pai e nosso companheiro,<br>\
o medo grande dos sertões, dos mares, dos desertos,<br>\
o medo dos soldados, o medo das mães, o medo das igrejas,<br>\
cantaremos o medo dos ditadores, o medo dos democratas,<br>\
cantaremos o medo da morte e o medo de depois da morte.<br>\
Depois morreremos de medo<br>\
e sobre nossos túmulos nascerão flores amarelas e medrosas<br>'
  },
  {
    name: '<strong>Mário de Andrade</strong>',
    imgSource: 'https://blackwomenofbrazil.co/wp-content/uploads/2017/06/mc3a1rio-de-andrade.jpg',
    imgWidth: 400,
    imgHeight: 244,
    poem: '<strong>Cantam Passaros Exoticos no Teu Pubis</strong><br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
Como espelhar graficamente<br>\
uma melodia de sonho?<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
Como definir a breve vertigem<br>\
nos momentos de lucidez?<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
Como descrever o frémito singular<br>\
com as palavras banais de todos os dias?<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
Cantam. Ou imagino-os.<br>\
Oiço-os. Ou adivinho-os.<br>\
Quantas decepções cabem no abismo<br>\
que separa A Sensação de A Palavra?<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
Para nós ambos, no vórtice do delírio.<br>\
Como ouvi-los sem ser a deliberar?<br>\
E como delirar sem os ouvir?<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
O êxtase está além do abraço desesperado<br>\
além dos copos do peito além da sanguessuga<br>\
labiar além das ancas convulsivas além<br>\
dos rostos de mármore esbraseados<br>\
<br>\
Cantam pássaros exóticos no teu púbis.<br>\
E só ouvindo-os nos amamos como sonhamos.<br>'
  },
  {
    name: '<strong>Torquato Neto</strong>',
    imgSource: 'https://i.ytimg.com/vi/BVK9LZLmwMY/0.jpg',
    imgWidth: 480,
    imgHeight: 360,
    poem: '<strong>Cogito</strong><br><br>\
eu sou como eu sou<br>pronome<br>\pessoal intransferível<br>do homem que iniciei<br>\
na medida do impossível<br><br>eu sou como eu sou<br>agora<br>\
sem grandes segredos dantes<br>sem novos secretos dentes<br>\
nesta hora<br><br>eu sou como eu sou<br>presente<br>\
desferrolhado indecente<br>feito um pedaço de mim<br><br>\
eu sou como eu sou<br>vidente<br>e vivo tranqüilamente<br>todas as horas do fim'
  },
  {
    name: '<strong>Roberto Piva</strong>',
    imgSource: 'https://abrilveja.files.wordpress.com/2016/12/piva-31-460x301.jpg',
    imgWidth: 460,
    imgHeight: 301,
    poem: '<strong>A piedade</strong><br>\
<br>\
Eu urrava nos poliedros da Justiça meu momento<br>\
abatido na extrema paliçada<br>\
os professores falavam da vontade de dominar e da<br>\
luta pela vida<br>\
as senhoras católicas são piedosas<br>\
os comunistas são piedosos<br>\
os comerciantes são piedosos<br>\
só eu não sou piedoso<br>\
se eu fosse piedoso meu sexo seria dócil e só se ergueria<br>\
aos sábados à noite<br>\
eu seria um bom filho meus colegas me chamariam<br>\
cu-de-ferro e me fariam perguntas: por que navio<br>\
bóia? por que prego afunda?<br>\
eu deixaria proliferar uma úlcera e admiraria as<br>\
estátuas de fortes dentaduras<br>\
iria a bailes onde eu não poderia levar meus amigos<br>\
pederastas ou barbudos<br>\
eu me universalizaria no senso comum e eles diriam<br>\
que tenho todas as virtudes<br>\
eu não sou piedoso<br>\
eu nunca poderei ser piedoso<br>\
meus olhos retinem e tingem-se de verde<br>\
Os arranha-céus de carniça se decompõem nos<br>\
pavimentos<br>\
os adolescentes nas escolas bufam como cadelas<br>\
asfixiadas<br>\
arcanjos de enxofre bombardeiam o horizonte através<br>\
dos meus sonhos.'
  }, { //number five:
  	name: '<strong>Dirceu Villa</strong>',
    imgSource: 'http://www.atelierpoesia.it/portal/images/FOTO_POETI/VILLA_DIRCEU.jpg',
    imgWidth: 375,
    imgHeight: 375,
  	poem: '<strong>Pontos-de-fuga do século XX</strong><br><br>\
Era Yeltsin<br>Em 1995, parecendo uma caricatura<br>\
De Russo frente às câmeras do Western<br>\Americano, que pensava: "É nisso<br>\
Que dá o Comunismo".<br><br>\
O que Hobsbawn chamou<br>"Capitalismo de Estado": onde<br>\
Deus & Mammon dão lugar<br>Aos Canalhas do Partido: tudo<br>\
Em maiúsculas, ou uniforme militar.'
  }, { 
    name: '<strong>Hilda Hilst</strong>',
    imgSource: 'http://4.bp.blogspot.com/-HxnBvUOnIdw/UuW8U2FURcI/AAAAAAAAFcQ/zlbiJ48DZek/s1600/hilda+hilst+1.jpg',
    imgWidth: 310,
    imgHeight: 359,
    poem: '<strong>I - Do Desejo</strong><br><br>\
Porque há desejo em mim, é tudo cintilância.<br>\
Antes, o cotidiano era um pensar alturas<br>\
Buscando Aquele Outro decantado<br>\
Surdo à minha humana ladradura.<br>\
Visgo e suor, pois nunca se faziam.<br>\
Hoje, de carne e osso, laborioso, lascivo<br>\
Tomas-me o corpo. E que descanso me dás<br>\
Depois das lidas. Sonhei penhascos<br>\
Quando havia o jardim aqui ao lado.<br>\
Pensei subidas onde não havia rastros.<br>\
Extasiada, fodo contigo<br>\
Ao invés de ganir diante do Nada.'
  },
  {
    name: '<strong>Sousândrade</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Souza_Andrade.jpg/200px-Souza_Andrade.jpg',
    imgWidth: 220,
    imgHeight: 239,
    poem: '<strong>Harpas Selvagens</strong><br>\
Harpa XXXII<br><br>\
Dos rubros flancos do redondo oceano<br>\
Com suas asas de luz prendendo a terra<br>\
O sol eu vi nascer, jovem formoso<br>\
Desordenando pelos ombros de ouro<br>\
A perfumada luminosa coma,<br>\
Nas faces de um calor que amor acende<br>\
Sorriso de coral deixava errante.<br>\
Em torno de mim não tragas os teus raios,<br>\
Suspende, sol de fogo! tu, que outrora<br>\
Em cândidas canções eu te saudava<br>\
Nesta hora d’esperança, ergue-te e passa<br>\
Sem ouvir minha lira. Quando infante<br>\
Nos pés do laranjal adormecido,<br>\
Orvalhado das flores que choviam<br>\
Cheirosas dentre o ramo e a bela fruta,<br>\
Na terra de meus pais eu despertava,<br>\
Minhas irmãs sorrindo, e o canto e aromas,<br>\
E o sussurrar da rúbida mangueira<br>\
Eram teus raios que primeiro vinham<br>\
Roçar-me as cordas do alaúde brando<br>\
Nos meus joelhos tímidos vagindo.'
  },
  {
    name: '<strong>Fernando Pessoa</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pessoa_chapeu.jpg/220px-Pessoa_chapeu.jpg',
    imgWidth: 220,
    imgHeight: 307,
    poem: '<strong>Poema em linha reta</strong><br><br>\
Nunca conheci quem tivesse levado porrada.<br>\
Todos os meus conhecidos têm sido campeões em tudo.<br><br>\
E eu, tantas vezes reles, tantas vezes porco, tantas vezes vil,<br>\
Eu tantas vezes irrespondivelmente parasita,<br>\
Indesculpavelmente sujo.<br>\
Eu, que tantas vezes não tenho tido paciência para tomar banho,<br>\
Eu, que tantas vezes tenho sido ridículo, absurdo,<br>\
Que tenho enrolado os pés publicamente nos tapetes das etiquetas,<br>\
Que tenho sido grotesco, mesquinho, submisso e arrogante,<br>\
Que tenho sofrido enxovalhos e calado,<br>\
Que quando não tenho calado, tenho sido mais ridículo ainda;<br>\
Eu, que tenho sido cômico às criadas de hotel,<br>\
Eu, que tenho sentido o piscar de olhos dos moços de fretes,<br>\
Eu, que tenho feito vergonhas financeiras, pedido emprestado<br>\
[sem pagar,<br>\
Eu, que, quando a hora do soco surgiu, me tenho agachado<br>\
Para fora da possibilidade do soco;<br>\
Eu, que tenho sofrido a angústia das pequenas coisas ridículas,<br>\
Eu verifico que não tenho par nisto tudo neste mundo.<br><br>\
Toda a gente que eu conheço e que fala comigo<br>\
Nunca teve um ato ridículo, nunca sofreu enxovalho,<br>\
Nunca foi senão príncipe — todos eles príncipes — na vida...<br><br>\
Quem me dera ouvir de alguém a voz humana<br>\
Que confessasse não um pecado, mas uma infâmia;<br>\
Que contasse, não uma violência, mas uma cobardia!<br>\
Não, são todos o Ideal, se os oiço e me falam.<br>\
Quem há neste largo mundo que me confesse que uma vez foi vil?<br>\
Ó príncipes, meus irmãos,<br><br>\
Arre, estou farto de semideuses!<br>\
Onde é que há gente no mundo?<br><br>\
Então sou só eu que é vil e errôneo nesta terra?<br><br>\
Poderão as mulheres não os terem amado,<br>\
Podem ter sido traídos — mas ridículos nunca!<br>\
E eu, que tenho sido ridículo sem ter sido traído,<br>\
Como posso eu falar com os meus superiores sem titubear?<br>\
Eu, que venho sido vil, literalmente vil,<br>\
Vil no sentido mesquinho e infame da vileza.'
  },
  { //number nine. Add Caetano Veloso, João Cabral de Melo Neto, Gonçalves Dias, Alda do Espirito Santo, Angélica Freitas, Ricardo Domeneck
    name: '<strong>Luís de Camões</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Lu%C3%ADs_de_Cam%C3%B5es_por_Fran%C3%A7ois_G%C3%A9rard.jpg/220px-Lu%C3%ADs_de_Cam%C3%B5es_por_Fran%C3%A7ois_G%C3%A9rard.jpg',
    imgWidth: 220,
    imgHeight: 298,
    poem: '<strong>Se tanta pena tenho merecida</strong><br><br>\
Se tanta pena tenho merecida<br>\
Em pago de sofrer tantas durezas,<br>\
Provai, Senhora, em mim vossas cruezas,<br>\
Que aqui tendes u~a alma oferecida.<br><br>\
Nela experimentai, se sois servida,<br>\
Desprezos, desfavores e asperezas,<br>\
Que mores sofrimentos e firmezas<br>\
Sustentarei na guerra desta vida.<br><br>\
Mas contra vosso olhos quais serão?<br>\
Forçado é que tudo se lhe renda,<br>\
Mas porei por escudo o coração.<br><br>\
Porque, em tão dura e áspera contenda,<br>\
Fé bem que, pois não acho defensão,<br>\
Com me meter nas lanças me defenda.'
  },
]