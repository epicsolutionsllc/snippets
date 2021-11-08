const urlParams = new URLSearchParams(window.location.search);
const isMobile = urlParams.get('app');
if (isMobile == "true" || isMobile == "yes" || isMobile == "") {
  const header = document.querySelector('.elementor-location-header');
  const footer = document.querySelector('.elementor-location-footer');
  header.remove();
  footer.remove();
}
