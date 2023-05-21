import puxarVariaveis from "./constantesCard.js";
import constantes from "./conts.js";
import { createCard } from "./createCard.js";
import { activateForm, desableInput, cardAtive } from "./executeFunctions.js";
import { fetchWeather } from "./fetchInicial.js";
import { updateCards } from "./updateCard.js";
export let variaveisCard;
export async function activeEventForm(event) {
    event.preventDefault();
    const cityName = variaveisCard.inputCard?.value;
    const data = await fazerFetch(cityName);
    if (data)
        verifyData(data);
}
export async function fazerFetch(cityName) {
    const data = await fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${constantes.keyapi}&units=metric`);
    return data;
}
export function verificarDataForm(data) {
    if (data) {
        const cardSearch = createCard();
        if (constantes.cardContainer)
            constantes.cardContainer.innerHTML = cardSearch;
        variaveisCard = puxarVariaveis();
        updateCards(data);
        activateForm();
        desableInput();
        cardAtive();
        setTimeout(() => {
            if (constantes.cardContainer) {
                constantes.cardContainer.style.opacity = "1";
                constantes.cardContainer.classList.remove("visible");
                variaveisCard.cardSearch?.classList.add("visible");
            }
        }, 200);
    }
}
export function verifyData(data) {
    const cardContainer = constantes.cardContainer;
    if (data) {
        cardContainer?.classList.add("animation");
        setTimeout(() => {
            cardContainer?.classList.remove("animation");
        }, 200);
        updateCards(data);
    }
}
