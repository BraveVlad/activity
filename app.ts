import { attachLoggerFormEvents } from "./activities.connector.js";
import { createActivity, generateActivityId, getActivities, getCurrentTime } from "./activities.model.js";


function main() {
    console.log("Welcome to Tracker. app!")

    attachLoggerFormEvents();

    createActivity({
        id: generateActivityId(),
        name: "Practice Javascript",
        timeStart: getCurrentTime(),
        comment: "I should be focusing on time management"
    });
    createActivity({
        id: generateActivityId(),
        name: "Study Time Management\nTools",
        timeStart: getCurrentTime(),
        comment: "It could have been helpful for this project ♥"
    });
}

main();