"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var plTemplate = document.createElement("template");
var makePLTemplate = function makePLTemplate(elem) {
  var color = elem.getAttribute("color") || "#3c41e7";
  plTemplate.setAttribute("id", "paylater-trigger");
  plTemplate.innerHTML = "\n    <style>\n        :host * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: system-ui, -apple-system, BlinkMacSystemFont,\n            'Segoe UI', Inter, Oxygen, 'Helvetica Neue', sans-serif;\n            --cta-primary: ".concat(color, ";\n            --bg-white: #fcfcfd;\n            --utl-grey: #bdbdc6;\n        }\n        :host {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            margin: 0.5rem;\n        }\n        .trigger-button {\n            background: var(--cta-primary);\n            color: var(--bg-white);\n            border: 1px solid var(--cta-primary);\n            border-radius: 24px;\n            padding: 0.4rem 0.6rem;\n            margin-right: 0.2rem;\n            cursor: pointer;\n            font-size: 0.8rem;\n            ").concat(elem.dataset.style, "\n        }\n        .trigger-button:hover {\n            background: var(--bg-white);\n            color: var(--cta-primary);\n            border: 1px solid var(--cta-primary);\n            transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n        }\n        .wrapper {\n            position: relative;\n            cursor: pointer;\n        }\n        .info {\n            font-size: 0.8rem;\n            border: 0.75px solid var(--utl-grey);\n            display: none;\n            max-height: 100px;\n            width: max-content;\n            max-width: 240px;\n            word-break: break-word;\n            padding: 10px;\n            background: rgba(252, 252, 253, 0.6);\n            backdrop-filter: blur(8px);\n            border-radius: 10px;\n            opacity: 0;\n            position: absolute;\n            bottom: 30px;\n            left: 50%;\n            transform: translate(-50%, 0);\n            z-index: 993;\n        }\n        .icon {\n            display: flex;\n            justify-content: center;\n        }\n        .icon:hover, .icon:focus {\n            filter: hue-rotate(12deg) grayscale(0.5);\n        }\n        .icon:hover + .info, .icon:focus + .info {\n            display: inline-block;\n            opacity: 1;\n            transition: 0.6s all;\n        }\n    </style>\n    <button class=\"trigger-button\" part=\"button\"><slot name=\"button-text\">PayLater<slot></button>\n    <span class=\"wrapper\">\n        <a class=\"icon\" part=\"icon\">\n            <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"21\"\n                height=\"21\"\n                viewBox=\"0 0 21 21\"\n                fill=\"none\"\n            >\n                <path\n                    d=\"M9.59375 5.96289H11.5938V7.96289H9.59375V5.96289ZM9.59375 9.96289H11.5938V15.9629H9.59375V9.96289ZM10.5938 0.962891C5.07375 0.962891 0.59375 5.44289 0.59375 10.9629C0.59375 16.4829 5.07375 20.9629 10.5938 20.9629C16.1137 20.9629 20.5938 16.4829 20.5938 10.9629C20.5938 5.44289 16.1137 0.962891 10.5938 0.962891ZM10.5938 18.9629C6.18375 18.9629 2.59375 15.3729 2.59375 10.9629C2.59375 6.55289 6.18375 2.96289 10.5938 2.96289C15.0037 2.96289 18.5938 6.55289 18.5938 10.9629C18.5938 15.3729 15.0037 18.9629 10.5938 18.9629Z\"\n                    fill=var(--cta-primary)\n                />\n            </svg>\n        </a>\n        <p class=\"info\"><slot name=\"info\">Lendica helps you free up cash flow with affordable finance, on demand. Click &#9432; to learn more.</slot></p>\n    </span>\n ");
};
var PayLaterTrigger = /*#__PURE__*/function (_HTMLElement) {
  _inherits(PayLaterTrigger, _HTMLElement);
  var _super = _createSuper(PayLaterTrigger);
  function PayLaterTrigger() {
    var _this;
    _classCallCheck(this, PayLaterTrigger);
    _this = _super.call(this);
    _this.attachShadow({
      mode: "open"
    });
    makePLTemplate(_assertThisInitialized(_this));
    _this.shadowRoot.appendChild(plTemplate.content.cloneNode(true));
    return _this;
  }
  _createClass(PayLaterTrigger, [{
    key: "handleTriggerClick",
    value: function handleTriggerClick(e) {
      e.preventDefault();
      if (!!window.lendica && window.lendica.isInitialized && this.hasValidBillId) {
        window.lendica.ibranch.openPayLater(this.billId, this.total);
      } else if (!!window.lendica) {
        window.lendica.ibranch.open();
      }
    }
  }, {
    key: "handleInfoClick",
    value: function handleInfoClick(e) {
      e.preventDefault();
      if (!!window.lendica && window.lendica.isInitialized && this.hasValidBillId) {
        window.lendica.ibranch.open("learn-more");
      } else if (!!window.lendica) {
        window.lendica.ibranch.open();
      }
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (newValue !== oldValue) {
        if (name === "bill-id") {
          this.billId = newValue;
        }
        if (name === "total") {
          this.total = this.processTotal(newValue);
        }
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.shadowRoot.querySelector(".trigger-button").addEventListener("click", this.hasAttribute("onclick") && typeof this.getAttribute("onclick") === "function" ? this.getAttribute("onclick") : this.handleTriggerClick.bind(this));
      this.shadowRoot.querySelector(".icon").addEventListener("click", this.handleInfoClick.bind(this));
    }
  }, {
    key: "hasValidBillId",
    get: function get() {
      return this.hasAttribute("bill-id") && !!this.billId && typeof this.billId === "string";
    }
  }, {
    key: "billId",
    get: function get() {
      return this.getAttribute("bill-id");
    },
    set: function set(value) {
      this.setAttribute("bill-id", value);
    }
  }, {
    key: "total",
    get: function get() {
      return this.getAttribute("total");
    },
    set: function set(value) {
      this.setAttribute("total", value);
    }
  }, {
    key: "processTotal",
    value: function processTotal(total) {
      if (total && typeof total === "string") {
        var parsedTotal = parseFloat(total.replace(/[^\d.]/g, ""));
        if (isNaN(parsedTotal)) {
          return undefined;
        }
        return parsedTotal.toFixed(2);
      }
      if (total && typeof total === "number") {
        return Math.abs(total).toFixed(2);
      }
      return undefined;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["bill-id", "total", "color"];
    }
  }]);
  return PayLaterTrigger;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
window.customElements.define("paylater-trigger", PayLaterTrigger);