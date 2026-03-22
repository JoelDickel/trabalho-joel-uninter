// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');

    // Validação do Formulário - Requisito 5 e 59
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        // Verifica se os campos estão preenchidos
        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        // Validação de formato de e-mail - Requisito 60
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
            return;
        }

        // Simulação de envio com sucesso - Requisito 61 e 62
        alert('Mensagem enviada com sucesso!');
        
        // Limpa os campos após o envio
        form.reset();
    });
});
