import GoodyHut from './GoodyHut';
import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Tile from '@civ-clone/core-world/Tile';

export interface IGoodyHutRegistry extends IEntityRegistry<GoodyHut> {
  getByTile(tile: Tile): GoodyHut[];
}

export class GoodyHutRegistry
  extends EntityRegistry<GoodyHut>
  implements IGoodyHutRegistry {
  constructor() {
    super(GoodyHut);
  }

  getByTile(tile: Tile): GoodyHut[] {
    return this.filter(
      (goodyHut: GoodyHut): boolean => goodyHut.tile() === tile
    );
  }
}

export const instance: GoodyHutRegistry = new GoodyHutRegistry();

export default GoodyHutRegistry;
