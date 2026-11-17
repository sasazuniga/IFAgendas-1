// Seleciona os elementos do formulário e da tela
const formLogin = document.getElementById('formLogin');
const inputUsuario = document.getElementById('usuario');
const inputSenha = document.getElementById('senha');
const mensagemLogin = document.getElementById('mensagemLogin');
const botaoGoogle = document.getElementById('entrarGoogle');
const botaoEsqueceuSenha = document.getElementById('esqueceuSenha');

// Evento ao enviar o formulário de login
formLogin.addEventListener('submit', function (event) {
    // Previne o recarregamento padrão da página
    event.preventDefault();

    const usuario = inputUsuario.value.trim();
    const senha = inputSenha.value.trim();

    // Validação simples de campos vazios
    if (usuario === '' || senha === '') {
        mostrarMensagem('Por favor, preencha todos os campos!', 'erro');
        return;
    }

    // Simulação de autenticação (substitua futuramente por uma API/Backend real)
    // Aqui definimos um usuário e senha de teste: "aluno" / "123456"
    if (usuario === 'aluno' && senha === '123456') {
        mostrarMensagem('Login realizado com sucesso! Redirecionando...', 'sucesso');
        
        // Simula um atraso de 1.5 segundos antes de redirecionar para a página principal
        setTimeout(() => {
            window.location.href = "inicio.html"; // Redireciona corretamente agora
        }, 1500);
    } else {
        mostrarMensagem('Usuário ou senha incorretos.', 'erro');
    }
});

// Ação para o botão de login com o Google (Simulação)
botaoGoogle.addEventListener('click', function () {
    mostrarMensagem('Redirecionando para o login com o Google...', 'sucesso');
    // Aqui você integraria o Firebase Auth ou OAuth do Google no futuro
});

// Ação para o botão "Esqueceu a sua senha?"
botaoEsqueceuSenha.addEventListener('click', function () {
    const usuario = inputUsuario.value.trim();
    if (usuario === '') {
        alert('Digite seu usuário ou e-mail no campo correspondente antes de solicitar a recuperação.');
    } else {
        alert(`Um link de recuperação foi enviado para o contato associado a: ${usuario}`);
    }
});

// Função auxiliar para exibir mensagens na tela com estilo dinâmico
function mostrarMensagem(texto, tipo) {
    mensagemLogin.textContent = texto;
    mensagemLogin.className = ''; // Limpa classes anteriores
    mensagemLogin.classList.add(tipo);
}