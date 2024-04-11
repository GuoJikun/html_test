import Ele, { Component } from "./utils.js";

// @Component("ivy-back")
class Back extends Ele {
    constructor() {
        super();
    }

    style() {
        return `
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
        `;
    }

    render() {
        return `<button id="button"><slot>返回上一页</slot></button>`;
    }

    beforeMount() {
        this.shadowRef
            .querySelector("#button")
            .addEventListener("click", () => {
                window.history.go(-1);
            });
    }
}

class Button extends Ele {
    constructor() {
        super();
    }

    style() {
        return `
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
        `;
    }

    render() {
        return `<slot></slot>`;
    }
}

if (!window.customElements.get("ivy-back")) {
    window.customElements.define("ivy-back", Back);
}
if (!window.customElements.get("ivy-button")) {
    window.customElements.define("ivy-button", Button);
}
