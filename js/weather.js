window.addEventListener("load", () => {    

    var updateElement = () => {
        fetch(localStorage.getItem("weatherJSON"))
            .then(response => response.json())
            .then(data => {

                var hElement = document.getElementById("weatherWrap");
                if(localStorage.getItem("weatherJSONEnabled") == "false") {
                    hElement.className = "hidden";
                    hElement.inertHTML = null;

                    hElement = document.getElementById("weatherWrap_temp");
                    hElement.inertHTML = null;
                    hElement.className = "hidden";

                    hElement = document.getElementById("weatherWrap_wind");
                    hElement.inertHTML = null;
                    hElement.className = "hidden";

                    hElement = document.getElementById("weatherWrap_rain");
                    hElement.inertHTML = null;
                    hElement.className = "hidden";
                    return;
                }

                var tempNow = 0;
                var rainNow = 0;
                var windNow = 0;

                // Process and display the data here							
                hElement.innerHTML = '<h4>Weather</h4>'; // Clear previous content							
                //Time
                let container4 = document.createElement('div');
                container4.className = "weatherContainerTime";
                hElement.appendChild(container4);
                let now = new Date();
                for (let i = now.getHours() - 1; i < now.getHours() + 24; i++) {
                    let div4b = document.createElement('div');
                    div4b.innerText = (i % 24).toString();
                    div4b.className = "weatherTime";
                    if (now.getHours() == i) div4b.className += " weatherTimeNow";
                    container4.appendChild(div4b);
                }
                let div4 = document.createElement("div");
                div4.innerHTML = "<h5>Time</h5>";
                div4.style.width = "90px";
                container4.appendChild(div4);

                //Temp
                let container = document.createElement('div');
                let iCount = 0;
                container.className = "weatherContainerTemp";
                hElement.appendChild(container);
                data.hourly.temperature_2m.forEach(element => {
                    if(iCount < now.getHours() - 1 || iCount > now.getHours() + 23) {
                        iCount++;
                        return;
                    }
                    element = Math.round(element);
                    let div = document.createElement('div');
                    div.innerText = element.toString();
                    div.className = "weatherTemp";
                    if (element < 0) element = 0;
                    div.style.backgroundColor = "#" + (element * 8).toString(16).padStart(2, '0') + "00" + (255 - element * 8).toString(16).padStart(2, '0');
                    div.style.height = (10 + element * 3).toString() + "px";                            
                    container.appendChild(div);                            
                    if (now.getHours() == iCount) {
                        tempNow = element;
                        div.style.backgroundColor = "#FFFFFF";
                        div.style.color = "#000000";
                    }
                    iCount++;
                });
                let div = document.createElement("div");
                div.innerHTML = "<h5>Temp C</h5>";
                div.style.width = "90px";
                container.appendChild(div);

                //Rain   
                iCount = 0;                         
                let container2 = document.createElement('div');
                container2.className = "weatherContainerRain";
                hElement.appendChild(container2);
                data.hourly.precipitation_probability.forEach(element => {
                    if(iCount < now.getHours() - 1 || iCount > now.getHours() + 23) {
                        iCount++;
                        return;
                    }
                    let div2 = document.createElement('div');
                    div2.innerText = element.toString();
                    div2.className = "weatherPrecip";                                 
                    let col = Math.round(element * 2.55);
                    div2.style.backgroundColor = "#" + (255 - col).toString(16).padStart(2, '0') + (255 - col).toString(16).padStart(2, '0') + (col).toString(16).padStart(2, '0');
                    div2.style.color = "#" + (col).toString(16).padStart(2, '0') + (col).toString(16).padStart(2, '0') + (255 - col).toString(16).padStart(2, '0');
                    div2.style.height = (15 + element).toString() + "px";
                    container2.appendChild(div2);                            
                    if (now.getHours() == iCount) {
                        div2.style.backgroundColor = "#FFFFFF";
                        rainNow = element;
                    }
                    iCount++;
                });
                let div2 = document.createElement("div");
                div2.innerHTML = "<h5>Rain%</h5>";
                div2.style.width = "90px";
                container2.appendChild(div2);


                //Wind   
                iCount = 0;                         
                let container3 = document.createElement('div');
                container3.className = "weatherContainerWind";
                hElement.appendChild(container3);
                data.hourly.wind_speed_10m.forEach(element => {
                    if(iCount < now.getHours() - 1 || iCount > now.getHours() + 23) {
                        iCount++;
                        return;
                    }
                    element = Math.round(element);
                    let div3 = document.createElement('div');
                    div3.innerText = element.toString();
                    div3.className = "weatherWind";
                    div3.style.height = (15 + element).toString() + "px";
                    container3.appendChild(div3);
                    if (now.getHours() == iCount) {
                        div3.style.backgroundColor = "#FFFFFF";
                        windNow = element;
                    }
                    iCount++;
                });
                let div3 = document.createElement("div");
                div3.innerHTML = "<h5>Wind kph</h5>";
                div3.style.width = "90px";
                container3.appendChild(div3);

                //Temperature Now
                hElement = document.getElementById("weatherWrap_temp");
                let h4 = document.createElement("h4");
                hElement.innerHTML = "";
                h4.innerText = "Temperature";
                let h1 = document.createElement("h1");                        
                h1.innerText = tempNow;
                h1.style.backgroundColor = "#" + (tempNow * 8).toString(16).padStart(2, '0') + "00" + (255 - tempNow * 8).toString(16).padStart(2, '0');
                
                hElement.appendChild(h4);
                hElement.appendChild(h1);

                //Wind Now
                hElement = document.getElementById("weatherWrap_wind");
                h4 = document.createElement("h4");
                hElement.innerHTML = "";
                h4.innerText = "Wind";
                h1 = document.createElement("h1");                        
                h1.innerText = windNow;
                h1.style.backgroundColor = "lightSteelBlue";
                h1.style.color = "black";
                hElement.appendChild(h4);
                hElement.appendChild(h1);
                
                //Rain Now
                hElement = document.getElementById("weatherWrap_rain");
                h4 = document.createElement("h4");
                hElement.innerHTML = "";
                h4.innerText = "Rain %";
                h1 = document.createElement("h1");                        
                h1.innerText = rainNow;
                h1.style.backgroundColor = "#" + (255 - rainNow).toString(16).padStart(2, '0') + (255 - rainNow).toString(16).padStart(2, '0') + (rainNow).toString(16).padStart(2, '0');
                h1.style.color = "#" + (rainNow).toString(16).padStart(2, '0') + (rainNow).toString(16).padStart(2, '0') + (255 - rainNow).toString(16).padStart(2, '0');
                hElement.appendChild(h4);
                hElement.appendChild(h1);                        
            })
            .catch(error => console.error('Error fetching data:', error));            
    };

    var timer = setInterval(updateElement, 60000);

    // Initial call to update appointments right away
    updateElement();
});
