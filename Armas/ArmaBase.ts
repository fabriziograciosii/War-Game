export abstract class ArmaBase {
    private municion : number; 
    private danio : number; 

    constructor(municionInicial: number, danioInicial: number) {
        this.municion = municionInicial
        this.danio = danioInicial
    }

    public apretarGatillo() : number {

        const danioCausado = this.municion > 0 ? this.danio : 0;
        this.municion = this.municion > 0 ? this.municion -1 : 0;

        return danioCausado;
    }
}