const hairstyles = [
    {
        id: 1,
        name: '클래식보브컷',
        category: 'women-bob',
        description: '깔끔하고 세련된 느낌의 정석 단발 스타일',
        imageUrl: 'images/stlye1.jpg'
    },
    {
        id: 2,
        name: '하이레이어드컷',
        category: 'women-long',
        description: '가벼운 층감으로 얼굴형을 보완하고<br> 세련된 무드를 연출하는 스타일',
        imageUrl: 'images/style2.jpg'
    },
    {
        id: 3,
        name: '레이어드컷',
        category: 'women-long',
        description: '부드러운 질감 처리로 자연스럽게<br> 흐르는 실루엣을 강조한 스타일',
        imageUrl: 'images/style3.jpg'
    },
    {
        id: 4,
        name: '히피펌',
        category: 'women-perm',
        description: '자유분방하고 개성 넘치는 볼륨감 있는 펌',
        imageUrl: 'images/style4.jpg'
    },
    {
        id: 5,
        name: '애쉬브라운발레아쥬',
        category: 'women-color',
        description: '자연스러운 그라데이션이 돋보이는 컬러링',
        imageUrl: 'images/style5.jpg'
    },
    {
        id: 6,
        name: '내추럴로우번',
        category: 'women-long',
        description: '격식 있는 자리나 일상에서도 잘 어울리는 묶음 머리',
        imageUrl: 'images/style6.jpg'
    },
    {
        id: 7,
        name: '레이어드C컬펌',
        category: 'women-perm',
        description: '가벼운 층감과 안으로 말린 컬로 정돈된 느낌',
        imageUrl: 'images/style7.jpg'
    },
    {
        id: 8,
        name: '슬릭백언더컷',
        category: 'men-short',
        description: '깔끔한 라인과 세련된 남성미가 돋보이는 스타일',
        imageUrl: 'images/style8.jpg'
    }
];

const galleryContainer = document.getElementById('gallery-container');
const categoryButtons = document.querySelectorAll('.nav-btn, .sub-nav-btn');

// 카테고리 이름을 한글로 변환하는 함수
function getCategoryName(category) {
    const categories = {
        'women-long': '긴머리',
        'women-bob': '단발',
        'women-short': '숏컷',
        'women-perm': '펌스타일',
        'women-color': '컬러',
        'men-short': '숏기장',
        'men-medium': '미디움기장',
        'men-long': '롱기장',
        'men-perm': '펌스타일',
        'men-color': '컬러'
    };
    return categories[category] || category;
}

// 갤러리 아이템 생성 함수
function createGalleryItem(style) {
    const card = document.createElement('div');
    card.classList.add('hairstyle-card');
    card.setAttribute('data-category', style.category);

    card.innerHTML = `
        <div class="image-container">
            <img src="${style.imageUrl}" alt="${style.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x500?text=Image+Needed'">
        </div>
        <div class="card-info">
            <span class="card-category">${getCategoryName(style.category)}</span>
            <h3 class="card-title">${style.name}</h3>
            <p class="card-description">${style.description}</p>
        </div>
    `;

    return card;
}

// 갤러리 렌더링 함수
function renderGallery(filter = 'all') {
    galleryContainer.innerHTML = '';

    const filteredStyles = hairstyles.filter(style => {
        if (filter === 'all') return true;
        // 대분류(women, men) 선택 시 해당 하위 모든 스타일 포함
        if (filter === 'women') return style.category.startsWith('women-');
        if (filter === 'men') return style.category.startsWith('men-');
        // 세부 분류 선택 시 정확히 일치하는 스타일만 포함
        return style.category === filter;
    });

    filteredStyles.forEach((style, index) => {
        const item = createGalleryItem(style);
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        galleryContainer.appendChild(item);

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// 카테고리 버튼 이벤트 리스너
categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // 모든 버튼에서 active 클래스 제거
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // 클릭된 버튼에 active 추가
        button.classList.add('active');

        // 필터링 적용
        const category = button.getAttribute('data-category');
        renderGallery(category);

        // 서브메뉴 버튼 클릭 시 메인 버튼도 active 표시를 주고 싶다면 추가 로직 가능
    });
});

// 초기 렌더링
window.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
