const galleryTrack = document.querySelector("[data-gallery-track]");

if (galleryTrack) {
  const previousButton = document.querySelector("[data-gallery-prev]");
  const nextButton = document.querySelector("[data-gallery-next]");
  const slides = galleryTrack.querySelectorAll(".gallery-slide");

  const updateControls = () => {
    previousButton.disabled = galleryTrack.scrollLeft <= 1;
    nextButton.disabled =
      galleryTrack.scrollLeft + galleryTrack.clientWidth >= galleryTrack.scrollWidth - 1;
  };

  const moveGallery = (direction) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(galleryTrack).gap) || 0;
    galleryTrack.scrollBy({
      left: direction * (slideWidth + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  previousButton.addEventListener("click", () => moveGallery(-1));
  nextButton.addEventListener("click", () => moveGallery(1));
  galleryTrack.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();
}
