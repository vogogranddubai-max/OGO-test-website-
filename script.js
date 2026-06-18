const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const dialog = document.querySelector(".enquiry-dialog");
const closeDialog = document.querySelector(".dialog-close");
const form = dialog.querySelector("form");
const toast = document.querySelector(".toast");
const galleryDialog = document.querySelector(".gallery-dialog");
const galleryDialogImage = galleryDialog.querySelector("img");
const galleryDialogCaption = galleryDialog.querySelector("p");

menuButton.addEventListener("click", () => {
  const open = !navigation.classList.contains("open");
  navigation.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
});

navigation.addEventListener("click", event => {
  if (!event.target.matches("a")) return;
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
});

document.querySelectorAll(".open-enquiry").forEach(button => {
  button.addEventListener("click", () => dialog.showModal());
});

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  dialog.close();
  form.reset();
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 3200);
});

document.querySelectorAll(".gallery-open").forEach(button => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    galleryDialogImage.src = image.src;
    galleryDialogImage.alt = image.alt;
    galleryDialogCaption.textContent = image.alt;
    galleryDialog.showModal();
  });
});

galleryDialog.querySelector(".gallery-dialog-close").addEventListener("click", () => galleryDialog.close());
galleryDialog.addEventListener("click", event => {
  if (event.target === galleryDialog) galleryDialog.close();
});
