//Sami Jakonen jaksfi@github
//Runon rivit tai sanat
let sanat = "Mieleni minun tekevi;aivoni ajattelevi;lähteäni laulamahan;Lähe nyt kanssa laulamahan;kahta'alta käytyämme;Täst’ on kulta kulkenunna;Täst’ on mennyt mielitietty;Tästä armas astununna;Valkia vaeltanunna; Täss’ on astunut aholla;Tuoss’ on istunut kivellä;Kivi on paljo kirkkahampi;Paasi toistansa parempi;Kangas kahta kaunihimpi;Lehto viittä leppiämpi;Korpi kuutta kukkahampi;Koko metsä mieluisampi;Tuon on kultani kulusta;Armahani astunnasta; näillä raukoilla rajoilla;poloisilla Pohjan mailla;sormet sormien lomahan;kuulla noien kultaisien;noita saamia sanoja;virsihin Vipunen kuoli;sae saatteli runoja;ongelmoita oppimia;panin aitan parven päähän;rasian rahin nenähän;virsilippahan viritän;	tiesin virttä tehtäväksi;iän kaiken impeyttä;	avaroilla autioilla;lenti luotehet, etelät;arvelee, ajattelevi;aalto vie asuinsijani";
/*Erotellaan data listaksi


Vaihda split-funktion attribuutti rivien erotusmerkiksi

*/
let sanaLista = sanat.split(";");
//Generoitavien säkeiden määrä
let maara = 5;

//Funktio ensimmäisen kirjaimen isoksi muuttamista varten
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

//Haetaan tekstielementti HTML-tiedostosta
let elementti = document.getElementById('t');
//Luodaan tyhjä lista satunnaisia indeksinumeroita varten
let indeksit = [];

//Generoidaan satunnaisia, uniikkeja indeksinumeroita
while (indeksit.length < maara) {
  //Arvotaan numero ja pyöristetään kokonaisluvuksi
  x = Math.round(Math.random() * (sanaLista.length - 1));
  //Tarkastetaan, onko kyseinen numero jo listalla
  if (indeksit.indexOf(x) < 0) {
    //Jos ei ole, lisätään listaan
    indeksit.push(x);
  }
}
console.log("Generoitiin:");
console.log(indeksit);

//Printataan sivulle generoituja indeksinumeroita vastaavat rivit
for (let i = 0; i < indeksit.length; i++) {
  if (i == indeksit.length - 1) {
    //Jos ollaan viimeisellä rivillä, ei pilkkua loppuun
    t.innerHTML += sanaLista[indeksit[i]] + "";
  } else if (i == 0) {
    //Jos ollaan ensimmäisellä rivillä, iso alkukirjain
    t.innerHTML += sanaLista[indeksit[i]].capitalize() + ",<br>";
  } else {
    //Normaali tilanne
    t.innerHTML += sanaLista[indeksit[i]] + ",<br>";
  }
}
//Lopetetaan runo pisteeseen
t.innerHTML += ".";
