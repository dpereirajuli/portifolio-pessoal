document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sidebar = document.getElementById("sidebar");
  
    // Evento de clique no botão hambúrguer
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
    });
  
    // Verifica o tamanho da tela para mostrar/ocultar o menu automaticamente
    const updateSidebarVisibility = () => {
      if (window.innerWidth > 767) {
        // Em telas grandes, o menu fica visível
        sidebar.classList.remove("hidden");
      } else {
        // Em telas pequenas, o menu fica escondido
        sidebar.classList.add("hidden");
      }
    };
  
    // Ajusta a visibilidade do menu ao redimensionar a janela
    window.addEventListener("resize", updateSidebarVisibility);
  
    // Chama a função inicialmente para configurar o estado do menu
    updateSidebarVisibility();
  });