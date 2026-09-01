"use strict";
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
        this._ruleRegistry = ruleRegistry;
        this._tile = tile;
        this.addKey('tile');
    }
    action(action) {
        this._ruleRegistry.process(ActionPerformed_1.default, this, action);
        action.perform();
    }
    actions(unit) {
        return this._ruleRegistry.process(Action_1.default, this, unit);
    }
    process(unit) {
        this._ruleRegistry.process(Discovered_1.default, this, unit);
    }
    tile() {
        return this._tile;
    }
}
exports.GoodyHut = GoodyHut;
exports.default = GoodyHut;
//# sourceMappingURL=GoodyHut.js.map