import {
  GoodyHutRegistry,
  instance as goodyHutRegistryInstance,
} from '../GoodyHutRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import GoodyHut from '../GoodyHut';
import Tile from '@civ-clone/core-world/Tile';

export const getAdditionalData = (
  goodyHutRegistry: GoodyHutRegistry = goodyHutRegistryInstance
) => [
  new AdditionalData(Tile, 'goodyHut', (tile: Tile): GoodyHut | null =>
    goodyHutRegistry.getByTile(tile)
  ),
];

export default getAdditionalData;
