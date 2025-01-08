        Household Web Feed
        =============================

        Designed to be used on a large touchscreen or smart mirror.

        On first usage you will be taken to the setup page.

        In the "Title" box enter the text that will appear next to your clock.

        In the "ICS Url" enter the ICS Url (For instance from your google calendar).

        Leaving a box blank will prevent the widget from appearing.

        In the "Tide URL" enter the URL from your nearest tidal monitoring station, this data is supplied DEFRA - See here for more information - https://environment.data.gov.uk/apiportal

        In the "Weather URL" enter the URL for open-meteo.com with your longitude and latitude embeded - See here for more information - https://open-meteo.com/

        In the "Sunrise Sunset URL" enter the URL for sunrisesunset.io with your longitude and latitude embeded - See here for more information - https://sunrisesunset.io/

        Use the save button to save your settings and return to the data screen, and the export button to export them to a json file. Once exported you can import them into another device or import them at a later point.

        Dates for the coundown are in the format YYYY-MM-DDTHH:MM:SSZ

        Use the Enable buttons to turn on and off the various widgets

        Use the Export button to back up your settings and drag a settings file back to the "Import - Drop file here" to import a previously backed up set of settings.

        Use "Use Defaults" for a quick start example to get you up and running.

        All URLs are stored localy in your browser in localStorage

        NB - The Lodge is designed to run localy on a local web server, if you run it on somone elses web sever then you may be sending your private ICS file to their server, which could be viewed and logged.


        To do:
        Add countdowns.
        Add caching for JSON files.
