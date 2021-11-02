import { css, html } from 'lit';
import { SimpleColors } from '@lrnwebcomponents/simple-colors';

export class CardHeader extends SimpleColors {
  static get tag() {
    return "card-header";
  }

  // CSS - specific to Lit
  static get styles() {
    return [...super.styles,
    css`
        :host{
        display: block;
        height: var(--header-height,inherit);
        width: var(--header-width,inherit);
        border-style: solid;
        border-color: black;
        border-width: 1px;
        background-color: var(--simple-colors-default-theme-accent-6,black);
        overflow: hidden;
        }
        .header-content{
            display: flex;
            height: inherit;
            width: inherit;
            align-items: center;
        }
        .header-text-box{
            width: 70%;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            font-size: var(--heading-font-size,30px);
        }
        h2{margin:1px;}
        h3{margin:1px;}
        
        :host([toggle=true]) .header-icon:hover{cursor:pointer}       
      `];
  }

  static get properties() {
    return {
      ...super.properties,
      type: { type: String, reflect: true },
      iconScale: { type: String, attribute: "icon-scale" },
      height: { type: String, reflect: true },
      width: { type: String, reflect: true },
      heading: { type: String, reflect: true },
      subHeading: { type: String, attribute: "sub-heading", reflect: true },
      fontSize: { type: String, attribute: "font-size" },
      toggle: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.type = "math";
    this.icon = "lightbulb"
    this.height = "inherit";
    this.width = "inherit";
    this.heading = "Heading";
    this.subHeading = "sub heading";
    this.accentColor = "grey";
    this.fontSize = "30px";
    this.toggle = false;
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "type" && this[propName] === "science") {
        this.myIcon = "beaker";
      }
      this.style.setProperty("--heading-font-size", this.fontSize);
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
      this.style.setProperty("--heading-font-size", this.fontSize);
    }
  }

  // HTML - specific to Lit
  render() {
    return html` 
        <div class="header-content">
          <card-icon class="header-icon" type="${this.type}" icon-width="30%" icon-height="auto"></card-icon>
          <div class="header-text-box">
          <h2>${this.heading}</h2>
          <h3>${this.subHeading}</h3>
          </div>
        </div>
     `;
  }
}



