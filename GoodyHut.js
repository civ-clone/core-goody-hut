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
var _ruleRegistry, _tile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodyHut = void 0;
const ActionPerformed_1 = require("./Rules/ActionPerformed");
const Discovered_1 = require("./Rules/Discovered");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("./Rules/Action");
class GoodyHut {
    constructor(tile, ruleRegistry = RuleRegistry_1.instance) {
        _ruleRegistry.set(this, void 0);
        _tile.set(this, void 0);
        __classPrivateFieldSet(this, _ruleRegistry, ruleRegistry);
        __classPrivateFieldSet(this, _tile, tile);
    }
    action(action) {
        action.perform();
        __classPrivateFieldGet(this, _ruleRegistry).process(ActionPerformed_1.ActionPerformed, this, action);
    }
    actions(unit) {
        return __classPrivateFieldGet(this, _ruleRegistry).process(Action_1.default, this, unit);
    }
    process(unit) {
        __classPrivateFieldGet(this, _ruleRegistry).process(Discovered_1.Discovered, this, unit);
    }
    tile() {
        return __classPrivateFieldGet(this, _tile);
    }
}
exports.GoodyHut = GoodyHut;
_ruleRegistry = new WeakMap(), _tile = new WeakMap();
exports.default = GoodyHut;
//# sourceMappingURL=GoodyHut.js.map