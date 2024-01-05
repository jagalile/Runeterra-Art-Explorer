// Find all buttons with the `alert` class on the page.
const buttons = document.querySelectorAll("button.copy-img-url");

// Handle clicks on each button.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        navigator.clipboard.writeText(button.value);
    });
});
