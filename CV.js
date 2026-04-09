// JavaScript Document
/*
TemplateMo 600 Prism Flux
https://templatemo.com/tm-600-prism-flux
*/

// Portfolio data for carousel (เก็บไว้เป็นข้อมูลอ้างอิง เผื่อใช้ทำอย่างอื่น)
const portfolioData = [
    {
        id: 1,
        title: 'Smart Map System',
        description: 'พัฒนาระบบ Smart Map สำหรับเทศบาลพลูตาหลวง เพื่อใช้ในการบริหารจัดการทรัพย์สินสาธารณะ เช่น ไฟถนน, Wi-Fi และท่อประปาดับเพลิง',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80',
        tech: ['Web Development', 'Mapping API', 'System Design']
    },
    {
        id: 2,
        title: 'Shibuya Crossing Sim',
        description: 'โปรเจกต์กลุ่มวิชาเรียน: พัฒนาและจำลองระบบการจราจรของสี่แยกชิบูย่า ประเทศญี่ปุ่น เพื่อศึกษาการจัดการจราจรและจำลองพฤติกรรม',
        image: 'https://images.unsplash.com/photo-1542051812-f450bc34c3fb?w=800&q=80',
        tech: ['Java', 'Simulation', 'Logic']
    },
    {
        id: 3,
        title: 'Public Service Field Study',
        description: 'การลงพื้นที่ศึกษาดูงานร่วมกับทีม ณ เทศบาลช้างข้าม, จันทนิมิต, พลูตาหลวง และบ้านสวน เพื่อวิเคราะห์และแก้ไขปัญหาจริงในชุมชน',
        image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
        tech: ['Field Research', 'Analysis', 'Teamwork']
    },
    {
        id: 4,
        title: 'Software Development',
        description: 'การศึกษาและเขียนโปรแกรมโครงสร้างระบบ การเขียนโค้ดเพื่อแก้ปัญหาด้วยภาษาหลักอย่าง Java และ JavaScript',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        tech: ['JavaScript', 'Java', 'Algorithms']
    }
];

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header.offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize particles for philosophy section
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if(!particlesContainer) return;

    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        
        // Start particles at random vertical positions throughout the section
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay for natural movement
        particle.style.animationDelay = Math.random() * 20 + 's';
        
        // Random animation duration for variety
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if(menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Smooth scrolling and active navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if(navMenu && menuToggle) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Update active navigation on scroll
function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Form submission
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show success message
        alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.classList.add('hidden');
    }, 1500);
});

// Initialize on load
// ปิดฟังก์ชัน initCarousel() เนื่องจากเราเปลี่ยนไปใช้เลย์เอาต์ Profile แทนแล้ว
// initCarousel(); 
initParticles();