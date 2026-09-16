import { describe, test, expect } from 'vitest';
import { Soldado } from '../Combate/Soldado';

describe('Pruebas de la clase Soldado', () => {
  
  test('Un soldado nace con 100 de vida y recibe un disparo', () => {

    const soldado = new Soldado();
    
    expect(soldado.estaVivo()).toBe(true);
    
    soldado.recibirDisparo();

    expect(soldado.estaVivo()).toBe(true);
  });

});

