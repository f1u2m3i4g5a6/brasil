 function verificarDominio() {
    const dominioPermitido = "cold-arena.netlify.app";
    if (window.location.hostname !== dominioPermitido) {
      alert("Este script só funciona no Cold Arena: cold-arena.netlify.app");
      return;
    }
    // Código do script continua aqui se o domínio for permitido
    console.log("Domínio válido! Script funcionando.");
  }

  // Chama a função ao carregar a página
  verificarDominio();