const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");


themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  themeIcon.classList.replace(isDark ? "fa-moon" : "fa-sun", isDark ? "fa-sun" : "fa-moon");
});


const animatedSections = document.querySelectorAll("[data-animate]");


animatedSections.forEach((el) => el.classList.add("hidden"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); 
      }
    });
  },
  {
    threshold: 0.2,
  }
);

animatedSections.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  
  sections.forEach(sec => sec.classList.add('hidden'));

 
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);   
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach(sec => observer.observe(sec));
});
