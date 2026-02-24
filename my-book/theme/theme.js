/*
 * Catppuccin Theme Switcher for mdBook
 * Adds a pen icon to the top-right to switch between Mocha, Latte, Frappe, Macchiato
 */

const CATPPUCCIN_VARIANTS = [
  { name: "Mocha", css: "catppuccin-mocha.css" },
  { name: "Latte", css: "catppuccin-latte.css" },
  { name: "Frappe", css: "catppuccin-frappe.css" },
  { name: "Macchiato", css: "catppuccin-macchiato.css" }
];

function findOrAssignLinkId(variant) {
  // Find link by href ending
  const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  const match = links.find(link => link.href && link.href.includes(variant.css));
  if (match) {
    const id = `catppuccin-${variant.name.toLowerCase()}-css`;
    match.id = id;
    return match;
  }
  return null;
}
function getCurrentVariant() {
  return localStorage.getItem("catppuccin-variant") || "Mocha";
}

function setVariant(variant) {
  localStorage.setItem("catppuccin-variant", variant);
  CATPPUCCIN_VARIANTS.forEach(v => {
    const link = findOrAssignLinkId(v);
    if (link) link.disabled = (v.name !== variant);
  });
}

function createPenSwitcher() {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "12px";
  container.style.right = "16px";
  container.style.zIndex = 1000;
  container.style.cursor = "pointer";
  container.title = "Switch Catppuccin Theme";

  // Pen SVG
  container.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z" fill="#a6adc8"/>
      <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="#a6adc8"/>
    </svg>
  `;

  // Dropdown
  const dropdown = document.createElement("div");
  dropdown.style.display = "none";
  dropdown.style.position = "absolute";
  dropdown.style.top = "28px";
  dropdown.style.right = "0";
  dropdown.style.background = "#232634";
  dropdown.style.border = "1px solid #6c7086";
  dropdown.style.borderRadius = "6px";
  dropdown.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  dropdown.style.padding = "4px 0";
  dropdown.style.minWidth = "120px";

  CATPPUCCIN_VARIANTS.forEach(({ name }) => {
    const item = document.createElement("div");
    item.textContent = name;
    item.style.padding = "8px 16px";
    item.style.cursor = "pointer";
    item.style.color = "#cdd6f4";
    item.addEventListener("click", () => {
      setVariant(name);
      dropdown.style.display = "none";
    });
    dropdown.appendChild(item);
  });

  container.appendChild(dropdown);
  container.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  });

  document.body.appendChild(container);
}


window.addEventListener("DOMContentLoaded", function() {
  // Assign IDs to existing link elements for Catppuccin variants
  CATPPUCCIN_VARIANTS.forEach(v => {
    findOrAssignLinkId(v);
  });
  setVariant(getCurrentVariant());
  createPenSwitcher();
});
  createPenSwitcher();
});
