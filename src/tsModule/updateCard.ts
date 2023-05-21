import { DataApi } from "./fetchInicial";
import constantes from "./conts.js";
import { variaveisCard } from "./listenerForm.js";
let isVisible: boolean;
let firstTime: boolean;
const weatherImages = {
  rain: "/src/public/imgs/clear.png",
  clear: "/src/public/imgs/clear.png",
  clouds: "/src/public/imgs/clear.png",
  snow: "/src/public/imgs/clear.png",
  mist: "/src/public/imgs/clear.png",
};

export function updateCards(data: DataApi) {
  const { wind, main, weather } = data;

  const windSpeed = (wind.speed * 3.6).toFixed(1);
  if (
    variaveisCard.spanSpeed &&
    variaveisCard.spanUmity &&
    variaveisCard.spanTemp &&
    variaveisCard.spanDescription
  ) {
    variaveisCard.spanSpeed.innerHTML = `${windSpeed}Km/h`;
    variaveisCard.spanUmity.innerHTML = `${main.humidity}%`;
    variaveisCard.spanTemp.innerHTML = `${main.temp.toFixed(0)}°C`;
    variaveisCard.spanDescription.innerHTML = weather[0].description;
    isVisible = true;
  }

  const weatherMain = weather[0].main.toLowerCase();
  if (variaveisCard.imgIcon instanceof HTMLImageElement) {
    variaveisCard.imgIcon.src =
      weatherImages[weatherMain as keyof typeof weatherImages] || "";
  }
  if (constantes.nameCity) constantes.nameCity.textContent = data.name;
  const nameTimeOut = setInterval(() => {
    if (isVisible === true) {
      if (firstTime !== true) {
        firstTime = true;
        constantes.nameCity?.classList.add("active");
        setTimeout(() => {
          constantes.nameCity?.classList.remove("active");
        }, 500);
      } else {
        constantes.nameCity?.classList.add("animation");
        setTimeout(() => {
          constantes.nameCity?.classList.remove("animation");
        }, 500);
      }
      if (constantes.nameCity) constantes.nameCity.style.opacity = "1";
      clearInterval(nameTimeOut);
    }
  });
}
