const template = document.createElement('template');
template.innerHTML = `
<style>
  h1{
    color:red;
  }
</style>
<h1>Product Component</h1>`;

class ProductCard extends HTMLElement{
    constructor(){
        super();
        const h1 = document.createElement('h1');
       
        this.attachShadow({mode:'open'}); // When you have to add elements of the web component to shadow dom, you are going to use the shadowRoot()
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // Because the shadow dom is activated , we have different scope for the web component

        // Open means the current page can access the shadow DOM via Javascript
    }
}


window.customElements.define('product-card',ProductCard)

// How to create a component -
/*
- create a class
- Extend it from HTMLElement base class,
- Define the required HTML for your component in constructor();
- and with html template
- Define the custom element using customElements.define() method




*/