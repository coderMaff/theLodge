window.addEventListener("load", () => {
	var hAppointment = document.getElementById("appointmentWrap");
	if(localStorage.getItem("appointmentICSEnabled") == "false") {
		hAppointment.className = "hidden";
		hAppointment.inertHTML = null;
		return;
	}

	var updateAppointments = () => {
		fetch("php/ics.php?icsURL=" + localStorage.getItem("appointmentICS"))
			.then(response => response.json())
			.then(data => {

				hAppointment.innerHTML = '<h4>Appointments</h4>'; // Clear previous content
				
				data.forEach(datum => {
					let div = document.createElement('div');
					//console.log("Datum",datum);

					let dateStart = new Date(datum.DTSTART.slice(0, 4) + '-' + datum.DTSTART.slice(4, 6) + '-' + datum.DTSTART.slice(6, 8) + 'T' + datum.DTSTART.slice(9, 11) + ':' + datum.DTSTART.slice(11, 13) + ':' + datum.DTSTART.slice(13, 15));					
					let dateEnd = new Date(datum.DTEND.slice(0, 4) + '-' + datum.DTEND.slice(4, 6) + '-' + datum.DTEND.slice(6, 8) + 'T' + datum.DTEND.slice(9, 11) + ':' + datum.DTEND.slice(11, 13) + ':' + datum.DTEND.slice(13, 15));
					let formattedDate = dateStart.toLocaleString('en-GB', {
						day: '2-digit',
						month: '2-digit',
						year: 'numeric',
						hour: '2-digit',
						minute: '2-digit'
					});
					let location;
					try {
						location = datum.LOCATION.replace(/\\/g, '');
					}
					catch (e) {
						location = "None specified";
					}
					div.innerHTML = `${formattedDate} <strong>${datum.SUMMARY}</strong>	@ ${location}`;

					let now = new Date();
					now.setHours(0,0,0,0);
					dateStart.setHours(0,0,0,0);							
					dateEnd.setHours(23,59,59,999);					
					if(now >= dateStart && now <= dateEnd) {
						div.classList.add("today");
					}
					hAppointment.appendChild(div);
				});
			})
			.catch(error => console.error('Error fetching data:', error));
	}

	var timer = setInterval(updateAppointments, 60000);

	// Initial call to update appointments right away
	updateAppointments();
});
