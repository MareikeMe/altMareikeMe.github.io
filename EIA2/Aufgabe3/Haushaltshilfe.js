var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#form");
        var slider = document.querySelector("input#sqmmow");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displaySquarmeters);
    }
    function handleChange(_event) {
        var cart = document.querySelector("div#cart");
        cart.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var article = document.querySelector("[value='" + article[1] + "']");
            var price = Number(article.getAttribute("price"));
            cart.innerHTML += article.name + "  € " + price;
        }
    }
    function displaySquarmeters(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=Haushaltshilfe.js.map