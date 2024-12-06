document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); // Seleciona todas as seções
    const menuItems = document.querySelectorAll(".menu li"); // Seleciona os itens do menu

    window.addEventListener("scroll", () => {
        let currentSection = "";

        // Identifica a seção visível com base na rolagem
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Remove a classe 'active' de todos os itens do menu
        menuItems.forEach((item) => {
            item.classList.remove("active");
        });

        // Adiciona a classe 'active' ao item correspondente
        const activeItem = document.querySelector(`.menu li a[href="#${currentSection}"]`)?.parentNode;
        if (activeItem) {
            activeItem.classList.add("active");
        }
    });
});
