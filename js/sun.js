window.addEventListener("load", () => {
	var hElement = document.getElementById("sunWrap");
	if(localStorage.getItem("sunJSONEnabled") == "false") {
		hElement.className = "hidden";
		hElement.inertHTML = null;
		return;
	}

	var updateElement = () => {
		fetch(localStorage.getItem("sunJSON"))
			.then(response => response.json())
			.then(data => {
				hElement.innerHTML = '<h4>Sun Rise/Set</h4>'; // Clear previous content							
				// Process and display the data here
				
				let sunRise = document.createElement('div');
				sunRise.className = "sunRise";
				let srSpan = document.createElement('span');
				srSpan.innerText = data.results.sunrise;
				hElement.appendChild(sunRise);
				sunRise.appendChild(srSpan);

				let dayLength = document.createElement('div');
				dayLength.className = "dayLength";
				dayLength.innerText = "Daylight Hours: " + data.results.day_length;
				hElement.appendChild(dayLength);
				
				let sunSet = document.createElement('div');
				sunSet.className = "sunSet";			
				let ssSpan = document.createElement('span');
				ssSpan.innerText = data.results.sunset;
				hElement.appendChild(sunSet);
				sunSet.appendChild(ssSpan);

				
			})
			.catch(error => console.error('Error fetching data:', error));
	};

	var timer = setInterval(updateElement, 120000);

	// Initial call to update appointments right away
	updateElement();
});
