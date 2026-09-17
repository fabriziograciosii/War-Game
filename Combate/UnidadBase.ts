import {Escudo} from "../Combate/Escudo"

export abstract class UnidadBase {
    private vida : number; 
    private escudo : Escudo | undefined

    constructor(vidaInicial: number) {
        this.vida = vidaInicial
    }

    public recibirDisparo() : void {
        const danio = this.escudo ? this.escudo.obtenerDanioReducido(1) : 1;

        this.vida = this.vida > danio ? this.vida - danio : 0;
    }


    public estaVivo() : boolean {
        return this.vida > 0 
    }

    private setVida(value : number) {
         this.vida = value 
    }

    public disparar(objetivo: UnidadBase) {
        objetivo.recibirDisparo();
    }

    public equiparEscudo(nuevoEscudo: Escudo): void {
        this.escudo = nuevoEscudo;
    }


}