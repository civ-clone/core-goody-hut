import Action from '../Action';
import ActionRule from '../Rules/Action';
import Generator from '@civ-clone/core-world-generator/Generator';
import GoodyHut from '../GoodyHut';
import Player from '@civ-clone/core-player/Player';
import Terrain from '@civ-clone/core-terrain/Terrain';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
import World from '@civ-clone/core-world/World';
import * as chai from 'chai';
import * as spies from 'chai-spies';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import Effect from '@civ-clone/core-rule/Effect';
import Criterion from '@civ-clone/core-rule/Criterion';
import Discovered from '../Rules/Discovered';

const { expect, use } = chai;

use(spies);

describe('GoodyHut', (): void => {
  it('should perform `Action` passed in to `action`', (): void => {
    const tile = new Tile(0, 0, new Terrain(), new World(new Generator(1, 1))),
      goodyHut = new GoodyHut(tile),
      spy = chai.spy(),
      unit = new Unit(null, new Player(), tile),
      action = new Action(goodyHut, unit),
      SpyAction = class extends Action {
        perform(): void {
          spy();
        }
      },
      spyAction = new SpyAction(goodyHut, unit);

    goodyHut.action(action);
    goodyHut.action(spyAction);

    expect(spy).to.called.once;
    expect(spyAction.goodyHut()).to.equal(goodyHut);
    expect(spyAction.unit()).to.equal(unit);

    spyAction.perform();

    expect(spy).to.called.twice;
  });

  it('should return registered `Action`s when `actions` is called', (): void => {
    const tile = new Tile(0, 0, new Terrain(), new World(new Generator(1, 1))),
      ruleRegistry = new RuleRegistry(),
      goodyHut = new GoodyHut(tile, ruleRegistry),
      unit = new Unit(null, new Player(), tile);

    ruleRegistry.register(
      new ActionRule(
        new Criterion(
          (goodyHut: GoodyHut, unit: Unit): boolean =>
            goodyHut.tile() === unit.tile()
        ),
        new Effect(
          (goodyHut: GoodyHut, unit: Unit): Action => new Action(goodyHut, unit)
        )
      ),
      new ActionRule(
        new Criterion((): boolean => false),
        new Effect(
          (goodyHut: GoodyHut, unit: Unit): Action => new Action(goodyHut, unit)
        )
      )
    );

    const actions = goodyHut.actions(unit),
      [action] = actions;

    expect(actions.length).to.equal(1);
    expect(action).to.instanceof(Action);
    expect(action.unit()).to.equal(unit);
    expect(action.goodyHut()).to.equal(goodyHut);
  });

  it('should process `Discovered` `Rule`s when `process` called', (): void => {
    const tile = new Tile(0, 0, new Terrain(), new World(new Generator(1, 1))),
      ruleRegistry = new RuleRegistry(),
      goodyHut = new GoodyHut(tile, ruleRegistry),
      unit = new Unit(null, new Player(), tile),
      spy = chai.spy();

    ruleRegistry.register(new Discovered(new Effect(spy)));

    goodyHut.process(new Unit(null, new Player(), tile));

    expect(spy).to.called.once;
    expect(spy).to.called.with(goodyHut, unit);
  });
});
