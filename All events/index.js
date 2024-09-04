document.addEventListener('DOMContentLoaded', function () {
    const bidForm = document.getElementById('bidForm');

    bidForm.addEventListener('submit', function (event) {
        event.preventDefault(); // 기본 폼 제출 방지

        const bidAmount = document.getElementById('bidAmount').value;

        if (bidAmount) {
            alert(`입찰이 완료되었습니다! 입찰가: ${bidAmount}원`);
            // 서버로 입찰 정보 전송 및 결제 처리 로직 추가
        } else {
            alert('입찰 금액을 입력해 주세요.');
        }
    });
});
