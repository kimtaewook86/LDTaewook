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

// 상품 데이터를 저장하는 배열
const products = [
    {
        rank: 1,
        imageSrc: './images/rice.jpg',
        name: '상품명 1',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 2,
        imageSrc: './images/계란.jpg',
        name: '상품명 2',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 3,
        imageSrc: './images/고려은단.jpg',
        name: '상품명 3',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 4,
        imageSrc: './images/물티슈.jpg',
        name: '상품명 4',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 5,
        imageSrc: './images/삼겹살.jpg',
        name: '상품명 5',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 6,
        imageSrc: './images/삼겹살2.jpg',
        name: '상품명 6',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 7,
        imageSrc: './images/세트럴.jpg',
        name: '상품명 7',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 8,
        imageSrc: './images/알람시계.jpg',
        name: '상품명 8',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 9,
        imageSrc: './images/이어폰.jpg',
        name: '상품명 9',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    },
    {
        rank: 10,
        imageSrc: './images/폼클랜징.jpg',
        name: '상품명 10',
        brand: '브랜드명',
        originalPrice: '40,500원',
        discountedPrice: '24,300원',
        discount: '40% 할인',
        reviews: '리뷰 100개'
    }
];

/// 상품 목록을 동적으로 추가하는 함수
function loadProducts() {
    const productList = document.getElementById('product-list');

    // 두 개의 row를 생성
    const row1 = document.createElement('div');
    row1.className = 'row justify-content-center mb-4';
    const row2 = document.createElement('div');
    row2.className = 'row justify-content-center';

    products.forEach((product, index) => {
        // 상품 항목을 위한 div 요소 생성
        const productItem = document.createElement('div');
        productItem.className = 'col-6 col-md-4 col-lg-2 mb-4'; // 한 줄에 5개를 배치하도록 설정

        // 상품 카드의 HTML 내용 생성
        productItem.innerHTML = `
            <div class="product-item border p-3">
                <div class="product-rank">${product.rank}</div>
                <img src="${product.imageSrc}" class="img-fluid mb-2" alt="상품 이미지">
                <h5 class="product-name">${product.name}</h5>
                <p class="product-brand">${product.brand}</p>
                <p class="product-price"><span class="original-price">${product.originalPrice}</span> <span
                        class="discounted-price text-danger">${product.discountedPrice}</span></p>
                <p class="product-discount">${product.discount}</p>
                <p class="product-reviews">${product.reviews}</p>
            </div>
        `;

        // 첫 번째 row에 5개의 상품을 추가, 나머지는 두 번째 row에 추가
        if (index < 5) {
            row1.appendChild(productItem);
        } else {
            row2.appendChild(productItem);
        }
    });

    // 생성한 row를 productList에 추가
    productList.appendChild(row1);
    productList.appendChild(row2);
}

// 페이지가 로드될 때 상품을 로드
document.addEventListener('DOMContentLoaded', loadProducts);
