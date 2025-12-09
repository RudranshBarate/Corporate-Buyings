
const readBtns = document.querySelectorAll(".read-more-btn");

readBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".blog-row");
        const fullText = card.querySelector(".blog-row-full");

        if (fullText.style.display === "block") {
            fullText.style.display = "none";
            btn.textContent = "Read More";
        } else {
            fullText.style.display = "block";
            btn.textContent = "Read Less";
        }
    });
});
