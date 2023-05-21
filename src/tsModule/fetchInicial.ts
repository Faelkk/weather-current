import constantes, { puxarErroCard } from "./conts.js";
import { createCardError } from "./createCard.js";

export interface MainData {
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  humidity: number;
}

export interface WeatherData {
  description: string;
  main: string;
}

export interface WindData {
  speed: number;
}

export interface DataApi {
  main: MainData;
  weather: WeatherData[];
  wind: WindData;
  name: string;
}

export let variavelCardErro: HTMLDivElement;
export async function fetchWeather(url: string) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data: DataApi = await response.json();
      return data;
    } else {
      throw new Error("Erro");
    }
  } catch (error) {
    const cardError = createCardError();
    if (constantes.cardContainer) {
      constantes.cardContainer.innerHTML = cardError;
      if (constantes.nameCity) constantes.nameCity.textContent = "";
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
