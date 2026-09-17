import {Escudo} from "../Combate/Escudo"
import {ArmaBase} from "../Armas/ArmaBase"


export abstract class UnidadBase {
    private vida : number; 
    private escudo : Escudo | undefined
    private arma: ArmaBase | undefined

    constructor(vidaInicial: number) {
        this.vida = vidaInicial
    }

    public recibirDisparo(danio : number = 1) : void {
        const danioFinal = this.escudo ? this.escudo.obtenerDanioReducido(danio) : danio;

        this.vida = this.vida > danioFinal ? this.vida - danioFinal : 0;
    }


    public estaVivo() : boolean {
        return this.vida > 0 
    }

    private setVida(value : number) {
         this.vida = value 
    }

    public disparar(objetivo: UnidadBase) {
        const danioAlInfligir = this.arma ? this.arma.apretarGatillo() : 0;
        objetivo.recibirDisparo();
    }

    public equiparEscudo(nuevoEscudo: Escudo): void {
        this.escudo = nuevoEscudo;
    }

    public equiparArma(nuevaArma : ArmaBase): void {
        this.arma = nuevaArma; 
    }


}