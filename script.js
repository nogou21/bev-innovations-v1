document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
		
		const attr = item.getAttribute("href").split("/").pop();
		
        if (attr === currentPage) {
            item.classList.add("active");
        }

        item.addEventListener("mouseover", () => {
            item.classList.add("hover");
        });

        item.addEventListener("mouseout", () => {
            item.classList.remove("hover");
        });
    });
});
