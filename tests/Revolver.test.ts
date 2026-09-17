import { describe, test, expect } from 'vitest';
import { Revolver } from '../Armas/Revolver';

describe('Pruebas del Revólver', () => {
  
  test('El revólver hace 1 de daño y se queda sin balas al séptimo tiro', () => {
   
    const revolver = new Revolver(); 

    for (let i = 0; i < 6; i++) {
      expect(revolver.apretarGatillo()).toBe(1);
    }

    expect(revolver.apretarGatillo()).toBe(0);
  });

});
