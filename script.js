const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
const cards = slider.querySelectorAll('.card');

// Create a dot for each card
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dotsList = dotsContainer.querySelectorAll('.dot');

// Update active dot when scrolling
slider.addEventListener('scroll', () => {
  const index = Math.round(slider.scrollLeft / slider.clientWidth);
  dotsList.forEach(d => d.classList.remove('active'));
  dotsList[index].classList.add('active');
});

// Slow down scroll on desktop
slider.addEventListener('wheel', (e) => {
  e.preventDefault();
  slider.scrollLeft += e.deltaY * 0.3;
}, { passive: false });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, .why-us, .title-section, .agency-section').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
  });
});