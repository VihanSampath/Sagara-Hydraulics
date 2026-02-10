const products = [
    {
        id: 1,
        name: "Hydraulic Cylinder - Heavy Duty",
        category: "cylinders",
        image: "assets/images/cylinder.jpg",
        description: "Double acting heavy duty cylinder for construction machinery. High pressure resistance."
    },
    {
        id: 2,
        name: "Gear Pump Series 20",
        category: "pumps",
        image: "assets/images/pump.jpg",
        description: "High efficiency gear pump suitable for industrial power units."
    },
    {
        id: 3,
        name: "Directional Control Valve",
        category: "valves",
        image: "assets/images/valve.jpg",
        description: "Monoblock directional control valve with pressure relief."
    },
    {
        id: 4,
        name: "Hydraulic Oil Seal Kit",
        category: "seals",
        image: "assets/images/seal.jpg",
        description: "Complete seal kit for hydraulic cylinders and pumps."
    },
    {
        id: 5,
        name: "Hydraulic Power Unit",
        category: "power-units",
        image: "assets/images/powerunit.jpg",
        description: "Custom built hydraulic power packs for industrial automation."
    },
    {
        id: 6,
        name: "High Pressure Hose",
        category: "hoses",
        image: "assets/images/hose.jpg",
        description: "2-wire braided high pressure hydraulic hose with fittings."
    },
    {
        id: 7,
        name: "Piston Pump",
        category: "pumps",
        image: "assets/images/piston-pump.jpg",
        description: "Variable displacement piston pump for mobile applications."
    },
    {
        id: 8,
        name: "Custom Hydraulic System",
        category: "custom",
        image: "assets/images/system.jpg",
        description: "Tailor-made hydraulic systems designated for specific needs."
    },
    {
        id: 9,
        name: "Spare Parts",
        category: "parts",
        image: "assets/images/parts.jpg",
        description: "Various spare parts for hydraulic maintenance."
    }
];

function renderProducts(filter = 'all') {
    const grid = document.getElementById('shop-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none';this.parentElement.innerHTML='<div style=\\'color:#666;display:flex;align-items:center;justify-content:center;height:100%;\\'>No Image</div>'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <a href="https://wa.me/94716803228?text=I am interested in ${encodeURIComponent(product.name)}" class="btn btn-primary" style="width: 100%; text-align: center;" target="_blank">Inquire via WhatsApp</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const categoryLinks = document.querySelectorAll('.category-filter');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all
            categoryLinks.forEach(l => l.classList.remove('active'));
            // Add to clicked
            e.target.classList.add('active');

            const category = e.target.getAttribute('data-category');
            renderProducts(category);
        });
    });
});
