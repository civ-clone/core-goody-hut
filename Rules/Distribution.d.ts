import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Tile from '@civ-clone/core-world/Tile';
export declare class Distribution extends Rule<[Tile], void> {}
export default Distribution;
export interface IDistributionRegistry
  extends IRuleRegistry<Distribution, [Tile], void> {}
