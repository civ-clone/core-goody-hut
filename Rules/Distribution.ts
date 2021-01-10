import GoodyHut from '../GoodyHut';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';
import Tile from '@civ-clone/core-world/Tile';

export class Distribution extends Rule<[Tile], void> {}

export default Distribution;

export interface IDistributionRegistry
  extends IRuleRegistry<Distribution, [Tile], void> {}
