import { createActivity, generateActivityId, getActivities, getCurrentTime } from "./activities.model.js";
function main() {
    console.log("Welcome to Tracker. app!");
    createActivity({
        id: generateActivityId(),
        name: "test",
        timeStart: getCurrentTime(),
        comment: "comment A"
    });
    createActivity({
        id: generateActivityId(),
        name: "test to delete",
        timeStart: getCurrentTime(),
        comment: "comment B"
    });
    console.log(getActivities());
}
main();
