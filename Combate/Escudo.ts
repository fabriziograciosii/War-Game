export class Escudo {

private porcentaje: number; 

constructor(porcentajeProteccion:number) {
    this.porcentaje = porcentajeProteccion
}

public obtenerDanioReducido(danioOriginal: number): number {
    return danioOriginal * (1 - (this.porcentaje / 100))
}
}
