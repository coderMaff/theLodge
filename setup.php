<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>    
    <link rel="stylesheet" href="css/theLodge.css"/>
    <script src="js/setup.js"></script>
  </head>  
  <body>     
    <div class="main">
      <div id="setupWrap">
        <label for="title">Title</label><input id="title"></input><br/>
        <label for="titleExample">Example:</label><input class="example" id="titleExample" value="The Lodge"></input><br/>
        <br/>

        <label for="ics">ICS URL</label><input id="ics"></input><br/>
        <label for="icsExample">Example:</label><input class="example" id="icsExample" value="https://calendar.google.com/calendar/ical/YOUR_EMAIL%40gmail.com/private-GOOGLE_SUPPLIES_THIS/basic.ics"></input><br/>
        <br/>

        <label for="tide">Tide URL</label><input id="tide"></input><br/>
        <label for="tideExample">Example:</label><input class="example" id="tideExample" value="https://environment.data.gov.uk/flood-monitoring/id/measures/E71239-level-tidal_level-Mean-15_min-mAOD/readings?_sorted&_limit=2"></input><br/>
        <br/>

        <label for="weather">WeatherUrl</label><input id="weather"></input><br/>
        <label for="weatherExample">Example:</label><input class="example" id="weatherExample" value="https://api.open-meteo.com/v1/forecast?latitude=52.9316783&longitude=1.2749668&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,weather_code,wind_speed_10m&timezone=Europe%2FLondon&forecast_days=1"></input><br/>
        <br/>

        <div id="save" class="save">Save</div>
        <div id="export" class="export">Export</div>
        <div id="import" class="import">Import - Drop file here</div>
      </div>
    </div>
  </body>
</html>