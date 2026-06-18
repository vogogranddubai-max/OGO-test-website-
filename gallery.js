const galleryFiles = [
  ["83f667_b4f8f7759ead40909fe1462f9d617f2a~mv2.jpg", "OGO resort aerial view"],
  ["83f667_5646e1f2cb5243a6b047012ee1ca3595~mv2.jpg", "OGO hospitality experience"],
  ["61da23_669893df9efb49b2b5ffc1ba2be7572e~mv2.jpg", "OGO golf event"],
  ["61da23_4dd95b9967924c5aa23be07e0c335778~mv2.jpg", "OGO guest room"],
  ["61da23_2768663888d1465f938e283ea8d813cf~mv2.jpeg", "OGO dining experience"],
  ["83f667_fa022907b8864421bf02f029e0799759~mv2.jpg", "OGO suite interior"],
  ["83f667_daf6c1e335aa4fc68058fc918691ee5b~mv2.jpg", "OGO restaurant interior"],
  ["83f667_8a9e51accfd34609aa1c28908580f185~mv2.jpg", "OGO resort landscape"],
  ["61da23_a59c05a3d67c462184e2c1662fa4ac44~mv2.jpg", "OGO poolside experience"],
  ["83f667_c0e095b201d54060bc78665199a70940~mv2.jpg", "OGO hotel detail"],
  ["83f667_e3895ed8ee164f65a3dd15617c2b831e~mv2.jpg", "OGO culinary presentation"],
  ["83f667_fd49b0ca1ec542968169f839b944b267~mv2.jpg", "OGO event space"],
  ["83f667_8956a4ebdbe043398386b6e87698e771~mv2.jpg", "OGO resort facilities"],
  ["83f667_37639997ade44f589ff92e5287ba7801~mv2.jpg", "OGO guest experience"],
  ["83f667_d86f95b03c1f4d1f8df2f6f8f4027737~mv2.jpg", "OGO hotel interior"],
  ["83f667_e3837dac3f3a42b7bb8e264644996618~mv2.jpg", "OGO leisure experience"],
  ["83f667_3c6313bc280648eaad09e3dd9715f6ca~mv2.jpg", "OGO dining venue"],
  ["83f667_133fa435f4094fbe9ab69162fd2ca67c~mv2.jpg", "OGO hotel room"],
  ["83f667_8d8344d14195403d8908eaa16cb502a8~mv2.jpg", "OGO resort view"],
  ["83f667_da182aaed4cb49748a6226c0fc0d5f18~mv2.jpg", "OGO wellness experience"],
  ["83f667_bdf916e514ef4d99a33cb14167cafd58~mv2.jpg", "OGO hospitality detail"],
  ["83f667_a96cd819e9594cf491a4271aced79b92~mv2.jpg", "OGO event experience"],
  ["83f667_b0e561d7b8f54a7da7d11636cfcbd0ff~mv2.jpg", "OGO property exterior"],
  ["83f667_8c7d93de4fec4e8a8114684899452cb7~mv2.webp", "OGO lifestyle experience"],
  ["83f667_9ee6e204fe89441fbcdd919c64a87a2a~mv2.jpg", "OGO restaurant setting"],
  ["83f667_fc57923b0e914ac1ae3c01b2d3d55dff~mv2.jpg", "OGO suite detail"],
  ["83f667_99364bf7bed6474da15753d486864f2d~mv2.jpg", "OGO pool and leisure"],
  ["83f667_fb1f828ea84247c1a0b7ee242e26921b~mv2.jpg", "OGO golf destination"],
  ["83f667_594343a5954b49daaac5aaa08f18f7f7~mv2.jpg", "OGO dining moment"],
  ["61da23_b8e201fb9a594322acd8abedeb250cdb~mv2.jpg", "OGO guest facilities"],
  ["83f667_2e5f72c541ec4552801c4dba4c76b1f9~mv2.jpg", "OGO celebration"],
  ["83f667_a8a67d6e53e64729a548ba42b6184cc3~mv2.jpg", "OGO room interior"],
  ["83f667_26af2cbe4ac348c0a7c86973cf47a87b~mv2.jpg", "OGO culinary experience"],
  ["83f667_bf3e26ad72fb4a199ba21a3c2029e825~mv2.jpg", "OGO resort moment"],
  ["61da23_8d9c3e2d6ab8405aa07217cce8dfc4d3~mv2.jpg", "OGO hospitality experience"],
  ["83f667_4d52f515c8f24e62aef48f57ba16d070~mv2.jpg", "OGO destination detail"],
  ["61da23_fea117c1500f4383acc29870f4341b80~mv2.png", "OGO event and meetings"],
  ["61da23_346a8d5e987e4f5d8348855084a1e296~mv2.jpg", "OGO collection experience"]
];

const mediaBase = "https://static.wixstatic.com/media/";
const grid = document.querySelector("#complete-gallery-grid");
const dialog = document.querySelector(".gallery-dialog");
const dialogImage = dialog.querySelector("img");
const dialogCaption = dialog.querySelector("p");
let activeIndex = 0;

document.querySelector("#gallery-count").textContent = galleryFiles.length;

galleryFiles.forEach(([file, alt], index) => {
  const button = document.createElement("button");
  button.className = "complete-gallery-item";
  button.type = "button";
  button.setAttribute("aria-label", `Open photograph ${index + 1}: ${alt}`);

  const image = document.createElement("img");
  image.src = `${mediaBase}${file}`;
  image.alt = alt;
  image.loading = "lazy";
  image.decoding = "async";
  button.append(image);
  button.addEventListener("click", () => openImage(index));
  grid.append(button);
});

function openImage(index) {
  activeIndex = (index + galleryFiles.length) % galleryFiles.length;
  const [file, alt] = galleryFiles[activeIndex];
  dialogImage.src = `${mediaBase}${file}`;
  dialogImage.alt = alt;
  dialogCaption.textContent = `${activeIndex + 1} / ${galleryFiles.length} — ${alt}`;
  if (!dialog.open) dialog.showModal();
}

dialog.querySelector(".gallery-dialog-close").addEventListener("click", () => dialog.close());
dialog.querySelector(".gallery-prev").addEventListener("click", () => openImage(activeIndex - 1));
dialog.querySelector(".gallery-next").addEventListener("click", () => openImage(activeIndex + 1));
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});
document.addEventListener("keydown", event => {
  if (!dialog.open) return;
  if (event.key === "ArrowLeft") openImage(activeIndex - 1);
  if (event.key === "ArrowRight") openImage(activeIndex + 1);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
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
