var c=Object.defineProperty;var u=(n,o,r)=>o in n?c(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r;var l=(n,o,r)=>(u(n,typeof o!="symbol"?o+"":o,r),r);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class d extends HTMLElement{constructor(){super();l(this,"shadowRef");this.__init(),this.beforeMount()}__init(){const r=document.createElement("template");r.innerHTML=`<style>${this.style()}</style>${this.render()}`,this.shadowRef=this.attachShadow({mode:"open"}),this.shadowRef.appendChild(r.content.cloneNode(!0))}beforeMount(){}style(){return":host{display:block;}"}render(){return"<slot></slot>"}}class a extends d{constructor(){super()}style(){return`
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
        `}render(){return'<button id="button"><slot>\u8FD4\u56DE\u4E0A\u4E00\u9875</slot></button>'}beforeMount(){this.shadowRef.querySelector("#button").addEventListener("click",()=>{window.history.go(-1)})}}class p extends d{constructor(){super()}style(){return`
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
        `}render(){return"<slot></slot>"}}window.customElements.get("ivy-back")||window.customElements.define("ivy-back",a);window.customElements.get("ivy-button")||window.customElements.define("ivy-button",p);
