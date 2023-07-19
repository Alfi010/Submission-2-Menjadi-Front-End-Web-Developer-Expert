class RestoFavoriteLike extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <h1 class="favorite-title">FAVORITE WARTEG</h1>
        <article class="posts" id="post"></article>
      `;
    }
  }
  
  customElements.define('resto-favorite-like', RestoFavoriteLike);