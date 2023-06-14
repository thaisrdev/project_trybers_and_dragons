import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static override createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;
