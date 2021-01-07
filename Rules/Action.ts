import GoodyHut from '../GoodyHut';
import GoodyHutAction from '../Action';
import { IRuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';

export class Action extends Rule<[GoodyHut, Unit], GoodyHutAction> {}

export default Action;

export interface IActionRegistry
  extends IRuleRegistry<Action, [GoodyHut, Unit], GoodyHutAction> {}
