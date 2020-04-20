var karte1 = {
    colour: ["blue", "red"],
    num: 2011
};
console.log(karte1.colour);
var colour = ["blue", "red", "green", "yellow"];
var num = [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
document.querySelector("card").innerHTML = num;
document.querySelector("card").setAttribute("style", "background-color: " + colour);
/**Alle Karten werden in Ziehstapel array geschoben */
/**Array für den Ziehstapel */
var ziehstapel = [];
/**Array für den Ablegestapel */
var ablegestapel = [];
/**Array für die Karten des Spielers */
var spielerhand = [];
/**Array für die Karten des Gegenspielers/Computers */
var computerhand = [];
/**Eventlistener Spiel wird gestartet
3 Karten in Spielerhand array*/
ziehstapel.splice(0, 3);
/**3 Karten in Computerhand array */
/**1 karte in Ablegestapel array*/
/**Schlaufe um alles folgende */
/**Spieler ist an der Reihe
     * Eventlistener click auf Handkarte
         * Vergleich, ob Zahl oder Farbe mit erster Karte in Ablegestapel array übereinstimmen
             * NEIN: -> Nachricht "Karte passt nicht"*/
function passtnicht() {
    alert("Card doesn't fit! Choose another or draw a card.");
}
/**JA: -> Karte von Spielerhand array in Ablegestapel array schieben*/
function ablegen() {
    ablegestapel.unshift( /**die Karte die geklickt wurde */);
    spielerhand.shift( /**die karte die geklickt wurde */);
}
document.querySelector( /**geklickte Handkarte*/).addEventListener("click", ablegen);
/**Eventlistener click auf Ablegestapel
         * Vergleich ob Zahl oder Farbe irgendeiner Handkarte mit erster Karte in Ablegestapel array übereinstimmen
             * JA -> Nachricht "Du kannst eine Karte legen"*/
function cardfits() {
    alert("You have a card that fits");
}
/**NEIN -> Karte von Ziehstapel array in Spielerhand array schieben*/
function ziehen() {
    spielerhand.unshift( /**Karte von Ziehstapel */);
    ziehstapel.shift();
}
document.querySelector( /**Ziehstapel*/).addEventListener("click", ziehen);
/**Überprüfen ob noch Karte in Handkarten array, wenn
         * >0 weiter spielen*/
/**=0 Siegernachricht -> Link Neues Spiel -> alle Karten in Ziehstapel array -> Mischen -> zu Spiel wird gestartet
 */
if ( /**Anzahlkarten in Handkarten array */ == 0) {
    alert("Winner");
}
/**Computer ist an der Reihe
     * Vergleich, ob Zahl oder Farbe einer Computerhand-Karte mit erster Karte in Ablegestapel array übereinstimmen
         * erste Übereinstimmung: Karte von Computerhand array in Ablegestapel array schieben
         * keine Übereinstimmung: Karte vo Ziehstapel array in Computerhand array schieben
     * Überprüfen ob noch Karte in Computerkarten array, wenn
         * >0 weiter spielen
         * =0 Verlorennachricht -> Link Neues Spiel -> alle Karten in Ziehstapel array -> Mischen -> zu Spiel wird gestartet
 */
if ( /**Anzahl Karten in Computerhand array */ == 0) {
    alert("Looser");
}
//# sourceMappingURL=scriptgame.js.map