const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
           console.log(entry.target)
           entry.target.classList.add('show');
        } else {
           entry.target.classList.remove('show');
        }
    });
});
const todoElements=document.querySelectorAll('.todo');
todoElements.forEach(el => observer.observe(el));


window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('solid');
    } else {
        header.classList.remove('solid');
    }
});