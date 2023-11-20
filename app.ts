import { attachLoggerFormEvents } from "./activities.connector.js";
import { createActivity, generateActivityId, getActivities, getCurrentTime } from "./activities.model.js";


function main() {
    console.log("Welcome to Tracker. app!")

    attachLoggerFormEvents();

}

main();