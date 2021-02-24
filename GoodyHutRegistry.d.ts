import GoodyHut from './GoodyHut';
import {
  EntityRegistry,
  IEntityRegistry,
} from '@civ-clone/core-registry/EntityRegistry';
import Tile from '@civ-clone/core-world/Tile';
export interface IGoodyHutRegistry extends IEntityRegistry<GoodyHut> {
  getByTile(tile: Tile): GoodyHut | null;
}
export declare class GoodyHutRegistry
  extends EntityRegistry<GoodyHut>
  implements IGoodyHutRegistry {
  constructor();
  getByTile(tile: Tile): GoodyHut | null;
}
export declare const instance: GoodyHutRegistry;
export default GoodyHutRegistry;
