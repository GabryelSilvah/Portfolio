const btn = document.getElementById('btn');

function toggleMenu() {
  const mobile = document.getElementById('mobile');
  mobile.classList.toggle('active');}

  btn.addEventListener('click', toggleMenu);