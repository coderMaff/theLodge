window.addEventListener("load", () => {
	for (let i = 1; i <= 4; i++) {
		let hElement = document.getElementById(`countdown${i}Wrap`);
		if (localStorage.getItem(`countdown${i}Enabled`) == "false") {
			hElement.className = "hidden";
			hElement.innerHTML = null;
			continue;
		}
		let updateElement = () => {
			hElement.innerHTML = '<h4>' + localStorage.getItem(`countdown${i}Name`) + '</h4>'; // Clear previous content
			let div = document.createElement('div');
			let now = new Date();
			let target = new Date(localStorage.getItem(`countdown${i}Date`));
			
			let diff = target - now;
			let days = Math.floor(diff / (1000 * 60 * 60 * 24));
			let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((diff % (1000 * 60)) / 1000);
			div.innerHTML = `<h1>${days}d<br/>${hours}h<br/>${minutes}m<br/>${seconds}s</h1>`;
			hElement.appendChild(div);
		}

		setInterval(updateElement, 1000);
		updateElement();
	}
});
