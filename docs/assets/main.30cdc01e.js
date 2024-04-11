var s=Object.defineProperty;var i=(o,t,e)=>t in o?s(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var r=(o,t,e)=>(i(o,typeof t!="symbol"?t+"":t,e),e);class n extends HTMLElement{constructor(){super();r(this,"shadowRef");this.__init(),this.beforeMount()}__init(){const e=document.createElement("template");e.innerHTML=`<style>${this.style()}</style>${this.render()}`,this.shadowRef=this.attachShadow({mode:"open"}),this.shadowRef.appendChild(e.content.cloneNode(!0))}beforeMount(){}style(){return":host{display:block;}"}render(){return"<slot></slot>"}}class l extends n{constructor(){super()}style(){return`
        :host{
            display: block;
        }
        button{
            outline: none;
            box-sizing: border-box;
            border: 1px solid #d1d9df;
            border-radius: 4px;
            line-height: 32px;
            height: 32px;
            padding: 0 16px;
            font-size: 13px;
            color: #333;
            transition: border-color 0.2s, color: 0.2s;
        }
        button:hover{
            border-color: var(--color-primary);
            color: var(--color-primary);
        }
        `}render(){return'<button id="button"><slot>\u8FD4\u56DE\u4E0A\u4E00\u9875</slot></button>'}beforeMount(){this.shadowRef.querySelector("#button").addEventListener("click",()=>{window.history.go(-1)})}}class d extends n{constructor(){super()}style(){return`
        :host{
            display: inline-block;
            outline: none;
            box-sizing: border-box;
            border: 1px solid #d1d9df;
            border-radius: 4px;
            line-height: 32px;
            height: 32px;
            padding: 0 16px;
            font-size: 13px;
            color: current-color;
            cursor: pointer;
            margin-right: 12px;
            transition: border-color 0.2s, color: 0.2s;
        }
        :host(:hover){
            border-color: var(--color-primary);
            color: var(--color-primary);
        }
        :host(:last-child) {
            margin-right: 0;
        }
        `}render(){return"<slot></slot>"}}window.customElements.get("ivy-back")||window.customElements.define("ivy-back",l);window.customElements.get("ivy-button")||window.customElements.define("ivy-button",d);
