// Aguarde o DOM estar completamente carregado antes de executar o JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Obtenha o elemento do formulário de contato
    const contactForm = document.getElementById('contactForm');
    
    // Verifique se o formulário existe na página
    if (contactForm) {
        // Adicione um listener de evento de envio ao formulário
        contactForm.addEventListener('submit', function(e) {
            // Prevenir o envio padrão do formulário
            e.preventDefault();
            
            // Obter valores do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
            // Validação simples de formulários
            if (name && email && message) {
                // Em uma aplicação real, você enviaria esses dados para um servidor.
                // Por enquanto, vamos apenas exibir uma mensagem de sucesso.
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');
                
                // Reiniciar o formulário
                contactForm.reset();
            } else {
                // Exibir mensagem de erro se os campos obrigatórios estiverem vazios
                alert('Please fill in all required fields (name, email, and message).');
            }
        });
    }
});
