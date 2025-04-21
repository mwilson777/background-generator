const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomBtn = document.getElementById("randomBtn");
const copyBtn = document.getElementById("copyBtn");

const setGradient = () => {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();

const getRandomColor = () => {
	const letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

randomBtn.addEventListener("click", () => {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

copyBtn.addEventListener("click", () => {
	const cssText = css.textContent;
	navigator.clipboard.writeText(cssText)
		.then(() => alert("CSS copied to clipboard!"))
		.catch(err => alert("Failed to copy CSS: " + err));
});