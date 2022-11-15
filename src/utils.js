export function Component(tag) {
    return function (target) {
        console.log(target);

        if (!window.customElements.get(tag)) {
            window.customElements.define(
                tag,
                class extends target {
                    constructor() {
                        HTMLElement.super();
                        super();
                    }
                }
            );
        }
    };
}

export default class extends HTMLElement {
    shadowRef;
    constructor() {
        super();
        this.__init();
        this.beforeMount();
    }
    __init() {
        const template = document.createElement("template");
        template.innerHTML = `<style>${this.style()}</style>${this.render()}`;
        this.shadowRef = this.attachShadow({
            mode: "open",
        });

        this.shadowRef.appendChild(template.content.cloneNode(true));
    }
    /**constructor 生命周期执行 */
    beforeMount() {}

    style() {
        return `:host{display:block;}`;
    }
    render() {
        return `<slot></slot>`;
    }
}
