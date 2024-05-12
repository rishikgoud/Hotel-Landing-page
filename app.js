const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});



const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const scrollRevealOption1 = {
distance: "50px",
origin: "left",
duration: 1000,
}
const scrollRevealOption2 = {
distance: "50px",
origin: "right",
duration: 1000,
}



// header container
ScrollReveal().reveal(".header_para", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".head h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".head .header_btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// About section

ScrollReveal().reveal(".subsec", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".aboutsubsection  h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".abtdescrib", {
  ...scrollRevealOption,
  delay: 900,
});
ScrollReveal().reveal(".subsecbtn", {
  ...scrollRevealOption,
  delay: 1400,
});

// Room Section

ScrollReveal().reveal(".roomimg", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".roomimg2", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".roomimg3", {
  ...scrollRevealOption,
  delay: 900,
});

//features section

// ScrollReveal().reveal(".features1", {
//   ...scrollRevealOption,
//   delay: 200,
// });
// ScrollReveal().reveal(".features2", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".features3", {
//   ...scrollRevealOption,
//   delay: 800,
// });
// ScrollReveal().reveal(".features4", {
//   ...scrollRevealOption,
//   delay: 1100,
// });
// ScrollReveal().reveal(".features5", {
//   ...scrollRevealOption,
//   delay: 1400,
// });
// ScrollReveal().reveal(".features6", {
//   ...scrollRevealOption,
//   delay: 1700,
// });

ScrollReveal().reveal(".features", {
    ...scrollRevealOption,
    interval:300,
  });

// blog section

// ScrollReveal().reveal(".blogcard1", {
//   ...scrollRevealOption,
//   delay: 300,
// });
// ScrollReveal().reveal(".blogcard2", {
//   ...scrollRevealOption,
//   delay: 700,
// });
// ScrollReveal().reveal(".blogcard3", {
//   ...scrollRevealOption,
//   delay: 1100,
// });
ScrollReveal().reveal(".bloging", {
  ...scrollRevealOption,
  interval:300,
});