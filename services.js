document.querySelectorAll(".services-list li").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.getAttribute("data-key");

    // Hide all service sections
    document.querySelectorAll(".service-section").forEach(section => {
      section.classList.remove("active");
    });

    // Remove highlight from all items
    document.querySelectorAll(".services-list li").forEach(li => {
      li.classList.remove("selected");
    });

    // Show selected service section
    const section = document.getElementById(key);
    if (section) {
      section.classList.add("active");
    }

    // Highlight selected item
    item.classList.add("selected");
  });
});