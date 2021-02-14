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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var style_1 = require("ol/style");
var context_1 = require("../context");
var RImage_1 = __importDefault(require("./RImage"));
var RCircle = (function (_super) {
    __extends(RCircle, _super);
    function RCircle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RCircle.prototype.create = function (props) {
        this.classProps = RCircle.classProps.concat(RImage_1.default.classProps);
        return new style_1.Circle(__assign(__assign({}, props), { stroke: this.stroke, fill: this.fill }));
    };
    RCircle.prototype.setStroke = function (s) {
        this.stroke = s;
        this.ol = this.create(this.props);
        _super.prototype.set.call(this, this.ol);
    };
    RCircle.prototype.setFill = function (f) {
        this.fill = f;
        this.ol = this.create(this.props);
        _super.prototype.set.call(this, this.ol);
    };
    RCircle.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(context_1.RStyleContext.Provider, { value: this }, this.props.children)));
    };
    RCircle.classProps = ['radius'];
    return RCircle;
}(RImage_1.default));
exports.default = RCircle;
//# sourceMappingURL=RCircle.js.map