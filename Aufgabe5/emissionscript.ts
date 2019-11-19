var text11:string = "Die Emission von ";
var text12:string = " ist: ";
var text21:string = "Relativ zur Gesamtemission der Welt verursacht ";
var text22:string = " damit ";
var text31:string = "Für ";
var text32:string = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var text33:string = " verändert"
var text4:string = "2018 im Vergleich zu 2008 sind das ";

var ein1:string = " kg CO2";
var ein2:string = "%"
var af:string = "Afrika";
var sa:string = "Südamerika";
var eu:string = "Europa";
var na:string = "Nordamerika";
var as:string = "Asien";
var au:string = "Australien";

var af18:number = 1235.5;
var af08:number = 1028;
var aft3:number = (af18/af08)*100;
var aft4:number = af18-af08;

var sa18:number = 1261.5;
var sa08:number = 1132.6;
var sat3:number = (sa18/sa08)*100;
var sat4:number = sa18-sa08;

var eu18:number = 6035.6;
var eu08:number = 4965.7;
var eut3:number = (eu18/eu08)*100;
var eut4:number = eu18-eu08;

var na18:number = 6035.6;
var na08:number = 6600.4;
var nat3:number = (na18/na08)*100;
var nat4:number = na18-na08;

var as18:number = 16274.1;
var as08:number = 12954.7;
var ast3:number = (as18/as08)*100;
var ast4:number = as18-as08;

var au18:number = 2100.5;
var au08:number = 1993;
var aut3:number = (au18/au08)*100;
var aut4:number = au18-au08;

var gesamt:number = af18+sa18+eu18+na18+as18+au18;
var aft2:number = (af18/gesamt)*100;
var sat2:number = (sa18/gesamt)*100;
var eut2:number = (eu18/gesamt)*100;
var nat2:number = (na18/gesamt)*100;
var ast2:number = (as18/gesamt)*100;
var aut2:number = (au18/gesamt)*100;

console.log(text11+af+text12+af18+ein1);
console.log(text21+af+text22+aft2+ein2);
console.log(text31+af+text32+aft3+ein2+text33);
console.log(text4+aft4+ein1);

console.log(text11+sa+text12+sa18+ein1);
console.log(text21+sa+text22+sat2+ein2);
console.log(text31+sa+text32+sat3+ein2+text33);
console.log(text4+sat4+ein1);

console.log(text11+eu+text12+eu18+ein1);
console.log(text21+eu+text22+eut2+ein2);
console.log(text31+eu+text32+eut3+ein2+text33);
console.log(text4+eut4+ein1);

console.log(text11+na+text12+na18+ein1);
console.log(text21+na+text22+nat2+ein2);
console.log(text31+na+text32+nat3+ein2+text33);
console.log(text4+nat4+ein1);

console.log(text11+as+text12+as18+ein1);
console.log(text21+as+text22+ast2+ein2);
console.log(text31+as+text32+ast3+ein2+text33);
console.log(text4+ast4+ein1);

console.log(text11+au+text12+au18+ein1);
console.log(text21+au+text22+aut2+ein2);
console.log(text31+au+text32+aut3+ein2+text33);
console.log(text4+aut4+ein1);