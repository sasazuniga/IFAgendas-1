
// DATA ATUAL
const data = new Date();

document.getElementById("dataAtual").textContent =
    "Hoje - " + data.toLocaleDateString("pt-BR");


// COMPROMISSOS
const compromissos = document.querySelectorAll(
    "#listaCompromissos li"
);

// Recupera os compromissos salvos
compromissos.forEach(compromisso => {

    const id = compromisso.dataset.id;

    const statusSalvo = localStorage.getItem("compromisso-" + id);

    if (statusSalvo === "concluido") {
        compromisso.classList.add("concluido");
        compromisso.classList.remove("pendente");
    }

    if (statusSalvo === "pendente") {
        compromisso.classList.add("pendente");
        compromisso.classList.remove("concluido");
    }

    // Altera o status ao clicar
    compromisso.addEventListener("click", () => {

        const concluido = compromisso.classList.contains("concluido");

        if (concluido) {

            compromisso.classList.remove("concluido");
            compromisso.classList.add("pendente");

            localStorage.setItem(
                "compromisso-" + id,
                "pendente"
            );

        } else {

            compromisso.classList.remove("pendente");
            compromisso.classList.add("concluido");

            localStorage.setItem(
                "compromisso-" + id,
                "concluido"
            );

        }

    });

});


// ABRIR ESTUDOS
function abrirEstudos(materia) {

    localStorage.setItem("materiaSelecionada", materia);

    window.location.href = "estudos.html";

}


// FEEDBACK
const formFeedback = document.getElementById("formFeedback");

formFeedback.addEventListener("submit", function(event) {

    event.preventDefault();

    const experiencia = document.getElementById("experiencia").value;
    const sugestao = document.getElementById("sugestao").value;

    const feedback = {
        experiencia: experiencia,
        sugestao: sugestao,
        data: new Date().toLocaleDateString("pt-BR")
    };

    // Salva os feedbacks no navegador
    let feedbacks = JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

    feedbacks.push(feedback);

    localStorage.setItem(
        "feedbacks",
        JSON.stringify(feedbacks)
    );

    document.getElementById("mensagemFeedback").textContent =
        "Feedback enviado com sucesso!";

    formFeedback.reset();

});


// PESQUISA
const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", function() {

    const texto = pesquisa.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const conteudo = card.textContent.toLowerCase();

        card.style.display = conteudo.includes(texto)
            ? ""
            : "none";

    });

});
