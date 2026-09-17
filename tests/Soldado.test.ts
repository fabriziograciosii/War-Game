import { describe, test, expect } from 'vitest';
import { Soldado } from '../Combate/Soldado';
import { Tanque } from '../Combate/Tanque'; 
import { Buque } from '../Combate/Buque';


describe('Pruebas de la clase Soldado', () => {
  
  test('Un soldado nace con 1 de vida, recibe un disparo del tanque y muere', () => {

    const soldado = new Soldado();
    const tanque = new Tanque();
    const buque = new Buque();

    expect(soldado.estaVivo()).toBe(true);

    const posiblesAtacantes = [buque, tanque];

    const indiceAlAzar = Math.floor(Math.random() * posiblesAtacantes.length);

    const atacanteElegido = posiblesAtacantes[indiceAlAzar]!;

    atacanteElegido.disparar(soldado); 


    expect(soldado.estaVivo()).toBe(false);
    
  });

});

