// /assets/include.js
(async () => {
  const nodes = document.querySelectorAll("[data-include]");
  await Promise.all([...nodes].map(async el => {
    const res = await fetch(el.getAttribute("data-include"));
    el.innerHTML = await res.text();
  }));
})();
