import GoodyHut from '../GoodyHut';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';
export declare class Distribution extends Rule<[GoodyHut, Unit], void> {}
export default Distribution;
export interface IDistributionRegistry
  extends IRuleRegistry<Distribution, [GoodyHut, Unit], void> {}
