
window.addEventListener('load', function() {
    var sounds = ['./assets/kick.mp3', './assets/snare.mp3', './assets/hihat.mp3', './assets/F.mp3', './assets/G.mp3', './assets/A.mp3', './assets/C.mp3', './assets/laugh-1.mp3', './assets/laugh-2.mp3'];

    document.querySelector("#kick").addEventListener('click', function() {playsample(sounds[0]);} );
    document.querySelector("#snare").addEventListener('click', function() {playsample(sounds[1]);} );
    document.querySelector("#highhat").addEventListener('click', function() {playsample(sounds[2]);}) ;
    document.querySelector("#f").addEventListener('click', function() {playsample(sounds[3]);} );
    document.querySelector("#g").addEventListener('click', function() {playsample(sounds[4]);} );
    document.querySelector("#a").addEventListener('click', function() {playsample(sounds[5]);} );
    document.querySelector("#c").addEventListener('click', function() {playsample(sounds[6]);} );
    document.querySelector("#laugh1").addEventListener('click', function() {playsample(sounds[7]);} );
    document.querySelector("#laugh2").addEventListener('click', function() {playsample(sounds[8]);} );
    
    function playsample(audioFile){
        var sound:HTMLAudioElement = new Audio(audioFile);
        sound.play();
    };


    document.querySelector("#play").addEventListener('click', function() {
        setInterval(function() {
            playsample(sounds[0]);
        }, 750);
        setInterval(function() {
            playsample(sounds[1]);
        }, 1000);
        setInterval(function() {
            playsample(sounds[2]);
        }, 1500);
    });
})