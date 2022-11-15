var u=Object.defineProperty;var c=(r,t,n)=>t in r?u(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;var l=(r,t,n)=>(c(r,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();class d extends HTMLElement{constructor(){super();l(this,"shadowRef");this.__init(),this.beforeMount()}__init(){const n=document.createElement("template");n.innerHTML=`<style>${this.style()}</style>${this.render()}`,this.shadowRef=this.attachShadow({mode:"open"}),this.shadowRef.appendChild(n.content.cloneNode(!0))}beforeMount(){}style(){return":host{display:block;}"}render(){return"<slot></slot>"}}class a extends d{constructor(){super()}style(){return`
        :host{
            display: inline-block;
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
        }
        `}render(){return'<button id="button"><slot></slot></button>'}beforeMount(){this.shadowRef.querySelector("#button").addEventListener("click",()=>{window.history.go(-1)})}}class f extends d{constructor(){super()}style(){return`
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
        }
        :host(:not(:last-child)) {
            margin-right: 12px;
        }
        `}render(){return"<slot></slot>"}}window.customElements.get("ivy-back")||window.customElements.define("ivy-back",a);window.customElements.get("ivy-button")||window.customElements.define("ivy-button",f);
