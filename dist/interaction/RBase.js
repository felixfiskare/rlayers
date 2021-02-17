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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var interaction_1 = require("ol/interaction");
var REvent_1 = require("../REvent");
var debug_1 = __importDefault(require("../debug"));
var RBase = (function (_super) {
    __extends(RBase, _super);
    function RBase(props, context) {
        var _a, _b;
        var _this = _super.call(this, props, context) || this;
        if (!((_b = (_a = _this.context) === null || _a === void 0 ? void 0 : _a.map) === null || _b === void 0 ? void 0 : _b.addInteraction))
            throw new Error('An interaction must be part of a map');
        _this.ol = _this.createOL(props);
        return _this;
    }
    RBase.prototype.createOL = function (props) {
        this.classProps = RBase.classProps;
        return new interaction_1.Interaction({ handleEvent: null });
    };
    RBase.prototype.refresh = function (prevProps) {
        var e_1, _a;
        try {
            for (var _b = __values(this.classProps), _c = _b.next(); !_c.done; _c = _b.next()) {
                var p = _c.value;
                if (prevProps && prevProps[p] !== this.props[p]) {
                    debug_1.default('Replacing interaction', this, prevProps);
                    this.context.map.removeInteraction(this.ol);
                    this.ol = this.createOL(this.props);
                    this.context.map.addInteraction(this.ol);
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        _super.prototype.refresh.call(this);
    };
    RBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.context.map.addInteraction(this.ol);
    };
    RBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.context.map.removeInteraction(this.ol);
    };
    RBase.classProps = [];
    return RBase;
}(REvent_1.RlayersBase));
exports.default = RBase;
//# sourceMappingURL=RBase.js.map