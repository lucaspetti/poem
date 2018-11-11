//Sort poems
const sortBtn = document.querySelector('.sort-btn');
const poemAuthor = document.querySelector('.poem-author');
const poem = document.querySelector('#poem');
const imageContainer = document.querySelector('#img-container');
const poemImage = new Image(672, 372);
poemImage.src = 'https://i1.wp.com/artlistr.com/wp-content/uploads/2017/04/Fort-Vimieux-1831-JMW-Turner.jpg';
imageContainer.appendChild(poemImage);

sortBtn.addEventListener('click', displayPoem);

function sortedPoem (data) {
  let number = Math.floor(Math.random()*data.length);
  poemImage.src = data[number].imgSource;
  poemAuthor.innerHTML = data[number].name;
  poemImage.height = data[number].imgHeight;
  poemImage.width = data[number].imgWidth;
  poem.innerHTML = data[number].poem.join('<br />\ ');
}

function displayPoem (){
//sort poems in English
  if (sortBtn.innerHTML === 'Sort') {
    fetch(`data/english-poems.json`)
    .then(response => response.json())
    .then((data) => {
      sortedPoem(data);
    });
  }
//sort poems in French
  else if (sortBtn.innerHTML === 'Trier') {
    fetch(`data/french-poems.json`)
    .then(response => response.json())
    .then((data) => {
      sortedPoem(data);
    });
  }
//sort poems in Spanish
  else if (instruction.innerHTML === 'Clica al botón para sortear un poema:') {
    fetch(`data/spanish-poems.json`)
    .then(response => response.json())
    .then((data) => {
      sortedPoem(data);
    });
  }
//sort poems in German
  else if (sortBtn.innerHTML === 'Sortieren') {
    // sortedPoem(Gedichte);
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
// SOURCES:

// Poetry Foundation
// poets.org
// frenchPoems-francaise.fr
// unjourunpoeme.fr
// poesi.as
// poemas-del-alma.com
// culturacolectiva.com
// deutschelyrik.de
// Modo de usar e co
// Escamandro

// FRENCH: Add Jean Cocteau, Antonin Artaud

//SPANISH: Add Antonio Machado

// PORTUGUESE: Add Caetano Veloso, João Cabral de Melo Neto, Gonçalves Dias, Alda do Espirito Santo, Angélica Freitas, Ricardo Domeneck

//German poems array:
//////////////
/////////////

const Gedichte = [
  {//1
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
  {//2
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
  {//3
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
  {//4
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
  }, { //5
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
  { //6
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
  { //7
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
  {//8
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
  { //9
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
  {//10
    name: '<strong>Günter Grass</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/G%C3%BCnter_Grass_auf_dem_Blauen_Sofa.jpg/220px-G%C3%BCnter_Grass_auf_dem_Blauen_Sofa.jpg',
    imgWidth: 220,
    imgHeight: 330,
    poem: '<strong>Was gesagt werden muss</strong><br><br>\
    Warum schweige ich, verschweige zu lange,<br>\
was offensichtlich ist und in Planspielen<br>\
geübt wurde, an deren Ende als Überlebende<br>\
wir allenfalls Fußnoten sind.<br><br>\
Es ist das behauptete Recht auf den Erstschlag,<br>\
der das von einem Maulhelden unterjochte<br>\
und zum organisierten Jubel gelenkte<br>\
iranische Volk auslöschen könnte,<br>\
weil in dessen Machtbereich der Bau<br>\
einer Atombombe vermutet wird.<br><br>\
Doch warum untersage ich mir,<br>\
jenes andere Land beim Namen zu nennen,<br>\
in dem seit Jahren - wenn auch geheimgehalten -<br>\
ein wachsend nukleares Potential verfügbar<br>\
aber außer Kontrolle, weil keiner Prüfung<br>\
zugänglich ist?<br><br>\
Das allgemeine Verschweigen dieses Tatbestandes,<br>\
dem sich mein Schweigen untergeordnet hat,<br>\
empfinde ich als belastende Lüge<br>\
und Zwang, der Strafe in Aussicht stellt,<br>\
sobald er missachtet wird;<br>\
das Verdikt \'Antisemitismus\' ist geläufig.'
  },
  {//11 Add Novalis
    name: '<strong>Nelly Sachs</strong>',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Nelly_Sachs_1966.jpg/220px-Nelly_Sachs_1966.jpg',
    imgWidth: 220,
    imgHeight: 311,
    poem: '<strong>Diese Kette von Rätseln</strong><br><br>\
Diese Kette von Rätseln<br>\
um den Hals der Nacht gelegt<br>\
Königswort weit fort geschrieben<br>\
unlesbar<br>\
vielleicht in Kometenfahrt<br>\
wenn die aufgerissene Wunde des Himmels<br>\
schmerzt<br><br>\
da<br>\
in dem Bettler der Raum hat<br>\
und auf Knieen gehend<br>\
ausgemessen hat alle Landstraßen<br>\
mit seinem Leib<br><br>\
denn es muß ausgelitten werden<br>\
das Lesbare<br>\
und Sterben gelernt<br>\
im Geduldigsein'
  }
]

//Italian poems array:
//////////////
/////////////

const Poesia = [
  {//1
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
  {//2
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
  }, {//3
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
  }, {//4
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
  }, { //5
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
  { //6
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
  {//7
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
  {//8
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
  {//9 Add Ludovico Ariosto, Michelangelo, Moderata Fonte,
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
  {//1
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
  {//2
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
  {//3
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
  {//4
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
  }, { //5
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
  }, { //6
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
  {//7
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
  {//8
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
  { //9 Add Caetano Veloso, João Cabral de Melo Neto, Gonçalves Dias, Alda do Espirito Santo, Angélica Freitas, Ricardo Domeneck
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

// TO INSERT A NEW POEM (EXAMPLE):
// {
//   "name": "<strong>Adrienne Rich</strong>",
//   "imgSource": "http://static.poetryfoundation.org/o/harriet/2012/04/adrienne-rich.jpg",
//   "imgWidth": 324,
//   "imgHeight": 216,
//   "poem": [
//     "<strong>What kinds of times are these?</strong><br>",
//     "There's a place between two stands of trees where the grass grows uphill",
//     "and the old revolutionary road breaks off into shadows",
//     "near a meeting-house abandoned by the persecuted",
//     "who disappeared into those shadows<br>",
//     "I've walked there picking mushrooms at the edge of dread, but don't be fooled",
//     "this isn't a Russian poem, this is not somewhere else but here,",
//     "our country moving closer to its own truth and dread,",
//     "its own ways of making people disappear"
//   ]
//   },
