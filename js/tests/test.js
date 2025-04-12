TestFramework.test("Validação de dígitos - apenas dois dígitos permitidos", function () {
    const urna = new UrnaEletronica();
    urna.state.digitos = [];
    urna.adicionarDigito("1");
    urna.adicionarDigito("2");
    urna.adicionarDigito("3");
    TestFramework.assertEquals("12", urna.state.digitos.join(""));
});

TestFramework.test("Registrar voto válido em chapa existente", function () {
    const urna = new UrnaEletronica();
    urna.state.digitos = ["1", "2"];
    urna.verificarChapa();
    const numero = urna.state.digitos.join("");
    urna.registrarVoto(numero, false);
    const votos = StorageManager.obterVotos();
    TestFramework.assertTrue(votos.chapas[numero] >= 1);
});

TestFramework.test("Registrar voto em branco", function () {
    const urna = new UrnaEletronica();
    urna.votarBranco();
    const votos = StorageManager.obterVotos();
    TestFramework.assertTrue(votos.brancos >= 1);
});

TestFramework.test("Registrar voto nulo", function () {
    const urna = new UrnaEletronica();
    urna.state.digitos = ["9", "9"];
    urna.verificarChapa();
    const numero = urna.state.digitos.join("");
    urna.registrarVoto(numero, true);
    const votos = StorageManager.obterVotos();
    TestFramework.assertTrue(votos.nulos >= 1);
});

TestFramework.test("Persistência de chapas no localStorage", function () {
    const testeChapas = [
        { numero: "99", nomePresidente: "Teste", nomeVice: "Vice", nomeChapa: "Teste Chapa" }
    ];
    StorageManager.salvarChapas(testeChapas);
    const chapas = StorageManager.obterChapas();
    TestFramework.assertEquals("99", chapas[0].numero);
});

window.addEventListener("load", function () {
    TestFramework.runTests();
});
