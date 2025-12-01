document.getElementById("liveToastBtn").addEventListener("click", function () {
  const toastEl = document.querySelector(".toast");
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
});