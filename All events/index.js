document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');

    uploadForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 기본 폼 제출 동작 방지

        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const promotionStart = document.getElementById('promotionStart').value;
        const promotionEnd = document.getElementById('promotionEnd').value;

        if (productName && productDescription && promotionStart && promotionEnd) {
            alert('상품이 성공적으로 등록되었습니다!');
            uploadForm.reset(); // 폼 초기화
        } else {
            alert('모든 필드를 입력해 주세요.');
        }
    });
});

function startAuction() {
    alert('경매가 시작되었습니다! 최고의 입찰자가 광고 자리를 차지합니다.');
    // 추가 경매 로직을 여기에 구현합니다.
}
