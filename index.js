 import {LitElement, html} from '@polymer/lit-element';
 import "@polymer/paper-checkbox/paper-checkbox.js"

class MyElement extends LitElement {

  static get properties() { return { mood: String }}

  _render({ mood }) {
    return html`
      <style>
        div {background-color: grey}
      </style>
      <div class="test">
        Web components are <span class="mood">${mood}</span>!<br>
        <paper-checkbox>Ready to deploy</paper-checkbox>
      </div>`;
  }
}

customElements.define('my-element', MyElement);