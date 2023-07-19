class AppHero extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
      <div class="hero">
        <div class="heroinner">
          <h1>WARTEG ONLINE</h1>
          <p>Jelajahi Warung Tegal Terdekat Dalam Satu Tampilan!</p>
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('app-hero', AppHero);