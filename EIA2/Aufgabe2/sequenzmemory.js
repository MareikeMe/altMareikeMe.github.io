var Aufgabe2SequenceMemory;
(function (Aufgabe2SequenceMemory) {
    window.addEventListener("load", function () {
        this.document.querySelector("document").addEventListener("keydown", function () { });
        this.document.querySelector("#start").addEventListener("click", function () { });
        this.document.querySelector("#card").addEventListener("click", function () { });
    });
    function sequences() {
        var sentenceone = ["S", "e", "n", "t", "e", "n", "c", "e", " ", "o", "n", "e", "."];
    }
    function time() {
        var onemin = ["60", "59", "58"];
        var index = 0;
        var countdown = setInterval(1000);
        function playcountdown() {
            index++;
        }
    }
})(Aufgabe2SequenceMemory || (Aufgabe2SequenceMemory = {}));
//# sourceMappingURL=sequenzmemory.js.map