"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Style_1 = __importDefault(require("ol/style/Style"));
var context_1 = require("../context");
var REvent_1 = require("../REvent");
var RStyle = (function (_super) {
    __extends(RStyle, _super);
    function RStyle(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.style = function (f) {
            if (_this.ol !== _this.style)
                return _this.ol;
            var style = new Style_1.default({});
            var render = (react_1.default.createElement("div", null,
                react_1.default.createElement(context_1.RStyleContext.Provider, { value: style }, _this.props.render(f))));
            react_dom_1.default.render(render, document.createElement('div'));
            return style;
        };
        if (_this.props.render)
            _this.ol = _this.style;
        else
            _this.ol = new Style_1.default({});
        return _this;
    }
    RStyle.prototype.refresh = function (prevProps) {
        _super.prototype.refresh.call(this, prevProps);
    };
    RStyle.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
    };
    RStyle.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
    };
    RStyle.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(context_1.RStyleContext.Provider, { value: this.ol }, this.props.render ? null : this.props.children)));
    };
    RStyle.getStyle = function (style) {
        if (style === null || style === undefined)
            return style;
        if (!Object.keys(style).includes('current'))
            return style;
        return function (f) { return style.current.style(f); };
    };
    return RStyle;
}(REvent_1.ReactLayersBase));
exports.default = RStyle;
//# sourceMappingURL=RStyle.js.map