"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdditionalData = void 0;
const GoodyHutRegistry_1 = require("../GoodyHutRegistry");
const AdditionalData_1 = require("@civ-clone/core-data-object/AdditionalData");
const Tile_1 = require("@civ-clone/core-world/Tile");
const getAdditionalData = (goodyHutRegistry = GoodyHutRegistry_1.instance) => [
    new AdditionalData_1.default(Tile_1.default, 'goodyHut', (tile) => goodyHutRegistry.getByTile(tile)),
];
exports.getAdditionalData = getAdditionalData;
exports.default = exports.getAdditionalData;
//# sourceMappingURL=goodyHut.js.map