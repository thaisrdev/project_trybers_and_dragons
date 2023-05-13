import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static override createdRacesInstances(): number {
    return Orc._instances;
  }
}

export default Orc;
