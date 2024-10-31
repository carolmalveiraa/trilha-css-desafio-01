const scrollToTopButton = document.getElementById('scrollToTop'); // Adicione um ID ao botão
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
