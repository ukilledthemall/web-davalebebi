document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.article-link');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const article = event.target.closest('.article');
            const color = article.getAttribute('data-color');
            const url = new URL(event.target.href);
            url.searchParams.set('color', color);
            window.location.href = url.href;
        });
    });
});