import"./modulepreload-polyfill.c7c6310f.js";class l extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),t=document.createElement("template");t.innerHTML=`
        <style>
        /* CSS \u6837\u5F0F */
        .ripple-button {
            position: relative;
            display: inline-block;
            padding: 8px 24px;
            background-color: #2196F3;
            color: #fff;
            border: none;
            cursor: pointer;
            overflow: hidden;
            box-sizing: border-box;
        }

        


        @keyframes rippleEffect {
            form{
                width: 0;
                height: 0;
                opacity: 0;
            }
            to {
                width: 200%;
                height: 200%;
                opacity: 0.4;
                transform-origin: center center;
            }
        }
        .ripple{
            position: absolute;
            background: red;
            border-radius: 50%;
            width: 0;
            height: 0
            display: block;
        }
        .animate {
            animation: rippleEffect 1s linear;
        }
        </style>
        
        <button class="ripple-button">
            <slot></slot>
        </button>
    `,n.appendChild(t.content.cloneNode(!0)),this.buttonElement=n.querySelector(".ripple-button"),this.buttonElement.addEventListener("click",this.createRipple.bind(this))}createRipple(n){const t=document.createElement("span");t.classList.add("ripple");const e=this.buttonElement.getBoundingClientRect(),o=n.clientX-e.left,i=n.clientY-e.top;console.log(e,o,i),t.style.left=`${o}px`,t.style.top=`${i}px`,t.style.width=`${Math.max(e.width,e.height)}px`,t.style.height=`${Math.max(e.width,e.height)}px`,this.buttonElement.appendChild(t),t.classList.add("animate"),t.addEventListener("animationend",()=>{t.remove(),console.log("animationend")})}}customElements.define("ripple-button",l);
