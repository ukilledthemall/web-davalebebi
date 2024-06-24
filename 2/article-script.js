document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const color = params.get('color');
    if (color) {
        const articleContent = document.getElementById('article-content');
        articleContent.style.backgroundColor = color;
    }
});