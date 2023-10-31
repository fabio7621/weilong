const logopic = document.querySelector(".logopic");
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    // 如果没有滚动计时器，则设置一个
    isScrolling = true;

    requestAnimationFrame(() => {
      // 根据滚动位置设置宽度
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        logopic.style.width = "10vw";
      } else {
        logopic.style.width = "17.3056vw";
      }

      // 重置滚动计时器
      isScrolling = false;
    });
  }
});
