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
var _GoodyHut_ruleRegistry, _GoodyHut_tile;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodyHut = void 0;
const DataObject_1 = require("@civ-clone/core-data-object/DataObject");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("./Rules/Action");
const ActionPerformed_1 = require("./Rules/ActionPerformed");
const Discovered_1 = require("./Rules/Discovered");
class GoodyHut extends DataObject_1.DataObject {
    constructor(tile, ruleRegistry = RuleRegistry_1.instance) {
        super();
        _GoodyHut_ruleRegistry.set(this, void 0);
        _GoodyHut_tile.set(this, void 0);
        __classPrivateFieldSet(this, _GoodyHut_ruleRegistry, ruleRegistry, "f");
        __classPrivateFieldSet(this, _GoodyHut_tile, tile, "f");
        this.addKey('tile');
    }
    action(action) {
        __classPrivateFieldGet(this, _GoodyHut_ruleRegistry, "f").process(ActionPerformed_1.default, this, action);
        action.perform();
    }
    actions(unit) {
        return __classPrivateFieldGet(this, _GoodyHut_ruleRegistry, "f").process(Action_1.default, this, unit);
    }
    process(unit) {
        __classPrivateFieldGet(this, _GoodyHut_ruleRegistry, "f").process(Discovered_1.default, this, unit);
    }
    tile() {
        return __classPrivateFieldGet(this, _GoodyHut_tile, "f");
    }
}
exports.GoodyHut = GoodyHut;
_GoodyHut_ruleRegistry = new WeakMap(), _GoodyHut_tile = new WeakMap();
exports.default = GoodyHut;
//# sourceMappingURL=GoodyHut.js.map