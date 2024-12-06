// Texto a ser digitado
const text = "Desenvolvedor e Consultor de Software ";
const typingText = document.getElementById("typing-text");

let index = 0;
let isDeleting = false;

function typeTextLoop() {
  if (!isDeleting && index <= text.length) {
    typingText.textContent = text.slice(0, index);
    index++;
  } else if (isDeleting && index > 0) {
    typingText.textContent = text.slice(0, index - 1);
    index--;
  }

  // Alternar entre digitar e apagar
  if (index === text.length) {
    isDeleting = true;
    setTimeout(typeTextLoop, 1500); // Delay  após digitar tudo
  } else if (index === 0) {
    isDeleting = false;
    setTimeout(typeTextLoop, 800); // Delay antes de reiniciar
  } else {
    setTimeout(typeTextLoop, isDeleting ? 50 : 80); // Velocidade de apagar e digitar
  }
}

document.addEventListener("DOMContentLoaded", typeTextLoop);
