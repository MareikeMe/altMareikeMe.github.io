function playsample(sample: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + sample + ".mp3");
    sound.play();
}

function beat (): void {
    var names: string [] = ["kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat", "kick", "snare", "kick", "hihat"];
    var index: number = 0;
    var track = setInterval (play, 500);

    function play (): void {
        var playAudio = new Audio("assets/" + names[index] + ".mp3");
        playAudio.play();
        index++;
    }
}

window.addEventListener("load", function (): void {
    document.querySelector("#kick").addEventListener("click", function (): void { playsample("kick"); });
    document.querySelector("#snare").addEventListener("click", function (): void { playsample("snare"); });
    document.querySelector("#highhat").addEventListener("click", function (): void { playsample("hihat"); });
    document.querySelector("#f").addEventListener("click", function (): void { playsample("C"); });
    document.querySelector("#g").addEventListener("click", function (): void { playsample("F"); });
    document.querySelector("#a").addEventListener("click", function (): void { playsample("G"); });
    document.querySelector("#c").addEventListener("click", function (): void { playsample("A"); });
    document.querySelector("#laugh1").addEventListener("click", function (): void { playsample("laugh-1"); });
    document.querySelector("#laugh2").addEventListener("click", function (): void { playsample("laugh-2"); });

    document.querySelector("#play").addEventListener("click", beat);
});