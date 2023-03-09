
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
           width: 75%;
           padding: 6px;
           margin-top: 2%;
           margin-bottom: 8%;
           background-color: rgb(40, 140, 255);
           color: rgb(255, 255, 255);
           display: inline-block;
           border: none;
           font-size: 18px;
           position : relative;
           top: 3px;
       }
        #trash{
            position : relative;
            top: 3px;
            width: 23%;
            padding: 3px;
        }
        #icon{
            font-size: 19px;
            padding: 4px;
        }
   </style>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   <div class="card">
        <div>
           <slot name="ptitle"></slot>
           </div>
       <img/>
       <div class="container">
           <h3></h3>
           <p id="status"> Not Sold </p>
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
            this.pstatus = 'Sold';
            this.setAttribute('pstatus','Sold');
        }
        this.shadowRoot.getElementById('trash').addEventListener('click' , ()=>{
            this.remove();
        })
    }
    set pstatus(val){
        this.setAttribute('pstatus',val)
    }
    static get observedAttributes(){
        return ['pstatus'];
    }
    attributeChangedCallback(attr,oldVal,newVal){
        this.shadowRoot.querySelector('p').innerText = newVal;
    }
    disconnectedCallback(){
        alert(this.getAttribute('pname')+" Component Removed");             //when the component is removed , it is removed from the dom and at that time the disconnectedcallback() method is invoked
                                                                            // Explain the purpose of disconnectedCallback() life cycle method 
                                                                            // The code which is related to garbage collection (GC) or the code which you want to execute at the time of removal of the component
                                                                            // from the DOM that has to be configured inside disconnectedCallback() life cycle method

        this.shadowRoot.getElementById('trash').removeEventListener();
    }
}

window.customElements.define('product-card',ProductCard);