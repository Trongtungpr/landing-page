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

// const sections = document.querySelectorAll('section');
// const navbarList = document.getElementById("navbar__list");

// window.addEventListener('scroll', function() {
//     const sections = document.querySelectorAll('section');
//     const scrollY = window.scrollY;
  
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.offsetHeight;
//       const isSectionVisible = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
  
//       section.classList.remove('active'); // Remove active class from all sections first
  
//       if (isSectionVisible) {
//         section.classList.add('active'); // Add active class to the visible section
//       }
//     });
//   });




// // Create navigation buttons to sections
// sections.forEach((section, index) => {
//     const li = document.createElement("li");
//     li.classList.add("menu__item");
//     const button = document.createElement("a");
//     button.classList.add("menu__link");
//     button.textContent = `Section ${index + 1}`;
//     button.addEventListener("click", () => {
//         // Scroll to corresponding section when button is clicked
//         section.scrollIntoView({ behavior: "smooth" });
//     });
//     li.appendChild(button);
//     navbarList.appendChild(li);
// });
// // Get all the sections and the corresponding navigation links
// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('.nav-link');

// // Function to check if an element is in the viewport
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Function to handle the scroll event
// function handleScroll() {
//   sections.forEach((section, index) => {
//     if (isInViewport(section)) {
//       section.classList.add('active');
//       navLinks[index].classList.add('active');
//     } else {
//       section.classList.remove('active');
//       navLinks[index].classList.remove('active');
//     }
//   });
// }

// // Add scroll event listener to the window
// window.addEventListener('scroll', handleScroll);
// // 1. Lấy danh sách section và danh sách ul
// const sections = document.querySelectorAll('section');
// const navbarList = document.getElementById('navbar__list');

// // 2. Duyệt qua từng section
// sections.forEach(section => {
//   // 3. Lấy thông tin section
//   const sectionId = section.id;
//   // const sectionTitle = section.textContent.trim(); // Lấy tiêu đề section

//   // 4. Tạo button element
//   const li = document.createElement('li');
//   li.textContent = sectionId; // Đặt tiêu đề cho button
//   li.id = `nav-button-${sectionId}`; // Tạo ID duy nhất cho button
//   li.classList.add('menu__link'); // Thêm class CSS cho button

//   // 5. Thêm sự kiện click cho button (tùy chọn)
//   li.addEventListener('click', function() {
//     // Di chuyển đến section tương ứng khi click
//     window.scrollTo({
//       top: document.getElementById(sectionId).offsetTop,
//       behavior: 'smooth'
//     });
//   });

//   // 6. Thêm button vào danh sách ul
//   navbarList.appendChild(li);
// });

// window.addEventListener('scroll', function() {
//   const sections = document.querySelectorAll('section');
//   const navButtons = document.querySelectorAll('.menu__link');

//   for (let i = 0; i < sections.length; i++) {
//     const section = sections[i];
//     const navButton = navButtons[i];
//     const sectionTop = section.offsetTop;
//     const sectionBottom = sectionTop + section.offsetHeight;
//     const currentWindowPosition = window.scrollY;

//     if (currentWindowPosition >= sectionTop && currentWindowPosition < sectionBottom) {
//       navButton.classList.add('active');
//     } else {
//       navButton.classList.remove('active');
//     }
//   }
// });


// const options = {
//   root: null, // Lấy element gốc để theo dõi (null là viewport)
//   threshold: 0.5, // Tỷ lệ phần trăm element cần hiển thị để kích hoạt
//   delay: 0 // Thời gian chờ trước khi kích hoạt
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // Section này đang trong viewport
//       entry.target.classList.add('active');
//     } else {
//       // Section này không còn trong viewport
//       entry.target.classList.remove('active');
//     }
//   });
// }, options);

// // Theo dõi tất cả các section
// sections.forEach(section => {
//   observer.observe(section);
// });

// // ... (Mã JavaScript tạo button trên thanh điều hướng)

// // Thêm sự kiện click cho button
// li.addEventListener('click', function() {
//   // Di chuyển đến section tương ứng khi click
//   const sectionId = this.id.replace('nav-button-', ''); // Lấy ID section
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({
//       behavior: 'smooth' // Cuộn trang mượt mà
//     });
//   }
// });

// 1. Lấy danh sách section và danh sách ul
const sections = document.querySelectorAll('section');
const navbarList = document.getElementById('navbar__list');

// 2. Duyệt qua từng section
sections.forEach(section => {
  // 3. Lấy thông tin section
  const sectionId = section.id;
  // const sectionTitle = section.textContent.trim(); // Lấy tiêu đề section

  // 4. Tạo button element
  const li = document.createElement('li');
  li.textContent = sectionId; // Đặt tiêu đề cho button
  li.id = `nav-button-${sectionId}`; // Tạo ID duy nhất cho button
  li.classList.add('menu__link'); // Thêm class CSS cho button

  // 5. Thêm sự kiện click cho button (tùy chọn)
  li.addEventListener('click', function() {
    // Di chuyển đến section tương ứng khi click
    window.scrollTo({
      top: document.getElementById(sectionId).offsetTop,
      behavior: 'smooth'
    });
  });

  // 6. Thêm button vào danh sách ul
  navbarList.appendChild(li);
});

// Theo dõi sự kiện scroll để cập nhật trạng thái active cho các nút điều hướng
window.addEventListener('scroll', function() {
  const navButtons = document.querySelectorAll('.menu__link');

  sections.forEach((section, index) => {
    const navButton = navButtons[index];
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const currentWindowPosition = window.scrollY;

    if (currentWindowPosition >= sectionTop && currentWindowPosition < sectionBottom) {
      navButton.classList.add('active');
    } else {
      navButton.classList.remove('active');
    }
  });
});

// Sử dụng IntersectionObserver để theo dõi các section
const options = {
  root: null, // Lấy element gốc để theo dõi (null là viewport)
  threshold: 0.5, // Tỷ lệ phần trăm element cần hiển thị để kích hoạt
  delay: 0 // Thời gian chờ trước khi kích hoạt
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Section này đang trong viewport
      entry.target.classList.add('active');
    } else {
      // Section này không còn trong viewport
      entry.target.classList.remove('active');
    }
  });
}, options);

// Theo dõi tất cả các section
sections.forEach(section => {
  observer.observe(section);
});
