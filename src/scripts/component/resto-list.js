class RestoList extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <h1 class="title">JELAJAHI WARTEG!</h1>
        <article class="posts" id="post"></article>
      `;
    }
  }
  
  customElements.define('resto-list', RestoList);