// CivicLab - configuration
// Ganti tiga URL di bawah setelah Ibu memiliki link final.
const CIVICLAB_CONFIG = {
  bookingForm: "PASTE_LINK_GOOGLE_FORM_PENGAJUAN_DI_SINI",
  feedbackForm: "PASTE_LINK_GOOGLE_FORM_MASUKAN_SARAN_DI_SINI",
  teachingMaterial: "", // isi dengan link PDF/e-book ketika bahan ajar sudah final
  sopDocument: ""       // isi dengan link SOP ketika dokumen final tersedia
};

function setLink(id, url) {
  const el = document.getElementById(id);
  if (!el || !url || url.startsWith("PASTE_")) return;
  el.href = url;
  el.classList.remove("disabled");
  el.removeAttribute("aria-disabled");
}

setLink("bookingLink", CIVICLAB_CONFIG.bookingForm);
setLink("feedbackLink", CIVICLAB_CONFIG.feedbackForm);
setLink("bookLink", CIVICLAB_CONFIG.teachingMaterial);
setLink("sopLink", CIVICLAB_CONFIG.sopDocument);

document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});
