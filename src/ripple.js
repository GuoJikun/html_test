// ripple-button.js

// 定义 RippleButton 类继承自 HTMLElement
class RippleButton extends HTMLElement {
    constructor() {
        super();

        // 创建 Shadow DOM
        const shadow = this.attachShadow({ mode: "open" });

        // 创建组件的 HTML 结构
        const template = document.createElement("template");
        template.innerHTML = `
        <style>
        /* CSS 样式 */
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
    `;

        // 将 HTML 结构添加到 Shadow DOM 中
        shadow.appendChild(template.content.cloneNode(true));

        // 获取组件内的按钮元素
        this.buttonElement = shadow.querySelector(".ripple-button");

        // 监听按钮点击事件
        this.buttonElement.addEventListener(
            "click",
            this.createRipple.bind(this)
        );
    }

    createRipple(event) {
        // 创建水波纹效果的元素
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // 计算水波纹的位置
        const rect = this.buttonElement.getBoundingClientRect();
        const left = event.clientX - rect.left;
        const top = event.clientY - rect.top;
        console.log(rect, left, top);
        // 设置水波纹的位置和大小
        ripple.style.left = `${left}px`;
        ripple.style.top = `${top}px`;
        ripple.style.width = `${Math.max(rect.width, rect.height)}px`;
        ripple.style.height = `${Math.max(rect.width, rect.height)}px`;

        // 将水波纹元素添加到按钮内
        this.buttonElement.appendChild(ripple);

        // 添加动画类以触发水波纹效果
        ripple.classList.add("animate");

        // 在动画结束后移除水波纹元素
        ripple.addEventListener("animationend", () => {
            ripple.remove();
            console.log("animationend");
        });
    }
}

// 注册 RippleButton 组件

customElements.define("ripple-button", RippleButton);
