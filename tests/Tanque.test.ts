import { describe, test, expect } from 'vitest';
import { Tanque } from '../Combate/Tanque';

describe('Pruebas de la clase Tanque', () => {
  
  test('Un Tanque nace con 2 de vida y recibe un disparo', () => {

    const tanque = new Tanque();
    
    expect(tanque.estaVivo()).toBe(true);
    
    tanque.recibirDisparo();

    expect(tanque.estaVivo()).toBe(true);
  });

});
