window.addEventListener("load", () => {

	var houseName = localStorage.getItem("houseName");
	var appointmentICS = localStorage.getItem("appointmentICS");
	var tideJSON = localStorage.getItem("tideJSON");
	var weatherJSON = localStorage.getItem("weatherJSON");
	var sunJSON = localStorage.getItem("sunJSON");	

	var houseNameEnabled = localStorage.getItem("houseNameEnabled") == "true";
	var appointmentICSEnabled = localStorage.getItem("appointmentICSEnabled") == "true";
	var tideJSONEnabled = localStorage.getItem("tideJSONEnabled") == "true";
	var weatherJSONEnabled = localStorage.getItem("weatherJSONEnabled") == "true";
	var sunJSONEnabled = localStorage.getItem("sunJSONEnabled") == "true";	
	var kardiakEnabled = localStorage.getItem("kardiakEnabled") == "true";	
	var auroraEnabled = localStorage.getItem("auroraEnabled") == "true";

	var hSetup = document.getElementById("setupWrap");

	var hTitle = document.getElementById("title");
	var hICS = document.getElementById("ics");
	var hTide = document.getElementById("tide");
	var hWeather = document.getElementById("weather");
	var hSun = document.getElementById("sun");

	var hTitleE = document.getElementById("titleEnabled");
	var hICSE = document.getElementById("icsEnabled");
	var hTideE = document.getElementById("tideEnabled");
	var hWeatherE = document.getElementById("weatherEnabled");
	var hSunE = document.getElementById("sunEnabled");
	var hKardiakE = document.getElementById("kardiakEnabled");
	var hAuroraE = document.getElementById("auroraEnabled");

	//debugger;

	hTitle.value = houseName;
	hICS.value = appointmentICS;
	hTide.value = tideJSON;
	hWeather.value = weatherJSON;
	hSun.value = sunJSON;
	
	hTitleE.checked = houseNameEnabled;
	hICSE.checked = appointmentICSEnabled;
	hTideE.checked = tideJSONEnabled;
	hWeatherE.checked = weatherJSONEnabled;
	hSunE.checked = sunJSONEnabled;
	hKardiakE.checked = kardiakEnabled;
	hAuroraE.checked = auroraEnabled;

	var hSave = document.getElementById("save");
	hSave.addEventListener("click", () => {

		localStorage.setItem("houseName", hTitle.value);
		localStorage.setItem("appointmentICS", hICS.value);
		localStorage.setItem("tideJSON", hTide.value);
		localStorage.setItem("weatherJSON", hWeather.value);
		localStorage.setItem("sunJSON", hSun.value);
		localStorage.setItem("houseNameEnabled", hTitleE.checked);
		localStorage.setItem("appointmentICSEnabled", hICSE.checked);
		localStorage.setItem("tideJSONEnabled", hTideE.checked);
		localStorage.setItem("weatherJSONEnabled", hWeatherE.checked);
		localStorage.setItem("sunJSONEnabled", hSunE.checked);
		localStorage.setItem("kardiakEnabled", hKardiakE.checked);
		localStorage.setItem("auroraEnabled", hAuroraE.checked);
		
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
				hSun.value = data.sunJSON;

				hTitleE.value = data.houseNameEnabled;
				hICSE.value = data.appointmentICSEnabled;
				hTideE.value = data.tideJSONEnabled;
				hWeatherE.value = data.weatherJSONEnabled;
				hSunE.value = data.sunJSONEnabled;	
				hKardiakE.value = data.kardiakEnabled;			
				hAuroraE.value = data.auroraEnabled;
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
			weatherJSON: hWeather.value,
			sunJSON: hSun.value,
			houseNameEnabled: hTitleE.value,
			appointmentICSEnabled: hICSE.value,
			tideJSONEnabled: hTideE.value,
			weatherJSONEnabled: hWeatherE.value,
			sunJSONEnabled: hSunE.value,
			auroraEnabled: hAuroraE.value
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


