document.getElementById("rodarTestesUnitBtn").addEventListener("click", () => {
    const resultadosDiv = document.getElementById("testes-resultados");
    resultadosDiv.textContent = ""

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
    if (typeof runUnitTests === "function") {
        runUnitTests();
    } else {
        resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
    }
});

document.getElementById("rodarTestesComponentBtn").addEventListener("click", () => {
    const resultadosDiv = document.getElementById("testes-resultados");
    resultadosDiv.textContent = ""

    // Redefine a função de teste
    window.testar = function (nomeDoTeste, funcaoDeTeste) {
        try {
            funcaoDeTeste();
            resultadosDiv.textContent += `✅ ${nomeDoTeste}\n`;
        } catch (erro) {
            resultadosDiv.textContent += `❌ ${nomeDoTeste} - ${erro.message}\n`;
        }
    };

    // Chama os testes definidos externamente,
    if (typeof runComponentTests === "function") {
        runComponentTests();
    } else {
        resultadosDiv.textContent = "❌ Função runComponentTests() não encontrada!";
    }
});