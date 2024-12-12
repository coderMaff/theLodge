<?php

// Function to parse ICS file content and extract events
function parseICS($url) {
    $icsContent = file_get_contents($url);
    $lines = explode("\n", $icsContent);
    $events = [];
    $event = null;
    $now = time();

    foreach ($lines as $line) {
        $line = trim($line);
        if ($line === "BEGIN:VEVENT") {
            $event = [];
        } elseif ($line === "END:VEVENT") {
            if ($event && (strtotime($event['DTEND']) > $now || strtotime($event['DTEND;VALUE=DATE']) > $now)) {
                if (array_key_exists("DTEND;VALUE=DATE", $event)) { 
                    $event["DTEND"] = $event["DTEND;VALUE=DATE"]; 
                    unset($event["DTEND;VALUE=DATE"]);
                    $event["DTEND"] .= "T000000Z";
                }
                if (array_key_exists("DTSTART;VALUE=DATE", $event)) { 
                    $event["DTSTART"] = $event["DTSTART;VALUE=DATE"]; 
                    unset($event["DTSTART;VALUE=DATE"]);
                    $event["DTSTART"] .= "T000000Z"; 
                }  
                if (!array_key_exists("LOCATION", $event)) {               
                    $event["LOCATION"] = "Unknown";
                }
                $events[] = $event;
            }
            $event = null;
        } elseif ($event !== null) {
            list($key, $value) = explode(":", $line, 2);
            $event[$key] = $value;
        }
    }

    return $events;
}

function compareByDTSTART($a, $b) { return strtotime($a["DTSTART"]) - strtotime($b["DTSTART"]); }

// Check if 'url' parameter is set in the query string
if (isset($_GET['icsURL'])) {
    $icsUrl = $_GET['icsURL'];
    $events = parseICS($icsUrl);

    // Set content-type header to JSON
    header('Content-Type: application/json');
    usort($events, "compareByDTSTART");
    // Encode the events array as JSON and return it
    echo json_encode($events);
} else {
    // Return an error if the 'url' parameter is not provided
    echo json_encode(['error' => 'No URL parameter provided']);
}

?>
