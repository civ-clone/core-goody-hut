import { GoodyHutRegistry } from '../GoodyHutRegistry';
import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import GoodyHut from '../GoodyHut';
declare global {
  interface TileAdditionalData {
    goodyHut: GoodyHut | null;
  }
}
export declare const getAdditionalData: (
  goodyHutRegistry?: GoodyHutRegistry
) => AdditionalData[];
export default getAdditionalData;
