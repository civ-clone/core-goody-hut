import GoodyHut from '../GoodyHut';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';
export declare class Discovered extends Rule<[GoodyHut, Unit], void> {}
export default Discovered;
export interface IDiscoveredRegistry
  extends IRuleRegistry<Discovered, [GoodyHut, Unit], void> {}
