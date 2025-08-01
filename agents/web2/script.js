
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll('.fade-in');
  const onScroll = () => {
    fadeInElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('opacity-100');
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});
