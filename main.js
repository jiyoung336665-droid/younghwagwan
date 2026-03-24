const hairstyles = [
    {
        id: 1,
        name: '클래식 보브 컷',
        category: 'short',
        description: '깔끔하고 세련된 느낌의 정석 단발 스타일',
        imageUrl: 'images/stlye1.jpg'
    },
    {
        id: 2,
        name: '레이어드 컷',
        category: 'long',
        description: '가벼운 층감으로 얼굴형을 보완하고 세련된 무드를 연출하는 스타일',
        imageUrl: 'images/style2.jpg'
    },
    {
        id: 3,
        name: '시크 픽시 컷',
        category: 'short',
        description: '대담하고 현대적인 매력의 숏컷 스타일',
        imageUrl: 'images/style3.jpg'
    },
    {
        id: 4,
        name: '히피 펌',
        category: 'curly',
        description: '자유분방하고 개성 넘치는 볼륨감 있는 펌',
        imageUrl: 'images/style4.jpg'
    },
    {
        id: 5,
        name: '애쉬 브라운 발레아쥬',
        category: 'trend',
        description: '자연스러운 그라데이션이 돋보이는 컬러링',
        imageUrl: 'images/style5.jpg'
    },
    {
        id: 6,
        name: '내추럴 로우 번',
        category: 'long',
        description: '격식 있는 자리나 일상에서도 잘 어울리는 묶음 머리',
        imageUrl: 'images/style6.jpg'
    },
    {
        id: 7,
        name: '레이어드 C컬 펌',
        category: 'curly',
        description: '가벼운 층감과 안으로 말린 컬로 정돈된 느낌',
        imageUrl: 'images/style7.jpg'
    },
    {
        id: 8,
        name: '슬릭 백 언더컷',
        category: 'trend',
        description: '깔끔한 라인과 세련된 남성미가 돋보이는 스타일',
        imageUrl: 'images/style8.jpg'
    }
];

const galleryContainer = document.getElementById('gallery-container');
const categoryButtons = document.querySelectorAll('.nav-btn');

// 카테고리 이름을 한글로 변환하는 함수
function getCategoryName(category) {
    const categories = {
        short: '단발/숏컷',
        long: '긴머리',
        curly: '펌/웨이브',
        trend: '트렌드'
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
    // 기존 아이템 제거
    galleryContainer.innerHTML = '';

    const filteredStyles = filter === 'all' 
        ? hairstyles 
        : hairstyles.filter(style => style.category === filter);

    filteredStyles.forEach((style, index) => {
        const item = createGalleryItem(style);
        
        // 애니메이션 효과를 위해 시간차를 두고 추가
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
    button.addEventListener('click', () => {
        // 활성화 버튼 스타일 변경
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 필터링 적용
        const category = button.getAttribute('data-category');
        renderGallery(category);
    });
});

// 초기 렌더링
window.addEventListener('DOMContentLoaded', () => {
    renderGallery();
});
