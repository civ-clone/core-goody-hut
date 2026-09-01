"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
class Action {
    constructor(goodyHut, unit) {
        this._goodyHut = goodyHut;
        this._unit = unit;
    }
    goodyHut() {
        return this._goodyHut;
    }
    perform() { }
    unit() {
        return this._unit;
    }
}
exports.Action = Action;
exports.default = Action;
//# sourceMappingURL=Action.js.map