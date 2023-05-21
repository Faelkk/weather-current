const constantes = {
    cardContainer: document.querySelector(".container-cards"),
    keyapi: "a6793aa4d317757109a57584cfa26099",
    form: document.querySelector(".container-form"),
    input: document.querySelector(".input-clima"),
    nameCity: document.querySelector("#name-city"),
};
export function puxarErroCard() {
    return {
        cardError: document.querySelector(".response-400"),
    };
}
export default constantes;
