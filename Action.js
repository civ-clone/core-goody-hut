"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Action_goodyHut, _Action_unit;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor(goodyHut, unit) {
        _Action_goodyHut.set(this, void 0);
        _Action_unit.set(this, void 0);
        __classPrivateFieldSet(this, _Action_goodyHut, goodyHut, "f");
        __classPrivateFieldSet(this, _Action_unit, unit, "f");
    }
    goodyHut() {
        return __classPrivateFieldGet(this, _Action_goodyHut, "f");
    }
    perform() { }
    unit() {
        return __classPrivateFieldGet(this, _Action_unit, "f");
    }
}
exports.Action = Action;
_Action_goodyHut = new WeakMap(), _Action_unit = new WeakMap();
exports.default = Action;
//# sourceMappingURL=Action.js.map