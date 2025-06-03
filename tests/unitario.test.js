// Função que roda todos os testes
function runUnitTests() {
  // Testes de soma
  testar("UNIT - Soma de positivos", () => {
    if (somar(3, 4) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Soma com negativo", () => {
    if (somar(5, -2) !== 3) throw new Error("Esperado 3");
  });

  // Testes de subtração
  testar("UNIT - Subtração de positivos", () => {
    if (subtrair(10, 3) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Subtração com resultado negativo", () => {
    if (subtrair(2, 5) !== -3) throw new Error("Esperado -3");
  });

  // Testes de multiplicação
  testar("UNIT - Multiplicação comum", () => {
    if (multiplicar(4, 5) !== 20) throw new Error("Esperado 20");
  });

  testar("UNIT - Multiplicação por zero", () => {
    if (multiplicar(10, 0) !== 0) throw new Error("Esperado 0");
  });

  // Testes de divisão
  testar("UNIT - Divisão comum", () => {
    if (dividir(20, 4) !== 5) throw new Error("Esperado 5");
  });

  testar("UNIT - Divisão por 1", () => {
    if (dividir(7, 1) !== 7) throw new Error("Esperado 7");
  });

  testar("UNIT - Divisão por zero deve lançar erro", () => {
    let erro = false;
    try {
      dividir(10, 0);
    } catch (e) {
      erro = true;
    }
    if (!erro) throw new Error("Esperado erro de divisão por zero");
  });
  // Testes feitos em Aula
  testar("UNIT - Soma com numeros inteiros", () => {
    if (somar(-20, 20) !== 0) throw new Error("Esperado 0");
  });
  testar("UNIT - Soma de negativos com numeros positivos", () => {
    if (somar(-4, 15) !== 11) throw new Error("Esperado 11");
  });
  testar("UNIT - Subtração de dois numeros negativos", () => {
    if (subtrair(-10, -10) !== 0) throw new Error("Esperado 0");
});
  testar("UNIT - Multiplicação com negativos", () => {
    if (multiplicar(-4, 5) !== -20) throw new Error("Esperado -20");
  });
  testar("UNIT - Divisão por negativos", () => {
    if (dividir(-7, 1) !== -7) throw new Error("Esperado -7");
  });
 //Aqui são usados math.abs com epilson são usados para imprecisão de numeros flutuantes
  testar("UNIT - Soma de numeros muito pequenos", () => {
  const resultado = somar(0.2, 0.1);
  const esperado = 0.3;
  const epsilon = 0.000001; // margem de erro aceitável

  if (Math.abs(resultado - esperado) > epsilon) {
    throw new Error(`Esperado aproximadamente ${esperado}, mas recebeu ${resultado}`);
  }
});
  testar("UNIT - Multiplicação de numeros grandes", () => {
    if (multiplicar(1000000, 1000000) !== 1000000000000) throw new Error(" Esperado 1.000.000.000.000");
  });
  testar()

}
