window.addEventListener("load", () => {

	var houseName = localStorage.getItem("houseName");
	var appointmentICS = localStorage.getItem("appointmentICS");
	var tideJSON = localStorage.getItem("tideJSON");
	var weatherJSON = localStorage.getItem("weatherJSON");

	var hSetup = document.getElementById("setupWrap");

	var hTitle = document.getElementById("title");
	var hICS = document.getElementById("ics");
	var hTide = document.getElementById("tide");
	var hWeather = document.getElementById("weather");

	hTitle.value = houseName;
	hICS.value = appointmentICS;
	hTide.value = tideJSON;
	hWeather.value = weatherJSON;

	var hSave = document.getElementById("save");
	hSave.addEventListener("click", () => {

		if (hTitle.value == "") {
			alert("Please enter a title before saving");
			return;
		}

		localStorage.setItem("houseName", hTitle.value);
		localStorage.setItem("appointmentICS", hICS.value);
		localStorage.setItem("tideJSON", hTide.value);
		localStorage.setItem("weatherJSON", hWeather.value);

		alert("Saved... Redirecting");
		window.location.href = "index.php";
	});

	var hImport = document.getElementById("import");
	hImport.addEventListener("dragenter", (e) => {
		hImport.style.backgroundColor = "#f0f0f0";
		hImport.textContent = "Yup, now let go!";
	});

	hImport.addEventListener("dragover", (e) => {
		e.preventDefault();
	});

	hImport.addEventListener("dragleave", (e) => {
		hImport.style.backgroundColor = "";
		hImport.textContent = "Drop your JSON file here";
	});

	hImport.addEventListener("drop", (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		if (file.type === "application/json") {
			const reader = new FileReader();
			reader.onload = () => {
				const data = JSON.parse(reader.result);
				hTitle.value = data.houseName;
				hICS.value = data.appointmentICS;
				hTide.value = data.tideJSON;
				hWeather.value = data.weatherJSON;
			};
			reader.readAsText(file);
		}
		hImport.style.backgroundColor = "";
		hImport.textContent = "Complete, drop another file here to replace";
	});


	var hExport = document.getElementById("export");
	hExport.addEventListener("click", () => {
		const data = {
			houseName: hTitle.value,
			appointmentICS: hICS.value,
			tideJSON: hTide.value,
			weatherJSON: hWeather.value
		};

		const jsonData = JSON.stringify(data, null, 2);
		const blob = new Blob([jsonData], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'setup.json';
		a.click();
	});


});


