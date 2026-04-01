const hairstyles = [
    {
        id: 1,
        name: '하이레이어드+C컬펌',
        category: 'women-perm',
        description: '볼륨을 극대화 하는 스타일로 얼굴형 보완해주며<br>여성스러우며 생기 넘치는 스타일',
        imageUrl: 'images/style1.jpg'
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
        name: '하이레이어드 C컬펌',
        category: 'women-perm',
        description: '자유분방하고 개성 넘치는 볼륨감 있는 펌',
        imageUrl: 'images/style4.jpg'
    },
    {
        id: 5,
        name: '매트브라운',
        category: 'women-color',
        description: '붉은느낌 없는 차분한 컬러',
        imageUrl: 'images/style5.jpg'
    },
    {
        id: 6,
        name: '여성긴머리울프컷',
        category: 'women-short',
        description: '유니크하고 가벼운 텍스쳐의 스타일',
        imageUrl: 'images/style6.jpg'
    },
    {
        id: 7,
        name: '쉐도우펌',
        category: 'men-perm',
        description: '가벼운 층감과 안으로 말린 컬로 정돈된 느낌',
        imageUrl: 'images/style7.jpg'
    },
    {
        id: 8,
        name: '슬릭백언더컷',
        category: 'men-short',
        description: '깔끔하고 라인과 세련된 남성미가 돋보이는 스타일',
        imageUrl: 'images/style8.jpg'
    },
    // 추가 셋팅 (9-30)
    { id: 9, name: '스타일준비중', category: 'women-long', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style9.jpg' },
    { id: 10, name: '스타일준비중', category: 'women-bob', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style10.jpg' },
    { id: 11, name: '스타일준비중', category: 'women-short', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style11.jpg' },
    { id: 12, name: '스타일준비중', category: 'women-perm', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style12.jpg' },
    { id: 13, name: '스타일준비중', category: 'women-color', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style13.jpg' },
    { id: 14, name: '스타일준비중', category: 'men-short', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style14.jpg' },
    { id: 15, name: '스타일준비중', category: 'men-medium', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style15.jpg' },
    { id: 16, name: '스타일준비중', category: 'men-long', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style16.jpg' },
    { id: 17, name: '스타일준비중', category: 'men-perm', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style17.jpg' },
    { id: 18, name: '스타일준비중', category: 'men-color', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style18.jpg' },
    { id: 19, name: '스타일준비중', category: 'women-long', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style19.jpg' },
    { id: 20, name: '스타일준비중', category: 'women-bob', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style20.jpg' },
    { id: 21, name: '스타일준비중', category: 'women-short', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style21.jpg' },
    { id: 22, name: '스타일준비중', category: 'women-perm', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style22.jpg' },
    { id: 23, name: '스타일준비중', category: 'women-color', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style23.jpg' },
    { id: 24, name: '스타일준비중', category: 'men-short', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style24.jpg' },
    { id: 25, name: '스타일준비중', category: 'men-medium', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style25.jpg' },
    { id: 26, name: '스타일준비중', category: 'men-long', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style26.jpg' },
    { id: 27, name: '스타일준비중', category: 'men-perm', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style27.jpg' },
    { id: 28, name: '스타일준비중', category: 'men-color', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style28.jpg' },
    { id: 29, name: '스타일준비중', category: 'women-long', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style29.jpg' },
    { id: 30, name: '스타일준비중', category: 'women-bob', description: '새로운 스타일이<br>곧 업데이트됩니다.', imageUrl: 'images/style30.jpg' }
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
    if (!galleryContainer) return;
    galleryContainer.innerHTML = '';

    let filteredStyles = hairstyles.filter(style => {
        if (filter === 'all') return true;
        if (filter === 'women') return style.category.startsWith('women-');
        if (filter === 'men') return style.category.startsWith('men-');
        return style.category === filter;
    });

    // 'All' 카테고리일 때만 랜덤으로 섞기
    if (filter === 'all') {
        filteredStyles = filteredStyles.sort(() => Math.random() - 0.5);
    }

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
        const category = button.getAttribute('data-category');
        if (!category) return;

        if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/' && !window.location.pathname.includes('index.html')) {
            window.location.href = 'index.html?category=' + category;
            return;
        }

        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderGallery(category);
    });
});

// --- Chat Widget Logic ---
const chatToggleBtn = document.getElementById('chat-toggle-btn');
const chatWindow = document.getElementById('chat-window');
const closeChat = document.getElementById('close-chat');
const sendChat = document.getElementById('send-chat');
const chatInput = document.getElementById('chat-input');
const chatBody = document.getElementById('chat-body');

function toggleChat() {
    if (!chatWindow) return;
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
        chatInput.focus();
    }
}

function appendMessage(text, side) {
    const msg = document.createElement('div');
    msg.classList.add('message', side);
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleSendMessage() {
    const text = chatInput.value.trim();
    if (text) {
        appendMessage(text, 'user');
        chatInput.value = '';
        setTimeout(() => {
            appendMessage('메시지를 확인했습니다. 담당 스타일리스트가 곧 답변 드릴 예정입니다. 잠시만 기다려 주세요!', 'bot');
        }, 1000);
    }
}

// FAQ Button Handler
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('opt-btn')) {
        const action = e.target.getAttribute('data-action');
        
        if (action === 'price') {
            appendMessage('가격문의를 주셨군요!<br>아래 가격표를 확인해 주세요.', 'bot');
            setTimeout(() => {
                appendMessage('<img src="assets/price/price_list.jpg" alt="Price List" onerror="this.src=\'https://via.placeholder.com/300x400?text=Price+List+Coming+Soon\'">', 'bot');
            }, 500);
        } else if (action === 'location') {
            appendMessage('영화관 헤어 스튜디오 위치는 다음과 같습니다:<br><strong>서울 마포구 토정로 17-9 HOMELEY</strong>', 'bot');
        } else if (action === 'contact') {
            appendMessage('스타일리스트와 직접 소통하고 싶으시면 인스타그램을 방문해 주세요!<br><a href="https://www.instagram.com/0_a_hair/?hl=ko" target="_blank" style="color:var(--accent-color); font-weight:700;">인스타그램 바로가기</a>', 'bot');
        }
    }
});

if (chatToggleBtn) chatToggleBtn.addEventListener('click', toggleChat);
if (closeChat) closeChat.addEventListener('click', toggleChat);
if (sendChat) sendChat.addEventListener('click', handleSendMessage);
if (chatInput) chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

// 초기 렌더링
window.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    
    // URL 파라미터 체크 (다른 페이지에서 카테고리 클릭하고 올 때)
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        renderGallery(category);
        const targetBtn = document.querySelector(`[data-category="${category}"]`);
        if (targetBtn) {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            targetBtn.classList.add('active');
        }
    }
});
