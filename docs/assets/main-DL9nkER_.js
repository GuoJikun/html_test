var d=Object.defineProperty;var u=(t,o,i)=>o in t?d(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i;var l=(t,o,i)=>u(t,typeof o!="symbol"?o+"":o,i);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();class c extends HTMLElement{constructor(){super();l(this,"shadowRef");this.__init(),this.beforeMount()}__init(){const i=document.createElement("template");i.innerHTML=`<style>${this.style()}</style>${this.render()}`,this.shadowRef=this.attachShadow({mode:"open"}),this.shadowRef.appendChild(i.content.cloneNode(!0))}beforeMount(){}style(){return":host{display:block;}"}render(){return"<slot></slot>"}}class a extends c{constructor(){super()}style(){return`
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
        `}render(){return'<button id="button"><slot>返回上一页</slot></button>'}beforeMount(){this.shadowRef.querySelector("#button").addEventListener("click",()=>{window.history.go(-1)})}}class p extends c{constructor(){super()}style(){return`
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
        :host(:active){
            border-color: var(--color-primary-light);
            color: var(--color-primary-light);
        }
        :host(:last-child) {
            margin-right: 0;
        }

        :host([size="small"]){
            border-radius: 4px;
            line-height: 28px;
            height: 28px;
            padding: 0 12px;
            font-size: 12px;
        }
        `}render(){return"<slot></slot>"}}window.customElements.get("ivy-back")||window.customElements.define("ivy-back",a);window.customElements.get("ivy-button")||window.customElements.define("ivy-button",p);
