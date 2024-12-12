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

		if(hTitle.value == "") {
			alert("Please enter a title before saving");
			return;
		}

		localStorage.setItem("houseName",hTitle.value);
		localStorage.setItem("appointmentICS",hICS.value);
		localStorage.setItem("tideJSON",hTide.value);
		localStorage.setItem("weatherJSON",hWeather.value);
		
		alert("Saved... Redirecting");
		window.location.href = "index.php";
	});

});


    