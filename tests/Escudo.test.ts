import {describe, test, expect} from "vitest"
import {Soldado} from "../Combate/Soldado"
import { Buque } from "../Combate/Buque";
import { Tanque } from "../Combate/Tanque";
import { Escudo } from "../Combate/Escudo";


describe('Pruebas del Escudo', () => {
  
  test('Un soldado con escudo al 50% sobrevive a un disparo', () => {
  
    const soldado = new Soldado(); 
    const escudoMitad = new Escudo(50); 
    const tanque = new Tanque();
    const buque = new Buque();
    
  
    soldado.equiparEscudo(escudoMitad);


    const posiblesAtacantes = [tanque, buque];

    const indiceAlAzar = Math.floor(Math.random() * posiblesAtacantes.length);

    const atacanteElegido = posiblesAtacantes[indiceAlAzar]!;

    atacanteElegido.disparar(soldado); 
    

    expect(soldado.estaVivo()).toBe(true);
  });

});
