import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._instances += 1;
  }

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
    
  static override createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;
