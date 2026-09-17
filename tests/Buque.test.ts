import {describe, test, expect} from "vitest";
import {Buque} from "../Combate/Buque"
import {Tanque} from "../Combate/Tanque"
import {Soldado} from "../Combate/Soldado"

describe('Pruebas de la clase Buque', () => {
  
  test('Un Buque nace con 3 de vida, recibe un disparo del tanque y sobrevive ', () => {

    const soldado = new Soldado();
    const tanque = new Tanque();
    const buque = new Buque();

    expect(buque.estaVivo()).toBe(true);

    const posiblesAtacantes = [soldado, tanque];

    const indiceAlAzar = Math.floor(Math.random() * posiblesAtacantes.length);

    const atacanteElegido = posiblesAtacantes[indiceAlAzar]!;

    atacanteElegido.disparar(buque); 



    expect(buque.estaVivo()).toBe(true);
  });

});
