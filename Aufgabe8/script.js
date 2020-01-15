function playsample(sample) {
    var sound = new Audio("assets/" + sample + ".mp3");
    sound.play();
}
function beat() {
    var names = ["kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat"];
    var index = 0;
    var track = setInterval(play, 500);
    function play() {
        var playAudio = new Audio("assets/" + names[index] + ".mp3");
        playAudio.play();
        index++;
    }
}
window.addEventListener("load", function () {
    document.querySelector("#kick").addEventListener("click", function () { playsample("kick"); });
    document.querySelector("#snare").addEventListener("click", function () { playsample("snare"); });
    document.querySelector("#highhat").addEventListener("click", function () { playsample("hihat"); });
    document.querySelector("#f").addEventListener("click", function () { playsample("C"); });
    document.querySelector("#g").addEventListener("click", function () { playsample("F"); });
    document.querySelector("#a").addEventListener("click", function () { playsample("G"); });
    document.querySelector("#c").addEventListener("click", function () { playsample("A"); });
    document.querySelector("#laugh1").addEventListener("click", function () { playsample("laugh-1"); });
    document.querySelector("#laugh2").addEventListener("click", function () { playsample("laugh-2"); });
    document.querySelector("#play").addEventListener("click", beat);
});
//# sourceMappingURL=script.js.map