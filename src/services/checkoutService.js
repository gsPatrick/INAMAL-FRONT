// src/services/checkoutService.js

// A URL da sua API de backend. Vamos usar variáveis de ambiente para isso.
const API_URL = 'https://geral-inamal-gateway.r954jc.easypanel.host';

/**
 * Função assíncrona para iniciar o processo de checkout.
 * @param {HTMLElement} buttonElement - O elemento do botão que foi clicado.
 */
export const handleCheckout = async (buttonElement) => {
  if (!buttonElement) return;

  const originalText = buttonElement.innerHTML;
  
  // Desabilita o botão e mostra um feedback de carregamento
  buttonElement.disabled = true;
  buttonElement.innerHTML = 'Gerando link...';

  try {
    // Faz a chamada POST para a sua API Node.js
    const response = await fetch(`${API_URL}/criar-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // O corpo pode ser vazio se sua API não esperar dados
    });

    const data = await response.json();

    if (data.success && data.checkoutUrl) {
      // Se a API retornar sucesso, redireciona o usuário para o checkout do Asaas
      buttonElement.innerHTML = 'Redirecionando...';
      window.location.href = data.checkoutUrl;
    } else {
      // Se a API retornar um erro, mostra no console e avisa o usuário
      console.error('Erro da API de checkout:', data.message || 'Resposta inesperada.');
      alert(`Ocorreu um erro ao gerar o link de pagamento. Tente novamente. Detalhes: ${data.message}`);
      buttonElement.disabled = false;
      buttonElement.innerHTML = originalText;
    }
  } catch (error) {
    // Se ocorrer um erro de rede (ex: API offline)
    console.error('Erro de rede ao chamar o checkout:', error);
    alert('Não foi possível conectar ao nosso sistema de pagamento. Verifique sua conexão e tente novamente.');
    buttonElement.disabled = false;
    buttonElement.innerHTML = originalText;
  }
};