// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll 
const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal 
const dropdown = document.getElementById('dropdown');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalContent = document.querySelector('.modal-content p');

dropdown.addEventListener('change', function() {
    const selectedOption = dropdown.options[dropdown.selectedIndex].text;
    modalContent.textContent = selectedOption;
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
