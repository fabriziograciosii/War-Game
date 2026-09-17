import { describe, test, expect } from 'vitest';
import { Soldado } from '../Combate/Soldado';
import { Tanque } from '../Combate/Tanque';
import { Buque } from '../Combate/Buque'; 
import {Revolver} from "../Armas/Revolver"

describe('Pruebas de la clase Soldado', () => {
  
  test('Un Tanque nace con 2 de vida, recibe un disparo del solado  y sobrevive', () => {

    const soldado = new Soldado();
    const tanque = new Tanque();
    const buque = new Buque()

    expect(tanque.estaVivo()).toBe(true);

    expect(tanque.estaVivo()).toBe(true);

    const posiblesAtacantes = [soldado, buque];

    const indiceAlAzar = Math.floor(Math.random() * posiblesAtacantes.length);

    const atacanteElegido = posiblesAtacantes[indiceAlAzar]!;

    atacanteElegido.equiparArma(new Revolver()); 
    atacanteElegido.disparar(tanque); 


    expect(tanque.estaVivo()).toBe(true);
  });

});
