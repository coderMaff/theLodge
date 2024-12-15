window.addEventListener("load", () => {
	var hElement = document.getElementById("kardiakWrap");

	var updateElement = () => {
		fetch('https://kardiak.co.uk/api/download/count')
			.then(response => response.json())
			.then(data => {
				// Process and display the data here

				hElement.innerHTML = '<h4>Kardiak.co.uk Downloads</h4>'; // Clear previous content							
				let div = document.createElement('div');
				div.innerHTML = `Program Downloads:${data.sumDownloads}<br/> 3d Object Downloads:${data.sum3dObjects}`;
				hElement.appendChild(div);

			})
			.catch(error => console.error('Error fetching data:', error));
	};

	var timer = setInterval(updateElement, 60000);

	// Initial call to update appointments right away
	updateElement();
});
