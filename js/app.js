/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Assuming you have an array of data representing the navigation links

const sections = document.querySelectorAll('section');
const navbarList = document.getElementById("navbar__list");

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollY = window.scrollY;
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const isSectionVisible = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
  
      section.classList.remove('active'); // Remove active class from all sections first
  
      if (isSectionVisible) {
        section.classList.add('active'); // Add active class to the visible section
      }
    });
  });

// Create navigation buttons to sections
sections.forEach((section, index) => {
    const li = document.createElement("li");
    li.classList.add("menu__item");
    const button = document.createElement("a");
    button.classList.add("menu__link");
    button.textContent = `Section ${index + 1}`;
    button.addEventListener("click", () => {
        // Scroll to corresponding section when button is clicked
        section.scrollIntoView({ behavior: "smooth" });
    });
    li.appendChild(button);
    navbarList.appendChild(li);
});

