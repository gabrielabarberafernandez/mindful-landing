// año automático
document.getElementById('year').textContent = new Date().getFullYear();

// nav toggle accessible
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navList.style.display = expanded ? 'none' : 'flex';
});

// smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close nav on mobile
      if (window.innerWidth < 640){
        navList.style.display = 'none';
        navToggle.setAttribute('aria-expanded','false');
      }
    }
  });
});
