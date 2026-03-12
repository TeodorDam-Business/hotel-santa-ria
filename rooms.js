const isPhone = /Android|iPhone|iPod|Windows Phone|Mobile/i.test(navigator.userAgent);

if (isPhone) {
  document.querySelectorAll(".room-card a[data-phone-href]").forEach((link) => {
    link.href = link.dataset.phoneHref;
  });
}
