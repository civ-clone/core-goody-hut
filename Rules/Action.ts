import GoodyHut from '../GoodyHut';
import GoodyHutAction from '../Action';
import Rule from '@civ-clone/core-rule/Rule';
import Unit from '@civ-clone/core-unit/Unit';

export class Action extends Rule<[GoodyHut, Unit], GoodyHutAction> {}

export default Action;
