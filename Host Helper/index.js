// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 폼 제출 방지

        // 폼 데이터 가져오기
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // 사용자 입력에 대한 간단한 검증
        if (name && email && message) {
            alert('문의해 주셔서 감사합니다! 곧 연락드리겠습니다.');
            form.reset(); // 폼 초기화
        } else {
            alert('모든 필드를 입력해 주세요.');
        }
    });
});
