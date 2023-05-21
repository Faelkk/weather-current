import constantes from "./conts.js";
import { activeEventForm, variaveisCard } from "./listenerForm.js";

export function desableInput() {
  constantes.form?.classList.add("inativo");
}

export function cardAtive() {
  constantes.cardContainer?.classList.add("visible");
}

export function activateForm() {
  variaveisCard.formCard?.addEventListener("submit", activeEventForm);
}
