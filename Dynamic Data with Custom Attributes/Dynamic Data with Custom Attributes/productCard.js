
const template = document.createElement('template');
template.innerHTML = `
        <style>
            img{
                width: 60%;
                height: 200px;
                margin: 20%;
                margin-bottom: 5%;
            }
            
            .card{
                margin-right: 35px;
                display: inline-block;
                width: 300px;
                height: 440px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            .container{
                padding: 2px 16px;
            }
            .btn{
                width: 100%;
                padding: 10px;
                margin-top: 2%;
                margin-bottom: 8%;
                background-color: rgb(40, 140, 255);
                color: rgb(255, 255, 255);
            
                border: none;
            }
            
            #p-container{
                padding-left: 50px;
            }
            #header{
                width: 99%;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 10px;
            }
            #title{
                color: rgb(140, 140, 140);
                margin: 25px;
            }
            #trash{
                position: relative;
                top:3px;
                width: 23%;
                padding: 3px;
            }
            #icon{
                font-size: 19px;
                padding: 4px;
            }
            
        </style>
        <div class="card">
           <img />
           <div class="container">
               <h3> </h3>
               <p id="status"> </p>
               <button class="btn"> Buy </button>
               <button class="btn" id="trash"><i class="fa fa-trash-o" id="icon"></i></button>
           </div>
       </div>
`;

class ProductCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('pname')+", "+this.getAttribute('price');
        this.shadowRoot.querySelector('img').src = this.getAttribute('pimg');
        this.shadowRoot.querySelector('p').innerText = this.getAttribute('pstatus');

    }
    connectedCallback(){
        this.shadowRoot.querySelector('button').onclick = ()=>{
            this.setAttribute('pstatus','Sold')
        }
    }
      static get observedAttributes(){
        return ['pstatus']                       // You can put an "if" condition before this and compare the old and new value(update the interface if there is change in the values otherwise you can skip it)
      }
    attributeChangedCallback(attr, oldVal, newVal){     // you need to add observedAttributes() method returns an array of all the attribute which you want to keep a watch on
       this.shadowRoot.querySelector('p').innerHTML = newVal;
     }

}    // When there is a change in the attribute i.e:- attribute added , removed, or modified - there is an attributeChangedCallback()
     // which gets executed 

     

window.customElements.define('product-card',ProductCard);