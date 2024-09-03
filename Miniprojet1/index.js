// script.js
document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.top-news article h3');

    articles.forEach(article => {
        article.addEventListener('click', function () {
            alert('기사 제목을 클릭했습니다: ' + this.innerText);
        });
    });
});
