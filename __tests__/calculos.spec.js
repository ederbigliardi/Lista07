// 1 - Referências / Bibliotecas
// calculos.test.js
const { areaQuadrado, areaParalelogramo, areaTriangulo } = require('../src/calculos');

describe('Testes de Cálculo de Áreas', () => {
    // Teste para a área do quadrado
    test('Calcula a área de um quadrado', () => {
        expect(areaQuadrado(4)).toBe(16); // 4 * 4 = 16
        expect(areaQuadrado(5)).toBe(25); // 5 * 5 = 25
        expect(areaQuadrado(0)).toBe(0);  // 0 * 0 = 0
    });

    // Teste para a área do paralelogramo usando lista de valores
    test('Calcula a área de um paralelogramo (com lista de valores)', () => {
        const valores = [
            { base: 5, altura: 10, esperado: 50 },
            { base: 3, altura: 6, esperado: 18 },
            { base: 7, altura: 8, esperado: 56 },
            { base: 9, altura: 4, esperado: 36 },
            { base: 2, altura: 12, esperado: 24 }
        ];

        valores.forEach(({ base, altura, esperado }) => {
            expect(areaParalelogramo(base, altura)).toBe(esperado);
        });
    });

    // Teste para a área do triângulo usando JSON
    test('Calcula a área de um triângulo (formato JSON)', () => {
        const jsonData = `
    [
      {"base": 6, "altura": 8, "esperado": 24.0},
      {"base": 4, "altura": 5, "esperado": 10.0},
      {"base": 10, "altura": 7, "esperado": 35.0},
      {"base": 3, "altura": 9, "esperado": 13.5},
      {"base": 12, "altura": 6, "esperado": 36.0}
    ]
    `;

        const dados = JSON.parse(jsonData);

        dados.forEach(({ base, altura, esperado }) => {
            expect(areaTriangulo(base, altura)).toBe(esperado);
        });
    });
});
