function exibirPopupComTempo(tempoEmMilissegundos, mensagem) {
    setTimeout(() => {
      const popup = window.confirm(mensagem);

      if (popup) {
          exibirPopupComTempo(tempoEmMilissegundos, mensagem);
      }
      
    }, tempoEmMilissegundos);
  }
  exibirPopupComTempo(40000, "Gostaria de usar o cupom - 'P1COMPRA'");