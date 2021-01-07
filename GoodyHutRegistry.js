"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instance = exports.GoodyHutRegistry = void 0;
const GoodyHut_1 = require("./GoodyHut");
const EntityRegistry_1 = require("@civ-clone/core-registry/EntityRegistry");
class GoodyHutRegistry extends EntityRegistry_1.EntityRegistry {
    constructor() {
        super(GoodyHut_1.default);
    }
    getByTile(tile) {
        return this.filter((goodyHut) => goodyHut.tile() === tile);
    }
}
exports.GoodyHutRegistry = GoodyHutRegistry;
exports.instance = new GoodyHutRegistry();
exports.default = GoodyHutRegistry;
//# sourceMappingURL=GoodyHutRegistry.js.map