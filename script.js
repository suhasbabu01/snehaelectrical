// Sample BESCOM news data (in a real implementation, this would come from an API)
const bescomNews = [
    {
        id: 1,
        title: "New Online Application Portal for Electrical Connections",
        excerpt: "BESCOM has launched a new simplified online portal for applying for new electrical connections, making the process faster and more transparent.",
        date: "June 15, 2023",
        category: "schemes",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/WhatsApp%20Image%202023-06-15%20at%2012.29.37%20PM.jpeg",
        link: "#"
    },
    {
        id: 2,
        title: "Revised Tariff Structure for Commercial Establishments",
        excerpt: "BESCOM has announced revised tariff rates for commercial establishments effective from July 1st, 2023. Check the new rates and categories.",
        date: "May 20, 2023",
        category: "tariff",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/WhatsApp%20Image%202023-05-20%20at%2010.45.15%20AM.jpeg",
        link: "#"
    },
    {
        id: 3,
        title: "Solar Rooftop Scheme with Enhanced Subsidies",
        excerpt: "BESCOM in collaboration with KREDL has launched an enhanced solar rooftop scheme with increased subsidies for residential consumers.",
        date: "April 10, 2023",
        category: "schemes",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/WhatsApp%20Image%202023-04-10%20at%203.15.30%20PM.jpeg",
        link: "#"
    },
    {
        id: 4,
        title: "Safety Guidelines for Monsoon Season",
        excerpt: "BESCOM has issued new safety guidelines for the monsoon season to prevent electrical accidents. All consumers are advised to follow these guidelines strictly.",
        date: "June 5, 2023",
        category: "safety",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/monsoon-safety.jpg",
        link: "#"
    },
    {
        id: 5,
        title: "Scheduled Maintenance in Bangalore South Division",
        excerpt: "Power supply will be temporarily suspended in parts of Bangalore South Division on June 25th for scheduled maintenance work from 10 AM to 4 PM.",
        date: "June 18, 2023",
        category: "maintenance",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/maintenance-notice.jpg",
        link: "#"
    },
    {
        id: 6,
        title: "New Time-of-Day Tariff for Industrial Consumers",
        excerpt: "BESCOM introduces Time-of-Day tariff for industrial consumers to encourage energy consumption during off-peak hours with discounted rates.",
        date: "May 30, 2023",
        category: "tariff",
        image: "https://bescom.karnataka.gov.in/storage/pdf-files/tod-tariff.jpg",
        link: "#"
    }
];

// Sample Projects Data
const projectsData = [
    {
        id: 1,
        title: "Industrial Transformer Installation",
        description: "Complete HT transformer installation for a manufacturing unit in Peenya Industrial Area, including BESCOM approvals and commissioning.",
        //image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
        image: "./img/Transformer.jpeg"
    },
    {
        id: 2,
        title: "Commercial Complex Electrical Setup",
        description: "Complete LT electrical installation for a 5-story commercial complex in Whitefield, including distribution boards and BESCOM connection.",
        //image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        image: "./img/LTmeter.jpeg"
    },
    {
        id: 3,
        title: "Apartment Complex Power Upgrade",
        description: "Additional load approval and electrical infrastructure upgrade for a 50-unit apartment complex in JP Nagar, including meter shifting.",
        image: "https://images.unsplash.com/photo-1621905251189-08e43c5b79ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 4,
        title: "Factory HT Line Installation",
        description: "11kV HT line installation for an automotive parts manufacturing facility with transformer setup and safety systems.",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: 5,
        title: "Shopping Mall Electrical Infrastructure",
        description: "Complete electrical infrastructure for a 3-level shopping mall including LT panels, emergency systems, and BESCOM coordination.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
        id: 6,
        title: "Hospital Power Backup System",
        description: "Installation of dedicated power backup systems and electrical safety measures for a multi-specialty hospital.",
        image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    }
];

// Mobile Navigation Toggle
document.querySelector('.mobile-toggle').addEventListener('click', function () {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

// Update current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    const backToTop = document.querySelector('.back-to-top');

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('active');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('active');
    }
});

// Back to top functionality
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature, .project-card, .client-card, .contact-item, .form-group, .news-card, .blog-card');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Initial call and scroll event listener
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Dynamic News Loading
function loadNews(category = 'all') {
    const newsContainer = document.getElementById('news-container');

    // Show loading state
    newsContainer.innerHTML = `
        <div class="news-loader">
            <div class="spinner"></div>
            <p>Loading latest BESCOM updates...</p>
        </div>
    `;

    // Simulate API call delay
    setTimeout(() => {
        let filteredNews = bescomNews;

        if (category !== 'all') {
            filteredNews = bescomNews.filter(news => news.category === category);
        }

        if (filteredNews.length === 0) {
            newsContainer.innerHTML = `
                <div class="text-center">
                    <h3>No news available in this category</h3>
                    <p>Please check back later for updates.</p>
                </div>
            `;
            return;
        }

        // Generate news cards HTML
        const newsHTML = filteredNews.map(news => `
            <div class="news-card">
                <div class="news-img">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <div class="news-content">
                    <div class="news-date">${news.date}</div>
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <a href="${news.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `).join('');

        // Update news container
        newsContainer.innerHTML = `
            <div class="news-grid">
                ${newsHTML}
            </div>
        `;

        // Trigger animations for newly loaded cards
        setTimeout(() => {
            animateOnScroll();
        }, 100);

    }, 800); // Simulate network delay
}

// News category tabs functionality
document.querySelectorAll('.news-tab').forEach(tab => {
    tab.addEventListener('click', function () {
        // Update active tab
        document.querySelectorAll('.news-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Load news for selected category
        const category = this.getAttribute('data-category');
        loadNews(category);
    });
});

// Load Projects
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');

    // Generate project cards HTML
    const projectsHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-img">
                <img src="${project.image}" alt="${project.title}" 
                     onerror="this.src='https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80'; this.alt='Image not available'">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </div>
    `).join('');

    // Update projects container
    projectsContainer.innerHTML = projectsHTML;

    // Trigger animations for newly loaded cards
    setTimeout(() => {
        animateOnScroll();
    }, 100);
}

// Projects horizontal scroll functionality
function initProjectsScroll() {
    const projectsContainer = document.getElementById('projects-container');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');

    scrollLeftBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: -350,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        projectsContainer.scrollBy({
            left: 350,
            behavior: 'smooth'
        });
    });
}

// Location Popup Functionality
function initLocationPopup() {
    const openLocationBtn = document.getElementById('open-location');
    const closeLocationBtn = document.getElementById('close-location');
    const locationPopup = document.getElementById('location-popup');

    openLocationBtn.addEventListener('click', () => {
        locationPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeLocationBtn.addEventListener('click', () => {
        locationPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close popup when clicking outside the content
    locationPopup.addEventListener('click', (e) => {
        if (e.target === locationPopup) {
            locationPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && locationPopup.classList.contains('active')) {
            locationPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Email Popup Functionality
function initEmailPopup() {
    const openEmailBtn = document.getElementById('open-email');
    const closeEmailBtn = document.getElementById('close-email');
    const emailPopup = document.getElementById('email-popup');
    const copyEmailBtn = document.getElementById('copy-email');

    openEmailBtn.addEventListener('click', () => {
        emailPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeEmailBtn.addEventListener('click', () => {
        emailPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Copy email to clipboard
    copyEmailBtn.addEventListener('click', () => {
        const email = 'snehaelectrical96@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            // Show success feedback
            const originalText = copyEmailBtn.innerHTML;
            copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyEmailBtn.style.backgroundColor = '#28a745';

            setTimeout(() => {
                copyEmailBtn.innerHTML = originalText;
                copyEmailBtn.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email: ', err);
            alert('Failed to copy email to clipboard. Please copy manually: ' + email);
        });
    });

    // Close popup when clicking outside the content
    emailPopup.addEventListener('click', (e) => {
        if (e.target === emailPopup) {
            emailPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && emailPopup.classList.contains('active')) {
            emailPopup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Phone functionality
function initPhoneFunctionality() {
    const phoneBtn = document.getElementById('open-phone');

    phoneBtn.addEventListener('click', () => {
        const phoneNumber = '+919902827569';

        // Create a confirmation dialog
        const confirmed = confirm(`Do you want to call ${phoneNumber}?`);

        if (confirmed) {
            // For mobile devices, this will trigger the phone app
            window.location.href = `tel:${phoneNumber}`;

            // For desktop, show a message
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                alert(`Please call ${phoneNumber} to reach us.`);
            }
        }
    });
}

// Social links functionality
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add analytics or tracking here if needed
            console.log(`Social link clicked: ${link.href}`);
            // The link will naturally navigate to the social media page
        });
    });
}

// Function to validate form
function validateForm() {
    // Reset error messages
    document.querySelectorAll('.error').forEach(error => {
        error.style.display = 'none';
    });
    
    // Hide success messages
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('whatsappNotification').style.display = 'none';
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation flags
    let isValid = true;
    
    // Validate name
    if (name === '') {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validate service
    if (service === '' || service === null) {
        document.getElementById('serviceError').style.display = 'block';
        isValid = false;
    }
    
    return { isValid, name, email, phone, service, message };
}

// Function to prepare message content
function prepareMessageContent(name, email, phone, service, message) {
    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
            `;
    
    const whatsappMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;
    
    return { emailBody, whatsappMessage };
}

// Email button event listener
document.getElementById('sendEmailBtn').addEventListener('click', function() {
    const validation = validateForm();
    
    if (validation.isValid) {
        const { emailBody } = prepareMessageContent(
            validation.name, 
            validation.email, 
            validation.phone, 
            validation.service, 
            validation.message
        );
        
        // Encode email body for URL
        const encodedEmailBody = encodeURIComponent(emailBody);
        
        // Create mailto link
        const mailtoLink = `mailto:snehaelectrical96@gmail.com?subject=New Contact Form Submission&body=${encodedEmailBody}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').textContent = "Email client opened with your message!";
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
});

// WhatsApp button event listener
document.getElementById('sendWhatsappBtn').addEventListener('click', function() {
    const validation = validateForm();
    
    if (validation.isValid) {
        const { whatsappMessage } = prepareMessageContent(
            validation.name, 
            validation.email, 
            validation.phone, 
            validation.service, 
            validation.message
        );
        
        // Encode WhatsApp message for URL
        const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp link
        const whatsappLink = `https://wa.me/919902827569?text=${encodedWhatsappMessage}`;
        
        // Set the WhatsApp link for manual use
        document.getElementById('whatsappLink').href = whatsappLink;
        
        // Try to open WhatsApp in a new tab
        const newWindow = window.open(whatsappLink, '_blank');
        
        // If popup was blocked, show notification with manual link
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            document.getElementById('whatsappNotification').style.display = 'block';
        } else {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('successMessage').textContent = "WhatsApp opened with your message!";
        }
        
        // Hide messages after 5 seconds
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('whatsappNotification').style.display = 'none';
        }, 5000);
    }
});

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', function () {
    loadNews();
    loadProjects();
    initProjectsScroll();
    initLocationPopup();
    initEmailPopup();
    initPhoneFunctionality();
    initSocialLinks();
});
