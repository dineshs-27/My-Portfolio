// Header Toggle
let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
})

// Typing Effect
let typed = new Typed('.auto-input', {
    strings: ['Java Developer!', 'UI/UX Designer!', 'Front-End Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
