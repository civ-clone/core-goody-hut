"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _goodyHut, _unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor(goodyHut, unit) {
        _goodyHut.set(this, void 0);
        _unit.set(this, void 0);
        __classPrivateFieldSet(this, _goodyHut, goodyHut);
        __classPrivateFieldSet(this, _unit, unit);
    }
    goodyHut() {
        return __classPrivateFieldGet(this, _goodyHut);
    }
    perform() { }
    unit() {
        return __classPrivateFieldGet(this, _unit);
    }
}
exports.Action = Action;
_goodyHut = new WeakMap(), _unit = new WeakMap();
exports.default = Action;
//# sourceMappingURL=Action.js.map