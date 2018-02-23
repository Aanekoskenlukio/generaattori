let sanat = "Mieleni minun tekevi;aivoni ajattelevi;lähteäni laulamahan;Lähe nyt kanssa laulamahan;kahta'alta käytyämme;näillä raukoilla rajoilla;poloisilla Pohjan mailla;sormet sormien lomahan;kuulla noien kultaisien;noita saamia sanoja;virsihin Vipunen kuoli;sae saatteli runoja;ongelmoita oppimia;panin aitan parven päähän;rasian rahin nenähän;virsilippahan viritän;	tiesin virttä tehtäväksi;iän kaiken impeyttä;	avaroilla autioilla;lenti luotehet, etelät;arvelee, ajattelevi;aalto vie asuinsijani";
let sanaLista = sanat.split(";");
let maara = 5;

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

let elementti = document.getElementById('t');
let indeksit = [];
while (indeksit.length < maara) {
  x = Math.round(Math.random() * (sanaLista.length - 1));
  if (indeksit.indexOf(x) < 0) {
    indeksit.push(x);
  }
}
console.log("Generoitiin:");
console.log(indeksit);
for (let i = 0; i < indeksit.length; i++) {
  if (i == indeksit.length - 1) {
    t.innerHTML += sanaLista[indeksit[i]] + "";
  } else if (i == 0) {
    t.innerHTML += sanaLista[indeksit[i]].capitalize() + ",<br>";
  } else {
    t.innerHTML += sanaLista[indeksit[i]] + ",<br>";
  }
}
t.innerHTML += ".";
