export abstract class ArmaBase {

  private municiones: number;
  private danio: number;

  constructor(municionInicial: number, danioInicial: number) {
    this.municiones = municionInicial;
    this.danio = danioInicial;
  }

  public disparar(): number {
    
    const danioRealizado = this.municiones > 0 ? this.danio : 0;

    this.municiones = this.municiones > 0 ? this.municiones - 1 : 0;


    return danioRealizado;
  }
}
