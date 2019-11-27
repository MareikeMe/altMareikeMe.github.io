var af18:number = 1235.5;
var af08:number = 1028;
var aft3:number = (af18/af08)*100;
var aft4:number = af18-af08;

var sa18:number = 1261.5;
var sa08:number = 1132.6;
var sat3:number = (sa18/sa08)*100;
var sat4:number = sa18-sa08;

var eu18:number = 4209.3;
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




function europe() {
    document.querySelector(".continent").innerHTML = "<i>Europe</i>";
    document.querySelector(".continent2").innerHTML = "Europe";
    document.querySelector(".z1").innerHTML = "" + eu18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + eut2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + eut3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + eut4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + eut2 + '%');
}
window.addEventListener('load', function(){
    document. querySelector(".europe").addEventListener('click', europe);
})

function northamerica() {
    document.querySelector(".continent").innerHTML = "<i>North America</i>";
    document.querySelector(".continent2").innerHTML = "North America";
    document.querySelector(".z1").innerHTML = "" + na18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + nat2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + nat3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + nat4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + nat2 + '%');
}
window.addEventListener('load', function() {
    document.querySelector(".northamerica").addEventListener('click', northamerica);
});

function southamerica() {
    document.querySelector(".continent").innerHTML = "<i>South America</i>";
    document.querySelector(".continent2").innerHTML = "South America";
    document.querySelector(".z1").innerHTML = "" + sa18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + sat2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + sat3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + sat4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + sat2 + '%');
}
window.addEventListener('load', function() {
    document.querySelector(".southamerica").addEventListener('click', southamerica);
});

function africa() {
    document.querySelector(".continent").innerHTML = "<i>Africa</i>";
    document.querySelector(".continent2").innerHTML = "Africa";
    document.querySelector(".z1").innerHTML = "" + af18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + aft2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + aft3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + aft4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + aft2 + '%');
}
window.addEventListener('load', function() {
    document.querySelector(".africa").addEventListener('click', africa);
});

function asia() {
    document.querySelector(".continent").innerHTML = "<i>Asia</i>";
    document.querySelector(".continent2").innerHTML = "Asia";
    document.querySelector(".z1").innerHTML = "" + as18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + ast2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + ast3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + ast4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + ast2 + '%');
}
window.addEventListener('load', function() {
    document.querySelector(".asia").addEventListener('click', asia);
});

function australia() {
    document.querySelector(".continent").innerHTML = "<i>Australia</i>";
    document.querySelector(".continent2").innerHTML = "Australia";
    document.querySelector(".z1").innerHTML = "" + au18.toFixed(2);
    document.querySelector(".z2").innerHTML = "" + aut2.toFixed(2) + "%";
    document.querySelector(".z3").innerHTML = "" + aut3.toFixed(2) + "%";
    document.querySelector(".z4").innerHTML = "" + aut4.toFixed(2);
    document.querySelector('.chart').setAttribute('style', 'height:' + aut2 + '%');
}
window.addEventListener('load', function() {
    document.querySelector(".australia").addEventListener('click', australia);
});