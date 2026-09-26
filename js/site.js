const backButton = document.querySelector("[data-history-back]");

backButton?.addEventListener("click", () => {
  window.history.back();
});

const updatePasswordButton = document.querySelector("[data-update-password]");

updatePasswordButton?.addEventListener("click", () => {
  window.location.href = "./pwdupdated.html";
});
