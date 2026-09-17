import { describe, test, expect } from 'vitest';
import { Escopeta } from '../Armas/Escopeta';

describe('Pruebas de la Escopeta', () => {
  
  test('La escopeta gasta sus 2 balas y al tercer tiro no hace daño', () => {
 
    const escopeta = new Escopeta();

    expect(escopeta.apretarGatillo()).toBe(2);

  
    expect(escopeta.apretarGatillo()).toBe(2);


    expect(escopeta.apretarGatillo()).toBe(0);
  });

});
