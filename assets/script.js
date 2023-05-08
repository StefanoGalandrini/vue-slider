// declare initial array with objects containing images, title and description

const images = [
	{
		image: "img/01.webp",
		title: "Marvel's Spiderman Miles Morale",
		text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
	},
	{
		image: "img/02.webp",
		title: "Ratchet & Clank: Rift Apart",
		text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
	},
	{
		image: "img/03.webp",
		title: "Fortnite",
		text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
	},
	{
		image: "img/04.webp",
		title: "Stray",
		text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
	},
	{
		image: "img/05.webp",
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
];

// declare global DOM variables
const bigImgContainer = document.querySelector(".img-big");
const thumbnails = document.querySelectorAll(".thumb-img");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");

let currentImgIndex = 0;
updateBigImg();
updateActiveThumbnail();

function updateBigImg() {
	const img = document.createElement("img");
	img.src = "../" + images[currentImgIndex].image;
	img.classList.add("big");

	const title = document.createElement("h1");
	title.textContent = images[currentImgIndex].title;

	const text = document.createElement("p");
	text.textContent = images[currentImgIndex].text;

	const titleDiv = document.createElement("div");
	titleDiv.classList.add("title");
	titleDiv.appendChild(title);
	titleDiv.appendChild(text);

	bigImgContainer.innerHTML = "";
	bigImgContainer.appendChild(img);
	bigImgContainer.appendChild(titleDiv);
}

function updateActiveThumbnail() {
	for (i = 0; i < images.length; i++) {
		thumbnails[i].className = "inactive";
	}
	thumbnails[currentImgIndex].classList.toggle("active");
	thumbnails[currentImgIndex].classList.remove("inactive");
}

function nextImg() {
	currentImgIndex++;
	if (currentImgIndex >= thumbnails.length) {
		currentImgIndex = 0;
	}
	updateBigImg();
	updateActiveThumbnail();
}

function prevImg() {
	currentImgIndex--;
	if (currentImgIndex < 0) {
		currentImgIndex = thumbnails.length - 1;
	}
	updateBigImg();
	updateActiveThumbnail();
}

leftBtn.addEventListener("click", prevImg);
rightBtn.addEventListener("click", nextImg);

thumbnails.forEach((thumb, index) => {
	thumb.addEventListener("click", () => {
		currentImgIndex = index;
		updateBigImg();
		updateActiveThumbnail();
	});
});
