namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#sqmmow");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displaySquarmeters);
    }

    function handleChange(_event: Event): void {
       

        let cart: HTMLDivElement = <HTMLDivElement>document.querySelector("div#cart");
        cart.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let article: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  article[1] + "']");
            let price: number = Number(article.getAttribute("price"));

            cart.innerHTML += article.name + "  € " + price;
        }
    }

    function displaySquarmeters(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}