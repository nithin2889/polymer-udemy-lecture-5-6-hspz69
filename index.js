 import {LitElement, html} from '@polymer/lit-element';

class MyElement extends LitElement {

  _render() {
    return html`<h1>Polymer is GREAT<h1>`
  }
}

customElements.define('my-element', MyElement);