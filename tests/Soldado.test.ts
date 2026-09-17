import { describe, test, expect } from 'vitest';
import { Soldado } from '../Combate/Soldado';
import { Tanque } from '../Combate/Tanque'; 


describe('Pruebas de la clase Soldado', () => {
  
  test('Un soldado nace con 1 de vida, recibe un disparo y muere por cualquier unidad', () => {

    const soldado = new Soldado();
    const tanque = new Tanque();

    expect(soldado.estaVivo()).toBe(true);

    tanque.disparar(soldado);


    expect(soldado.estaVivo()).toBe(false);
  });

});

