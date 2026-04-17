(function () {
  const menuBtn = document.getElementById('menuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      mobileNav.classList.toggle('open');
      const expanded = mobileNav.classList.contains('open');
      menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    document.addEventListener('click', function (event) {
      if (!mobileNav.contains(event.target) && !menuBtn.contains(event.target)) {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const yearNode = document.getElementById('year');
  if (yearNode) yearNode.textContent = new Date().getFullYear();
})();
