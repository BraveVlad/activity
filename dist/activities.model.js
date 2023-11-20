import { showList } from "./activities.view.js";
const activities = [];
export function createActivity(activity) {
    const newActivity = {
        ...activity,
        timeEnd: 0,
        duration: 0,
        status: "initial"
    };
    activities.push(newActivity);
    showList(getActivities());
}
export function removeActivity(activityId) {
    const activityIndex = getActivityIndexById(activityId);
    if (activityIndex === -1)
        throw Error("Activity to remove not found.");
    activities.splice(activityIndex, 1);
}
export function getActivities() {
    return activities.slice();
}
export function generateActivityId() {
    return performance.now().toString();
}
export function getCurrentTime() {
    return Date.now();
}
function getActivityIndexById(activityId) {
    return activities.findIndex((activity) => activity.id === activityId);
}
