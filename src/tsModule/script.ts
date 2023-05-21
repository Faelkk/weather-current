import constantes from "./conts.js";
import { fazerFetch, verificarDataForm } from "./listenerForm.js";

constantes.form?.addEventListener("submit", cardEvent);
export async function cardEvent(event: Event) {
  event.preventDefault();
  const cityName = constantes.input?.value;
  if (constantes.input) {
    constantes.input.value = "";
  }
  const data = await fazerFetch(cityName);
  if (data) verificarDataForm(data);
}
