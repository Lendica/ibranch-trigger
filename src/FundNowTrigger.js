const fnTemplate = document.createElement('template');

const makeFNTemplate = elem => {
    const invoiceId = elem.getAttribute('invoice-id');
    const color = elem.getAttribute('color') || '#3c41e7';
    fnTemplate.setAttribute('id', 'fundnow-trigger');
    fnTemplate.innerHTML = `
    <style>
        :host * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Inter, Oxygen, 'Helvetica Neue', sans-serif;
            --cta-primary: ${color};
            --bg-white: #fcfcfd;
            --utl-grey: #bdbdc6;
        }
        :host {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0.5rem;
        }
        .trigger-button {
            background: var(--cta-primary);
            color: var(--bg-white);
            border: 1px solid var(--cta-primary);
            border-radius: 24px;
            padding: 0.4rem 0.6rem;
            margin-right: 0.2rem;
            cursor: pointer;
            font-size: 0.8rem;
            ${elem.dataset.style}
        }
        .trigger-button:hover {
            background: var(--bg-white);
            color: var(--cta-primary);
            border: 1px solid var(--cta-primary);
            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
        .wrapper {
            position: relative;
            cursor: pointer;
        }
        .info {
            font-size: 0.8rem;
            border: 0.75px solid var(--utl-grey);
            display: none;
            max-height: 100px;
            width: max-content;
            max-width: 240px;
            word-break: break-word;
            padding: 10px;
            background: rgba(252, 252, 253, 0.6);
            backdrop-filter: blur(8px);
            border-radius: 10px;
            opacity: 0;
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%, 0);
            z-index: 993;
        }
        .icon {
            display: flex;
            justify-content: center;
        }
        .icon:hover, .icon:focus {
            filter: hue-rotate(12deg) grayscale(0.5);
        }
        .icon:hover + .info, .icon:focus + .info {
            display: inline-block;
            opacity: 1;
            transition: 0.6s all;
        }
    </style>
    <button class="trigger-button" part="button"><slot name="button-text">FundNow<slot></button>
    <span class="wrapper">
        <a class="icon" part="icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
            >
                <path
                    d="M9.59375 5.96289H11.5938V7.96289H9.59375V5.96289ZM9.59375 9.96289H11.5938V15.9629H9.59375V9.96289ZM10.5938 0.962891C5.07375 0.962891 0.59375 5.44289 0.59375 10.9629C0.59375 16.4829 5.07375 20.9629 10.5938 20.9629C16.1137 20.9629 20.5938 16.4829 20.5938 10.9629C20.5938 5.44289 16.1137 0.962891 10.5938 0.962891ZM10.5938 18.9629C6.18375 18.9629 2.59375 15.3729 2.59375 10.9629C2.59375 6.55289 6.18375 2.96289 10.5938 2.96289C15.0037 2.96289 18.5938 6.55289 18.5938 10.9629C18.5938 15.3729 15.0037 18.9629 10.5938 18.9629Z"
                    fill=var(--cta-primary)
                />
            </svg>
        </a>
        <p class="info"><slot name="info">Lendica helps you free up cash flow with affordable finance, on demand. Click &#9432; to learn more.</slot></p>
    </span>
 `;
};

class FundNowTrigger extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        makeFNTemplate(this);
        this.shadowRoot.appendChild(fnTemplate.content.cloneNode(true));
    }

    handleTriggerClick(e) {
        e.preventDefault();
        if (!!window.lendica && window.lendica.isInitialized && this.hasValidInvoiceId) {
            window.lendica.ibranch.openFundNow(this.invoiceId);
        } else if (!!window.lendica) {
            window.lendica.ibranch.open();
        }
    }

    handleInfoClick(e) {
        e.preventDefault();
        if (!!window.lendica && window.lendica.isInitialized && this.hasValidInvoiceId) {
            window.lendica.ibranch.open(`learn-more`);
        } else if (!!window.lendica) {
            window.lendica.ibranch.open();
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            if (name === 'invoice-id') {
                this.invoiceId = newValue;
            }
        }
    }

    connectedCallback() {
        this.shadowRoot
            .querySelector('.trigger-button')
            .addEventListener(
                'click',
                this.hasAttribute('onclick') && typeof this.getAttribute('onclick') === 'function'
                    ? this.getAttribute('onclick')
                    : this.handleTriggerClick.bind(this)
            );

        this.shadowRoot
            .querySelector('.icon')
            .addEventListener('click', this.handleInfoClick.bind(this));
    }

    get hasValidInvoiceId() {
        return (
            this.hasAttribute('invoice-id') &&
            !!this.invoiceId &&
            typeof this.invoiceId === 'string'
        );
    }

    get invoiceId() {
        return this.getAttribute('invoice-id');
    }

    set invoiceId(value) {
        this.setAttribute('invoice-id', value);
    }

    static get observedAttributes() {
        return ['invoice-id', 'color'];
    }
}

window.customElements.define('fundnow-trigger', FundNowTrigger);