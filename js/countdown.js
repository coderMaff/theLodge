window.addEventListener("load", () => {
	var hElement = document.getElementById("countdownWrap");
	var updateElement = () => {
		hElement.innerHTML = '<h4>Countdown to F1 Testing</h4>'; // Clear previous content							
		let div = document.createElement('div');
		let now = new Date();
		let target = new Date("2025-02-26T08:00:00Z");
		
		let diff = target - now;
		let days = Math.floor(diff / (1000 * 60 * 60 * 24));
		let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((diff % (1000 * 60)) / 1000);
		div.innerHTML = `<h1>${days}d<br/>${hours}h<br/>${minutes}m<br/>${seconds}s</h1>`;
		hElement.appendChild(div);
	}	

	var timer = setInterval(updateElement, 1000);
	
	updateElement();
});
