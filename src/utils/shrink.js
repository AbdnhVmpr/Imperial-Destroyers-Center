export const shrinkHeader = (headerRef) => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    headerRef.current.classList.add("shrink");
  } else {
    headerRef.current.classList.remove("shrink");
  }
};
