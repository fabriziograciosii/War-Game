export class UnidadBase {
    private vida : number; 

    constructor(vidaInicial: number) {
        this.vida = vidaInicial
    }

    public recibirDisparo() : void {
        this.vida = this.vida > 0 ? this.vida -1 : 0; 
    }

    public estaVivo() : boolean {
        return this.vida > 0 
    }
}