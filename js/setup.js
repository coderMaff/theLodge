window.addEventListener("load", () => {

	var houseName = localStorage.getItem("houseName");
	var appointmentICS = localStorage.getItem("appointmentICS");
	var tideJSON = localStorage.getItem("tideJSON");
	var weatherJSON = localStorage.getItem("weatherJSON");
	var sunJSON = localStorage.getItem("sunJSON");	
	var countdown1Name = localStorage.getItem("countdown1Name");
	var countdown1Date = localStorage.getItem("countdown1Date");
	var countdown2Name = localStorage.getItem("countdown2Name");
	var countdown2Date = localStorage.getItem("countdown2Date");
	var countdown3Name = localStorage.getItem("countdown3Name");
	var countdown3Date = localStorage.getItem("countdown3Date");
	var countdown4Name = localStorage.getItem("countdown4Name");
	var countdown4Date = localStorage.getItem("countdown4Date");		

	var houseNameEnabled = localStorage.getItem("houseNameEnabled") == "true";
	var appointmentICSEnabled = localStorage.getItem("appointmentICSEnabled") == "true";
	var tideJSONEnabled = localStorage.getItem("tideJSONEnabled") == "true";
	var weatherJSONEnabled = localStorage.getItem("weatherJSONEnabled") == "true";
	var sunJSONEnabled = localStorage.getItem("sunJSONEnabled") == "true";	
	var kardiakEnabled = localStorage.getItem("kardiakEnabled") == "true";	
	var auroraEnabled = localStorage.getItem("auroraEnabled") == "true";
	var countdown1Enabled = localStorage.getItem("countdown1Enabled") == "true";
	var	countdown2Enabled = localStorage.getItem("countdown2Enabled") == "true";
	var	countdown3Enabled = localStorage.getItem("countdown3Enabled") == "true";
	var	countdown4Enabled = localStorage.getItem("countdown4Enabled") == "true";

	var hSetup = document.getElementById("setupWrap");

	var hTitle = document.getElementById("title");
	var hICS = document.getElementById("ics");
	var hTide = document.getElementById("tide");
	var hWeather = document.getElementById("weather");
	var hSun = document.getElementById("sun");
	var hCountdown1Name = document.getElementById("countdown1Name");
	var hCountdown1Date = document.getElementById("countdown1Date");
	var hCountdown2Name = document.getElementById("countdown2Name");
	var hCountdown2Date = document.getElementById("countdown2Date");	
	var hCountdown3Name = document.getElementById("countdown3Name");	
	var hCountdown3Date = document.getElementById("countdown3Date");
	var hCountdown4Name = document.getElementById("countdown4Name");
	var hCountdown4Date = document.getElementById("countdown4Date");

	var hTitleE = document.getElementById("titleEnabled");
	var hICSE = document.getElementById("icsEnabled");
	var hTideE = document.getElementById("tideEnabled");
	var hWeatherE = document.getElementById("weatherEnabled");
	var hSunE = document.getElementById("sunEnabled");
	var hKardiakE = document.getElementById("kardiakEnabled");
	var hAuroraE = document.getElementById("auroraEnabled");
	var hCountdown1E = document.getElementById("countdown1Enabled");
	var hCountdown2E = document.getElementById("countdown2Enabled");
	var hCountdown3E = document.getElementById("countdown3Enabled");
	var hCountdown4E = document.getElementById("countdown4Enabled");

	hTitle.value = houseName;
	hICS.value = appointmentICS;
	hTide.value = tideJSON;
	hWeather.value = weatherJSON;
	hSun.value = sunJSON;
	hCountdown1Name.value = countdown1Name;
	hCountdown1Date.value = countdown1Date;
	hCountdown2Name.value = countdown2Name;
	hCountdown2Date.value = countdown2Date;
	hCountdown3Name.value = countdown3Name;
	hCountdown3Date.value = countdown3Date;
	hCountdown4Name.value = countdown4Name;
	hCountdown4Date.value = countdown4Date;
	
	hTitleE.checked = houseNameEnabled;
	hICSE.checked = appointmentICSEnabled;
	hTideE.checked = tideJSONEnabled;
	hWeatherE.checked = weatherJSONEnabled;
	hSunE.checked = sunJSONEnabled;
	hKardiakE.checked = kardiakEnabled;
	hAuroraE.checked = auroraEnabled;
	hCountdown1E.checked = countdown1Enabled;
	hCountdown2E.checked = countdown2Enabled;
	hCountdown3E.checked = countdown3Enabled;
	hCountdown4E.checked = countdown4Enabled;

	var hSave = document.getElementById("save");
	hSave.addEventListener("click", () => {		
		localStorage.setItem("houseName", hTitle.value);
		localStorage.setItem("appointmentICS", hICS.value);
		localStorage.setItem("tideJSON", hTide.value);
		localStorage.setItem("weatherJSON", hWeather.value);
		localStorage.setItem("sunJSON", hSun.value);
		localStorage.setItem("countdown1Name", hCountdown1Name.value);
		localStorage.setItem("countdown1Date", hCountdown1Date.value);
		localStorage.setItem("countdown2Name", hCountdown2Name.value);
		localStorage.setItem("countdown2Date", hCountdown2Date.value);
		localStorage.setItem("countdown3Name", hCountdown3Name.value);
		localStorage.setItem("countdown3Date", hCountdown3Date.value);
		localStorage.setItem("countdown4Name", hCountdown4Name.value);
		localStorage.setItem("countdown4Date", hCountdown4Date.value);

		localStorage.setItem("houseNameEnabled", hTitleE.checked);
		localStorage.setItem("appointmentICSEnabled", hICSE.checked);
		localStorage.setItem("tideJSONEnabled", hTideE.checked);
		localStorage.setItem("weatherJSONEnabled", hWeatherE.checked);
		localStorage.setItem("sunJSONEnabled", hSunE.checked);
		localStorage.setItem("kardiakEnabled", hKardiakE.checked);
		localStorage.setItem("auroraEnabled", hAuroraE.checked);
		localStorage.setItem("countdown1Enabled", hCountdown1E.checked);
		localStorage.setItem("countdown2Enabled", hCountdown2E.checked);
		localStorage.setItem("countdown3Enabled", hCountdown3E.checked);
		localStorage.setItem("countdown4Enabled", hCountdown4E.checked);

		alert("Saved... Redirecting");
		window.location.href = "index.php";
	});

	var useDefaults = document.getElementById("useDefaults");
	useDefaults.addEventListener("click", () => {
		localStorage.setItem("houseName",  document.getElementById("titleExample").value);
		localStorage.setItem("appointmentICS", "");
		localStorage.setItem("tideJSON", document.getElementById("tideExample").value);
		localStorage.setItem("weatherJSON", document.getElementById("weatherExample").value);
		localStorage.setItem("sunJSON", document.getElementById("sunExample").value);
		localStorage.setItem("countdown1Name", "Countdown 1");
		localStorage.setItem("countdown1Date", "2050-01-01T00:00:00Z");
		localStorage.setItem("countdown2Name", "Countdown 2");
		localStorage.setItem("countdown2Date", "2050-01-01T00:00:00Z");
		localStorage.setItem("countdown3Name", "Countdown 3");
		localStorage.setItem("countdown3Date", "2050-01-01T00:00:00Z");
		localStorage.setItem("countdown4Name", "Countdown 4");
		localStorage.setItem("countdown4Date", "2050-01-01T00:00:00Z");

		localStorage.setItem("houseNameEnabled", true);
		localStorage.setItem("appointmentICSEnabled", false);
		localStorage.setItem("tideJSONEnabled", true);
		localStorage.setItem("weatherJSONEnabled", true);
		localStorage.setItem("sunJSONEnabled", true);
		localStorage.setItem("kardiakEnabled", false);
		localStorage.setItem("auroraEnabled", true);		
		localStorage.setItem("countdown1Enabled", true);
		localStorage.setItem("countdown2Enabled", false);
		localStorage.setItem("countdown3Enabled", false);
		localStorage.setItem("countdown4Enabled", false);

		alert("Using defaults... Redirecting");
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
				hCountdown1Date.value = data.countdown1Date;
				hCountdown1Name.value = data.countdown1Name;
				hCountdown2Date.value = data.countdown2Date;
				hCountdown2Name.value = data.countdown2Name;
				hCountdown3Date.value = data.countdown3Date;
				hCountdown3Name.value = data.countdown3Name;
				hCountdown4Date.value = data.countdown4Date;
				hCountdown4Name.value = data.countdown4Name;

				hTitleE.value = data.houseNameEnabled;
				hICSE.value = data.appointmentICSEnabled;
				hTideE.value = data.tideJSONEnabled;
				hWeatherE.value = data.weatherJSONEnabled;
				hSunE.value = data.sunJSONEnabled;	
				hKardiakE.value = data.kardiakEnabled;			
				hAuroraE.value = data.auroraEnabled;
				hCountdown1E.value = data.countdown1Enabled;
				hCountdown2E.value = data.countdown2Enabled;
				hCountdown3E.value = data.countdown3Enabled;
				hCountdown4E.value = data.countdown4Enabled;				
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
			countdown1Name: hCountdown1Name.value,
			countdown1Date: hCountdown1Date.value,
			countdown2Name: hCountdown2Name.value,
			countdown2Date: hCountdown2Date.value,
			countdown3Name: hCountdown3Name.value,
			countdown3Date: hCountdown3Date.value,
			countdown4Name: hCountdown4Name.value,
			countdown4Date: hCountdown4Date.value,

			houseNameEnabled: hTitleE.value,
			appointmentICSEnabled: hICSE.value,
			tideJSONEnabled: hTideE.value,
			weatherJSONEnabled: hWeatherE.value,
			sunJSONEnabled: hSunE.value,
			auroraEnabled: hAuroraE.value,
			kardiakEnabled: hKardiakE.value,
			countdown1Enabled: hCountdown1E.value,
			countdown2Enabled: hCountdown2E.value,
			countdown3Enabled: hCountdown3E.value,
			countdown4Enabled: hCountdown4E.value
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


