const logopic = document.querySelector(".logopic");
const drop1 = document.getElementById("dr-1");
const drop2 = document.getElementById("dr-2");
const drop3 = document.getElementById("dr-3");
const drop4 = document.getElementById("dr-4");
const mainHead = document.getElementById("mainHeader");

let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;

    requestAnimationFrame(() => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        logopic.style.width = "10vw";
        drop1.style.top = "44px";
        drop2.style.top = "44px";
        drop3.style.top = "44px";
        drop4.style.top = "44px";
        mainHead.style.opacity = "0.9";
      } else {
        logopic.style.width = "17.3056vw";
        drop1.style.top = "3vw";
        drop2.style.top = "3vw";
        drop3.style.top = "3vw";
        drop4.style.top = "3vw";
        mainHead.style.opacity = "1";
      }

      isScrolling = false;
    });
  }
});
