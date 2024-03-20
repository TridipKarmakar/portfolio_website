function scrollToNext() {
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      currentSectionIndex = index;
    }
  });

  const nextSectionIndex = currentSectionIndex + 1;
  if (nextSectionIndex < sections.length) {
    sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
  }
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
