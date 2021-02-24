import GoodyHut from './GoodyHut';
import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Tile from '@civ-clone/core-world/Tile';

export interface IGoodyHutRegistry extends IEntityRegistry<GoodyHut> {
  getByTile(tile: Tile): GoodyHut | null;
}

export class GoodyHutRegistry
  extends EntityRegistry<GoodyHut>
  implements IGoodyHutRegistry {
  constructor() {
    super(GoodyHut);
  }

  getByTile(tile: Tile): GoodyHut | null {
    const goodyHuts = this.filter(
      (goodyHut: GoodyHut): boolean => goodyHut.tile() === tile
    );

    if (goodyHuts.length === 0) {
      return null;
    }

    return goodyHuts[0];
  }
}

export const instance: GoodyHutRegistry = new GoodyHutRegistry();

export default GoodyHutRegistry;
