export class Escudo {
    private porcentaje: number;

    constructor(porcentajeInicial: number){
        this.porcentaje = porcentajeInicial
    }

    public calcularDanioo(danioEntrante: number): number {

        return danioEntrante * (1 - (this.porcentaje / 100));

    }

}
