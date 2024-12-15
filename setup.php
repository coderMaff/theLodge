<!doctype html>
<html lang="en" data-bs-theme="dark">
  <head>    
    <link rel="stylesheet" href="css/theLodge.css"/>
    <script src="js/setup.js"></script>
  </head>  
  <body>     
    <div class="main">
      <div id="doc">
        <h1># theLodge</h1>
        <p>Household Web Feed</p>

        <p>Designed to be used on a large touchscreen or smart mirror.</p>

        <p>On first usage you will be taken to the setup page.</p>

        <p>In the "Title" box enter the text that will appear next to your clock.</p>

        <p>In the "ICS Url" enter the ICS Url (For instance from your google calendar).</p>

        <p>Leaving a box blank will prevent the widget from appearing.</p>

        <p>In the "Tide URL" enter the URL from your nearest tidal monitoring station, this data is supplied DEFRA - See here for more information - <a href="https://environment.data.gov.uk/apiportal">https://environment.data.gov.uk/apiportal</a></p>

        <p>In the "Weather URL" enter the URL for open-meteo.com with your longitude and latitude embeded - See here for more information - <a href="https://open-meteo.com/">https://open-meteo.com/</a></p>

        <p>In the "Sunrise Sunset URL" enter the URL for sunrisesunset.io with your longitude and latitude embeded - See here for more information - <a href="https://sunrisesunset.io/">https://sunrisesunset.io/</a></p>

        <p>Use the save button to save your settings and return to the data screen, and the export button to export them to a json file. Once exported you can import them into another device or import them at a later point.</p>

        <p>All URLs are stored localy in your browser in localStorage</p>

        <p>NB - The Lodget is designed to run localy on a local web server, if you run it on somone elses web sever then you may be sending your private ICS file to their server, which could be viewed and logged</p>

      </div>
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

        <label for="weather">Weather Url</label><input id="weather"></input><br/>
        <label for="weatherExample">Example:</label><input class="example" id="weatherExample" value="https://api.open-meteo.com/v1/forecast?latitude=52.9316783&longitude=1.2749668&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,weather_code,wind_speed_10m&timezone=Europe%2FLondon&forecast_days=1"></input><br/>
        <br/>

        <label for="sun">Sunrise Sunset URL</label><input id="sun"></input><br/>
        <label for="sunExample">Example:</label><input class="example" id="sunExample" value="https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873"></input><br/>
        <br/>
      
        <div id="save" class="save">Save</div>
        <div id="export" class="export">Export</div>
        <div id="import" class="import">Import - Drop file here</div>
      </div>
    </div>
  </body>
</html>