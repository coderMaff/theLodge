window.addEventListener("load", () => {

	var defaultText = localStorage.getItem("houseName");

	if (defaultText == null) {
		window.location.href = "setup.php";
		return;
	}
	
	var hClock = document.getElementById("clockWrap");
        
	var pzero = num => num < 10 ? "0" + num : num;
    
	var timer = setInterval(() => {
	    let now = new Date();
		if(localStorage.getItem("titleEnabled") == "false") {
			hClock.className = "hidden";
			hClock.inertHTML = null
			return;
		}		
	    hClock.innerHTML = `<ul><li>${defaultText}</li><li>${pzero(now.getDate())}/${pzero(now.getMonth() + 1)}/${pzero(now.getFullYear())} - ${pzero(now.getHours())}:${pzero(now.getMinutes())}:${pzero(now.getSeconds())}</li></ul>`;    
	}, 1000);
});
    