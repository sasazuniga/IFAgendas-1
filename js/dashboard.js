
// DATA ATUAL

const dataAtual = document.querySelector(".date-badge");

const hoje = new Date();

dataAtual.textContent =
    "Hoje - " + hoje.toLocaleDateString("pt-BR");


// COMPROMISSOS

const lista = document.querySelector(".agenda-list");

const compromissos = lista.querySelectorAll("li");

// Recupera os estados salvos
compromissos.forEach((item, index) => {

    const salvo = localStorage.getItem("compromisso" + index);

    if (salvo === "concluido") {
        item.classList.add("concluido");
        item.classList.remove("pendente");
    } else {
        item.classList.add("pendente");
        item.classList.remove("concluido");
    }

    // Clicar para concluir ou desfazer
    item.addEventListener("click", function () {

        if (item.classList.contains("concluido")) {

            item.classList.remove("concluido");
            item.classList.add("pendente");

            localStorage.setItem(
                "compromisso" + index,
                "pendente"
            );

        } else {

            item.classList.remove("pendente");
            item.classList.add("concluido");

            localStorage.setItem(
                "compromisso" + index,
                "concluido"
            );

        }

    });

});


// FEEDBACKS

const formulario = document.getElementById("formFeedback");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const experiencia =
        document.getElementById("experiencia").value.trim();

    const sugestao =
        document.getElementById("sugestao").value.trim();

    if (experiencia === "") {
        alert("Preencha o campo de experiência!");
        return;
    }

    const novoFeedback = {
        experiencia: experiencia,
        sugestao: sugestao,
        data: new Date().toLocaleDateString("pt-BR")
    };

    let feedbacks = JSON.parse(
        localStorage.getItem("feedbacks")
    ) || [];

    feedbacks.push(novoFeedback);

    localStorage.setItem(
        "feedbacks",
        JSON.stringify(feedbacks)
    );

    document.getElementById("mensagemFeedback").textContent =
        "Feedback enviado com sucesso!";

    formulario.reset();

});
