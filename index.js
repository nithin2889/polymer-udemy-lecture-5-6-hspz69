import { LitElement, html } from "@polymer/lit-element";

class MyElement extends LitElement {
  _didRender() {
    console.log('did render');
  }

  _firstRendered() {
    console.log('first rendered');
    addEventListener("hello", () => {
      console.log("added event listener");
    });
  }

  sayHi() {
    console.log("Hello");
    this.dispatchEvent(new CustomEvent("hello", {bubbles:true, composed: true}));
  }

  _render({ mood }) {
    return html`
      <button on-click="${this.sayHi}">Say HI</button>
    `;
  }
}

customElements.define("my-element", MyElement);
