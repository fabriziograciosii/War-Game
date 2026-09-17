import { describe, test, expect } from 'vitest';
import { Soldado } from '../Combate/Soldado';
import { Tanque } from '../Combate/Tanque'; 


describe('Pruebas de la clase Soldado', () => {
  
  test('Un Tanque nace con 2 de vida, recibe un disparo del solado  y sobrevive', () => {

    const soldado = new Soldado();
    const tanque = new Tanque();

    expect(tanque.estaVivo()).toBe(true);

    soldado.disparar(tanque);


    expect(tanque.estaVivo()).toBe(true);
  });

});
