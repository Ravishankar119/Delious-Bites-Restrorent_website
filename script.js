// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Menu Items Data
const menuItems = [
    // Appetizers
    {
        id: 1,
        name: 'Bruschetta',
        category: 'appetizers',
        price: '₹150',
        description: 'Toasted bread topped with tomatoes, garlic, and fresh basil',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f'
    },
    {
        id: 2,
        name: 'Caesar Salad',
        category: 'appetizers',
        price: '₹180',
        description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
        image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9'
    },
    {
        id: 3,
        name: 'Calamari Fritti',
        category: 'appetizers',
        price: '₹250',
        description: 'Crispy fried calamari served with marinara sauce and lemon',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641'
    },
    {
        id: 4,
        name: 'Garlic Bread',
        category: 'appetizers',
        price: '₹120',
        description: 'Toasted baguette with garlic butter and herbs',
        image: 'https://images.pexels.com/photos/6940974/pexels-photo-6940974.jpeg'
    },
    
    // Main Course
    {
        id: 5,
        name: 'Grilled Salmon',
        category: 'main-course',
        price: '₹350',
        description: 'Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
    },
    {
        id: 6,
        name: 'Beef Tenderloin',
        category: 'main-course',
        price: '₹380',
        description: 'Premium cut beef with red wine reduction and truffle mashed potatoes',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947'
    },
    {
        id: 7,
        name: 'Chicken Marsala',
        category: 'main-course',
        price: '₹280',
        description: 'Pan-seared chicken breast in Marsala wine sauce with mushrooms',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e'
    },
    {
        id: 8,
        name: 'Vegetable Risotto',
        category: 'main-course',
        price: '₹220',
        description: 'Creamy Arborio rice with seasonal vegetables and parmesan',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371'
    },
    {
        id: 9,
        name: 'Seafood Pasta',
        category: 'main-course',
        price: '₹320',
        description: 'Linguine with shrimp, mussels, and calamari in white wine sauce',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8'
    },
    
    // Desserts
    {
        id: 10,
        name: 'Tiramisu',
        category: 'desserts',
        price: '₹160',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9'
    },
    {
        id: 11,
        name: 'Chocolate Lava Cake',
        category: 'desserts',
        price: '₹180',
        description: 'Warm chocolate cake with a molten center, served with vanilla ice cream',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c'
    },
    {
        id: 12,
        name: 'New York Cheesecake',
        category: 'desserts',
        price: '₹170',
        description: 'Creamy cheesecake with berry compote and whipped cream',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
    },
    {
        id: 13,
        name: 'Crème Brûlée',
        category: 'desserts',
        price: '₹190',
        description: 'Classic French vanilla custard with caramelized sugar top',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307'
    },
    
    // Beverages
    {
        id: 14,
        name: 'Fresh Fruit Smoothie',
        category: 'beverages',
        price: '₹150',
        description: 'Blend of seasonal fruits with yogurt and honey',
        image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82'
    },
    {
        id: 15,
        name: 'Signature Cocktail',
        category: 'beverages',
        price: '₹250',
        description: 'House special cocktail with premium spirits and fresh ingredients',
        image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'
    },
    {
        id: 16,
        name: 'Artisanal Coffee',
        category: 'beverages',
        price: '₹120',
        description: 'Freshly brewed specialty coffee with choice of milk',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
    }
];

// Function to create menu item card
function createMenuItemCard(item) {
    return `
        <div class="menu-item" data-category="${item.category}">
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-info">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="price">${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="category-tag">${item.category.replace('-', ' ')}</span>
                </div>
            </div>
        </div>
    `;
}

// Function to display menu items with animation
function displayMenuItems(category = 'all') {
    const menuContainer = document.getElementById('menu-items');
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Clear existing items
    menuContainer.innerHTML = '';
    
    // Add items with fade-in animation
    filteredItems.forEach((item, index) => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = createMenuItemCard(item);
        menuItem.style.opacity = '0';
        menuItem.style.transform = 'translateY(20px)';
        menuContainer.appendChild(menuItem.firstElementChild);
        
        // Trigger animation
        setTimeout(() => {
            menuItem.firstElementChild.style.opacity = '1';
            menuItem.firstElementChild.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Initialize menu display
displayMenuItems();

// Menu category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.transform = 'translateY(0)';
        });
        
        // Add active class to clicked button
        button.classList.add('active');
        button.style.transform = 'translateY(-2px)';
        
        // Display filtered menu items
        displayMenuItems(button.dataset.category);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
}); 