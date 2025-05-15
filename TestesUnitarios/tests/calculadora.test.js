// Função que roda todos os testes
function runTests() {
  // Testes de soma
  testar("Soma de positivos", () => {
    if (somar(3, 4) !== 7) throw new Error("Esperado 7");
  });

  testar("Soma com negativo", () => {
    if (somar(5, -2) !== 3) throw new Error("Esperado 3");
  });

  // Testes de subtração
  testar("Subtração de positivos", () => {
    if (subtrair(10, 3) !== 7) throw new Error("Esperado 7");
  });

  testar("Subtração com resultado negativo", () => {
    if (subtrair(2, 5) !== -3) throw new Error("Esperado -3");
  });

  // Testes de multiplicação
  testar("Multiplicação comum", () => {
    if (multiplicar(4, 5) !== 20) throw new Error("Esperado 20");
  });

  testar("Multiplicação por zero", () => {
    if (multiplicar(10, 0) !== 0) throw new Error("Esperado 0");
  });

  // Testes de divisão
  testar("Divisão comum", () => {
    if (dividir(20, 4) !== 5) throw new Error("Esperado 5");
  });

  testar("Divisão por 1", () => {
    if (dividir(7, 1) !== 7) throw new Error("Esperado 7");
  });

  testar("Divisão por zero deve lançar erro", () => {
    let erro = false;
    try {
      dividir(10, 0);
    } catch (e) {
      erro = true;
    }
    if (!erro) throw new Error("Esperado erro de divisão por zero");
  });
}
