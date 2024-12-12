window.addEventListener("load", () => {
	var hElement = document.getElementById("tideWrap");

	var updateElement = () => {
		fetch(localStorage.getItem("tideJSON"))
			.then(response => response.json())
			.then(data => {
				// Process and display the data here

				let lv_height = data.items[0].value;

				hElement.innerHTML = '<h4 dataVal=' + lv_height + '>Tide '+ lv_height + 'm</h4>'; // Clear previous content							

				// Max on record = 3.76  - Min on record ( -2 guess!!!! )
				lv_height += 2; // So now its 0 to 5.76 call it 6
				lv_height *= 20; // So now its 0 to 60						

				let beachDiv = document.createElement('div');
				beachDiv.className = "beach";						
				beachDiv.style.height = (120 - lv_height).toString() + "px";
				hElement.appendChild(beachDiv);

				let waterDiv = document.createElement('div');
				waterDiv.className = "water";						
				waterDiv.style.height = (lv_height).toString() + "px";						
				hElement.appendChild(waterDiv);

				let arrowDiv = document.createElement('div');
				arrowDiv.className = "arrowDown";
				if (data.items[0].value > data.items[1].value)
					arrowDiv.className = "arrowUp";
				hElement.appendChild(arrowDiv);

			})
			.catch(error => console.error('Error fetching data:', error));
	};

	var timer = setInterval(updateElement, 120000);

	// Initial call to update appointments right away
	updateElement();
});
