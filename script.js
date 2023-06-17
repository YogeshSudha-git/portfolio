// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  // body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "auto";
};
cancelBtn.onclick = function () {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

//Social Media
//Facebook
document.querySelector(".fa-facebook-f").addEventListener("click", function () {
  window.open("https://www.facebook.com/yokithecool", "_blank");
});
//Twitter
document.querySelector(".fa-twitter").addEventListener("click", function () {
  window.open("https://twitter.com/Yogesh_Sudha", "_blank");
});
//Instagram
document.querySelector(".fa-instagram").addEventListener("click", function () {
  window.open(
    "https://www.instagram.com/yogeshsudha_official/?next=%2F",
    "_blank"
  );
});

//Hire Me

document.getElementById("compose-btn").addEventListener("click", function () {
  var email = "yogeshking2000@gmail.com";
  var subject = "Regarding Job Application";
  var currentTime = new Date();
  var greeting =
    currentTime.getHours() < 12
      ? "Good Morning"
      : currentTime.getHours() < 17
      ? "Good Afternoon"
      : "Good Evening";
  var body = `Hi,${greeting} `;

  var composeUrl =
    "https://mail.google.com/mail/?view=cm&to=" +
    encodeURIComponent(email) +
    "&su=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  var mailtoUrl =
    "mailto:" +
    encodeURIComponent(email) +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  if (isMobileDevice()) {
    window.location.href = mailtoUrl;
  } else {
    // Open Gmail in a new tab or window
    window.open(composeUrl, "_blank");
  }
});
function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
//Hire me with media query
// document.getElementById("gmail-btn").addEventListener("click", function () {
//   var recipient = "yogeshking2000@gmail.com";
//   var subject = "Regarding Job Application";
//   var body = "";

//   var mailtoUrl =
//     "mailto:" +
//     recipient +
//     "?subject=" +
//     encodeURIComponent(subject) +
//     "&body=" +
//     encodeURIComponent(body);

//   window.location.href = mailtoUrl;
// });

//Download button

document.getElementById("download-btn").addEventListener("click", function () {
  window.open("docs/Yogeshwaran_Sudharsan _CV.pdf", "_blank");
});

//Lets chat

document.getElementById("whatsapp-btn").addEventListener("click", function () {
  var phoneNumber = "7092105601";
  var message = "Hello,";

  var whatsappUrl =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(whatsappUrl);
});
