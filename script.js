//Sort poems
const sortBtn = document.querySelector('.sort-btn');
const poemAuthor = document.querySelector('.poem-author');
const poem = document.querySelector('#poem');

sortBtn.addEventListener('click', displayPoem);
function displayPoem (){
//sort poems in English
  if (sortBtn.innerHTML === 'Sort') {
    let number = Math.floor(Math.random()*englishPoems.length);
    poemAuthor.innerHTML = englishPoems[number].name;
    poem.innerHTML = englishPoems[number].poem;
  }
//sort poems in French
  else if (sortBtn.innerHTML === 'Trier') {
    let number = Math.floor(Math.random()*Poesie.length);
    poemAuthor.innerHTML = Poesie[number].name;
    poem.innerHTML = Poesie[number].poem;
  }
//sort poems in Spanish
  else if (instruction.innerHTML === 'Clica al botón para sortear un poema:') {
    let number = Math.floor(Math.random()*Poesias.length);
    poemAuthor.innerHTML = Poesias[number].name;
    poem.innerHTML = Poesias[number].poem;
  }
//sort poems in German
  else if (sortBtn.innerHTML === 'Sortieren') {
    let number = Math.floor(Math.random()*Gedichte.length);
    poemAuthor.innerHTML = Gedichte[number].name;
    poem.innerHTML = Gedichte[number].poem;
  }
//sort poems in Italian
  else if (sortBtn.innerHTML === 'Ordinare') {
    let number = Math.floor(Math.random()*Poesia.length);
    poemAuthor.innerHTML = Poesia[number].name;
    poem.innerHTML = Poesia[number].poem;
  }
//sort poems in Portuguese
  else if (instruction.innerHTML === 'Clique abaixo para sortear um poema:') {
    let number = Math.floor(Math.random()*Poemas.length);
    poemAuthor.innerHTML = Poemas[number].name;
    poem.innerHTML = Poemas[number].poem;
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
  instruction.innerHTML = 'Clica al botón para sortear un poema:';
}
function germanSite (){
  sortBtn.innerHTML = 'Sortieren';
  instruction.innerHTML = 'Klicken Sie hier, um ein Gedicht zu sortieren:';
}
function italianSite (){
  sortBtn.innerHTML = 'Assortire';
  instruction.innerHTML = 'Fare clic sul pulsante per ordinare una poesia:';
}
function portugueseSite (){
  sortBtn.innerHTML = 'Sortear';
  instruction.innerHTML = 'Clique abaixo para sortear um poema:';
}
//English poems array:
const englishPoems = [
  {
    name: '<strong>William Shakespeare</strong>',
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
  {
    name: '<strong>Edgar Allan Poe</strong>',
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
    //number five
    name: '<strong>Adrienne Rich</strong>',
    poem: '<strong>What kinds of times are these?</strong><br><br>\
There\'s a place between two stands of trees where the grass grows uphill<br>\
and the old revolutionary road breaks off into shadows<br>\
near a meeting-house abandoned by the persecuted<br>\
who disappeared into those shadows<br><br>\
I\'ve walked there picking mushrooms at the edge of dread, but don\'t be fooled<br>\
this isn\'t a Russian poem, this is not somewhere else but here,<br>\
our country moving closer to its own truth and dread,<br>\
its own ways of making people disappear<br>'
  }
]

//French poems array:
const Poesie = [
  {
    name: '<strong>François Villon</strong>',
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
    //number five
    name: '<strong>Antoine Wauters</strong>',
    poem: 'Tout part d’un coup de sang, d’un<br>appel rouge au corps. D’un besoin<br>\
de passer, d’être passé, traversé sur-le-<br>champ. D’un besoin d’entendre plus<br>\
que de parler. Tout part d’un cri<br>éclair venu d’en bas, babil ou diable,<br>\
dense aux entrailles.'
  }
]
//Spanish poems array:
const Poesias = [
  {
    name: '<strong>Pablo Neruda</strong>',
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
},{//number five
  name: '<strong>Violeta Parra</strong>',
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
  }
]
//German poems array:
const Gedichte = [
  {
    name: '<strong>Goethe</strong>',
    poem: '<strong>Glückliche Fahrt</strong><br><br>\
Die Nebel zerreißen, <br>Der Himmel ist helle, <br>\
Und Äolus löset <br>Das ängstliche Band. <br>\
Es säuseln die Winde, <br>Es rührt sich der Schiffer. <br>\
Geschwinde! Geschwinde! <br>Es teilt sich die Welle, <br>\
Es naht sich die Ferne; <br>Schon seh ich das Land!<br>'
  },
  {
    name: '<strong>Bertolt Brecht</strong>',
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
    poem: '<strong>Eranna an Sappho</strong><br><br>\
O du wilde weite Werferin:<br>Wie ein Speer bei andern Dingen<br>\
lag ich bei den Meinen. Dein Erklingen<br>warf mich weit. Ich weiß nicht, wo ich bin.<br>\
Mich kann keiner wiederbringen.<br><br>\
Meine Schwestern denken mich und weben,<br>und das Haus ist voll vertrauter Schritte.<br>\
Ich allein bin fern und fortgegeben,<br>und ich zittere wie eine Bitte;<br>\
denn die schöne Göttin in der Mitte<br>\
ihrer Mythen glüht und lebt mein Leben.'
  },
]
//Italian poems array:
const Poesia = [
  {
    name: '<strong>Dante Alighieri</strong>',
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
    name: 'Giovanni Boccaccio',
    poem: '<strong>Oh come son talora</strong><br><br>\
    Oh come son talora<br>maravigliosi in noi,<br>\
Amor, gl\'incendii tuoi!<br>Con accorciato crin, succinta in gonna,<br>\
innamorata donna<br>seguì del suo fedel l\'orme leggiadre<br>\
fra bellicose squadre.<br>Ma così gran valore<br>\
nelle donne moderne or non si vede,<br>\
che, s\'han maggior bellezza, han minor fede.'
  }, {
    name: 'Pier Paolo Pasolini',
    poem: '<strong>Alla bandiera rossa</strong><br><br>\
Per chi conosce solo il tuo colore, bandiera rossa,<br>\
tu devi realmente esistere, perché lui esista:<br>chi era coperto di croste è coperto di piaghe,<br>\
il bracciante diventa mendicante,<br>il napoletano calabrese, il calabrese africano,<br>\
l\'analfabeta una bufala o un cane.<br>Chi conosceva appena il tuo colore, bandiera rossa,<br>\
sta per non conoscerti più, neanche coi sensi:<br>tu che già vanti tante glorie borghesi e operaie,<br>\
ridiventa straccio, e il più povero ti sventoli.'
  }, { //number five:
    name: 'Giuseppe Ungaretti',
    poem: '<strong>VEGLIA</strong><br><br>\
Un’intera nottata<br>buttato vicino<br>\
a un compagno<br>massacrato<br>\
con la sua bocca<br>digrignata<br>\
volta al plenilunio,<br>con la congestione<br>\
delle sue mani<br>penetrata<br>\
nel mio silenzio<br>ho scritto<br>\
lettere piene d’amore.<br>Non sono mai stato<br>\
tanto<br>attaccato alla vita.'
  }

]
//Portuguese poems array:
const Poemas = [
  {
    name: '<strong>Carlos Drummond de Andrade</strong>',
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
  },
  { //number five:
  	name: '<strong>Dirceu Villa</strong>',
  	poem: '<strong>Pontos-de-fuga do século XX</strong><br><br>\
Era Yeltsin<br>Em 1995, parecendo uma caricatura<br>\
De Russo frente às câmeras do Western<br>\Americano, que pensava: "É nisso<br>\
Que dá o Comunismo".<br><br>\
O que Hobsbawn chamou<br>"Capitalismo de Estado": onde<br>\
Deus & Mammon dão lugar<br>Aos Canalhas do Partido: tudo<br>\
Em maiúsculas, ou uniforme militar.'
  }
]