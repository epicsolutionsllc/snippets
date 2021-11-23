const previous = document.referrer;
if (previous.includes("?app")) {
  if (window.location.href.includes("?")) {
    history.pushState({}, "Sureway", window.location.href + "&app=true")
  } else {
    history.pushState({}, "Sureway", window.location.href + "?app=true")
  }
}
const urlParams = new URLSearchParams(window.location.search);
const isMobile = urlParams.get('app');
if (isMobile == "true" || isMobile == "yes" || isMobile == "") {
  const header = document.querySelector('.elementor-location-header');
  const footer = document.querySelector('.elementor-location-footer');
  header.remove();
  footer.remove();
}
