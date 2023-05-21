const constantes: constantesTypes = {
  cardContainer: document.querySelector(".container-cards"),
  keyapi: "a6793aa4d317757109a57584cfa26099",
  form: document.querySelector(".container-form"),
  input: document.querySelector(".input-clima"),
  nameCity: document.querySelector("#name-city"),
};

export function puxarErroCard(): { cardError: HTMLDivElement } {
  return {
    cardError: document.querySelector(".response-400") as HTMLDivElement,
  };
}
interface constantesTypes {
  cardContainer: HTMLDivElement | null;
  keyapi: string;
  form: HTMLFormElement | null;
  input: HTMLInputElement | null;
  nameCity: HTMLTextAreaElement | null;
}

export default constantes;
