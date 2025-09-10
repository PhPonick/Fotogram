const images = [
"./assets/img/close-up-of-a-snowdrift-rockies-compressed.jpg",
"./assets/img/iceland-in-winter-3-compressed.jpg",
"./assets/img/more-snow-covered-trees-3-compressed.jpg",
"./assets/img/rural-seaside-road-in-winter-canada-compressed.jpg",
"./assets/img/snowy-scenes-5-compressed.jpg",
"./assets/img/winter-in-holland-compressed.jpg",
"./assets/img/winter-on-st-helene-s-island-in-montreal-quebec-canada-compressed.jpg",
"./assets/img/winter-stroll-compressed.jpg",
"./assets/img/winter-wonderland-1-compressed.jpg"
];
const imagesAltTags = [
"Close-up of a snowdrift in the Rocky Mountains",
"Iceland in winter",
"Snow-covered trees",
"Rural seaside road in winter, Canada",
"Snowy scenes",
"Winter in Holland",
"Winter on St. Helene's Island in Montreal, Quebec, Canada",
"Winter stroll",
"Winter wonderland"
];

let currentImageIndex = 0;

function init() {
    renderImages();
}

function renderImages() {
        let contentRef = document.getElementById("gallery");
        for (let index = 0; index < images.length; index++) {
            contentRef.innerHTML  += getImgTemplate(index);
        }
}

function getImgTemplate(i) {
    return `<div class="single_element">
                <img src="${images[i]}" alt="${imagesAltTags[i]}" class="image" onclick="openDialog(${i})">
            </div>
            <dialog id="imageDialog">
                <div>
                    <img src="${images[i]}" alt="${imagesAltTags[i]}" class="dialog-image">
                    <div class = "dialog-footer"
                        <button onclick="closeDialog()">×</button>
                        <button onclick="backImage()">back</button>
                        <button onclick="nextImage()">next</button>
                    </div>
                </div>
            </dialog>`;
}

function openDialog(imageIndex) {
    const dialog = document.getElementById("imageDialog");
    dialog.showModal();
    const dialogListener = document.querySelector("dialog");
    dialogListener.addEventListener("click", (event) => {
        if (event.target === dialogListener) {
            closeDialog();
        }
});
}

function closeDialog() {
    const dialog = document.getElementById("imageDialog");
    dialog.close();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateDialogImage(currentImageIndex);
}

function backImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateDialogImage(currentImageIndex);
}

function updateDialogImage(currentImageIndex) {
    const dialogImage = document.querySelector(".dialog-image");
    dialogImage.src = images[currentImageIndex];
    dialogImage.alt = imagesAltTags[currentImageIndex];
}

