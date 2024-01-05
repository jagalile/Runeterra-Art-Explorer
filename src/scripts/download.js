// Find all buttons with the `alert` class on the page.
const buttons = document.querySelectorAll("button.download-img");

// Handle clicks on each button.
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        url = "http://dd.b.pvp.net/5_0_0/set1/en_us/img/cards/01IO015T1-full.png";
        fileName = "image.png";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "blob";
        xhr.onload = function () {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            var tag = document.createElement('a');
            tag.href = imageUrl;
            tag.download = fileName;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
        }
        xhr.send();
    });
});
