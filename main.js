let logos = document.querySelectorAll(".footer__logos svg");

logos.forEach((logo) => {
  logo.addEventListener("mouseover", () => {
    logo.firstElementChild.setAttribute("fill", "hsl(171, 66%, 44%)");
  });
  logo.addEventListener("mouseout", () => {
    logo.firstElementChild.setAttribute("fill", "#4C545C");
  });
});
