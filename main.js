const galleryContainer = document.getElementById('gallery-container');

const hairstyles = [
    {
        name: 'Short Bob',
        imageUrl: 'https://images.unsplash.com/photo-1587402092301-72147ac53b12?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Long Waves',
        imageUrl: 'https://images.unsplash.com/photo-1609132252199-9944299f16ac?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Pixie Cut',
        imageUrl: 'https://images.unsplash.com/photo-1599849504880-73c683838e04?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Curly Hair',
        imageUrl: 'https://images.unsplash.com/photo-1552858715-7a3b33b7c26b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Braids',
        imageUrl: 'https://images.unsplash.com/photo-1606122247242-d59556856b3c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Bun',
        imageUrl: 'https://images.unsplash.com/photo-1519580493863-7e44a4f8f483?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Afro',
        imageUrl: 'https://images.unsplash.com/photo-1596701062927-f416c5354e69?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Ponytail',
        imageUrl: 'https://images.unsplash.com/photo-1621210404337-e54737a4c7b8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];

hairstyles.forEach(hairstyle => {
    const item = document.createElement('div');
    item.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src = hairstyle.imageUrl;
    img.alt = hairstyle.name;

    const name = document.createElement('div');
    name.classList.add('gallery-item-name');
    name.textContent = hairstyle.name;

    item.appendChild(img);
    item.appendChild(name);
    galleryContainer.appendChild(item);
});
