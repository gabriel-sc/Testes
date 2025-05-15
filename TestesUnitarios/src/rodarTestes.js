document.getElementById("rodarTestesBtn").addEventListener("click", () => {
    const resultadosDiv = document.getElementById("testes-resultados");
    resultadosDiv.textContent = ""; // limpa resultados

    // Redefine a função de teste
    window.testar = function (nomeDoTeste, funcaoDeTeste) {
        try {
            funcaoDeTeste();
            resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
        } catch (erro) {
            resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
        }
    };

    // Chama os testes definidos externamente
    if (typeof runTests === "function") {
        runTests();
    } else {
        resultadosDiv.textContent = "❌ Função runTests() não encontrada!";
    }
});