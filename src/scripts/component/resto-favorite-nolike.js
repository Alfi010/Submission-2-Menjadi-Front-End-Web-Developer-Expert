class RestoFavoriteNolike extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <h1 class="favorite-title">FAVORITE WARTEG</h1>
      `;
    }
  }
  
  customElements.define('resto-favorite-nolike', RestoFavoriteNolike);