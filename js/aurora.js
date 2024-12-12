window.addEventListener("load", () => {
	var hElement = document.getElementById("auroraWrap");

	var updateElement = () => {
		fetch('https://aurorawatch.lancs.ac.uk/api/0.1/status.xml')
			.then(response => response.text())
			.then(str => {

				hElement.innerHTML = '<h4>Aurora</h4>';

				let parser = new DOMParser();
				let xmlDoc = parser.parseFromString(str, "application/xml");
				// Now you can work with xmlDoc, e.g.:			
				let previousData = xmlDoc.getElementsByTagName("state")[1];
				let currentData = xmlDoc.getElementsByTagName("state")[0];

				let prevDiv = document.createElement('div');
				prevDiv.style.backgroundColor = previousData.getAttribute("color");
				prevDiv.className = "aurora";
				prevDiv.innerText = "Previous";

				let currentDiv = document.createElement('div');
				currentDiv.style.backgroundColor = currentData.getAttribute("color");
				currentDiv.className = "aurora";
				currentDiv.innerText = "Current";

				hElement.appendChild(prevDiv);
				hElement.appendChild(currentDiv);

			})
			.catch(error => console.error('Error fetching or parsing data:', error));
	};

	var timer = setInterval(updateElement, 60000);

	// Initial call to update appointments right away
	updateElement();
});
