// Imports / Require --> Bibliotecas e Frameworks
// Ficará vazio neste exemplo porque vamos usar o que é nativo do JS
// 2  Opcional no JavaScript: Classe (grupo de funcionalidades)
// 2.1 - Atributos / Campos
// 2.2 - Funcionalidades (Funções e Métodos)

// Área de um quadrado 
let areaQuadrado = function areaQuadrado(lado) {
    return lado * lado;
} // fim da função areaQuadrado

// Área de um paralelogramo
let areaParalelogramo = function areaParalelogramo(base, altura) {
    return base * altura;
} // fim da função areaParalelogramo

// Área de um triângulo 
let areaTriangulo = function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} // fim da função areaTriangulo
module.exports = {
    areaQuadrado,
    areaParalelogramo,
    areaTriangulo
};

