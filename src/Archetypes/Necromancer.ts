import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _damage: EnergyType;
  private static _instance = 0;

  constructor(name: string) {
    super(name);
    this._damage = 'mana';
    Necromancer._instance += 1;
  }

  override get energyType(): EnergyType {
    return this._damage;
  }

  static override createdArchetypeInstances(): number {
    return Necromancer._instance;
  }
}

export default Necromancer;
