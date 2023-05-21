export function createCard() {
  return `
  <div class="response-200">
  <div class="search-city">
    <div class="icon-location">
      <img src="/src/public/icons/location_on_FILL0_wght400_GRAD0_opsz48.svg" id="local"></img>
    </div>
    <div class="formulario">
      <form class="form-card">
        <input type="text" placeholder="Localização" class="input-location"/>
      </form>
    </div>
    <button class="btn" type="submit">
      <img src="/src/public/icons/search_FILL0_wght400_GRAD0_opsz48.svg" />
    </button>
  </div>
  <div class="weather-card">
    <img src="" id="clima" />
    <span class="descricao"></span>
    <span class="temperatura"></span>
  </div>
  <div class="weather-detalhes">
    <div class="umidade">
      <img src=""/src/public/icons/wind-2-svgrepo-com.svg" id="umidade-icon"></img>
      <div class="texto">
        <span id="">Umidade:</span>
        <span: id="percentage-umity"></span:>
      </div>
    </div>
    <div class="vento">
      <img src="/src/public/icons/wind-svgrepo-com.svg" id="vento-icon"></img>"
      <div class="texto">
        <span>Vento:</span>
        <span id="speed-wind"></span>
      </div>
    </div>
  </div>
</div>
`;
}

export function createCardError() {
  return `<div class="response-400">
  <h2>Localização não encontrada</h2>
  <img src="/src/public/imgs/404 Error with a cute animal-bro.svg">
</div>`;
}
