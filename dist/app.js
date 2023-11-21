import { attachLoggerFormEvents } from "./activities.connector.js";
import { loadActivities } from "./activities.model.js";
function main() {
    console.log("Welcome to Tracker. app!");
    attachLoggerFormEvents();
    loadActivities();
}
main();
