import constantes, { puxarErroCard } from "./conts.js";
import { createCardError } from "./createCard.js";
export let variavelCardErro;
export async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            throw new Error("Erro");
        }
    }
    catch (error) {
        const cardError = createCardError();
        if (constantes.cardContainer) {
            constantes.cardContainer.innerHTML = cardError;
            if (constantes.nameCity)
                constantes.nameCity.textContent = "";
            const variavelCardErro = puxarErroCard();
            variavelCardErro.cardError?.classList.add("error");
            setTimeout(() => {
                if (constantes.cardContainer) {
                    constantes.cardContainer.innerHTML = "";
                }
                constantes.form?.classList.remove("inativo");
            }, 2000);
        }
    }
}
