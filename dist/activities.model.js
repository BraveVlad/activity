import { showList } from "./activities.view.js";
const activities = [];
export function createActivity(activity) {
    const newActivity = {
        ...activity,
        duration: calculateDuration(activity.timeStart, activity.timeEnd),
        status: "done"
    };
    activities.push(newActivity);
    showList(getActivities());
}
function calculateDuration(timeStart, timeEnd) {
    return timeEnd - timeStart;
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
export function convertTimeToString(time) {
    return new Date(time).toLocaleString();
}
export function getActivityIndexById(activityId) {
    return activities.findIndex((activity) => activity.id === activityId);
}
export function convertStringToDate(date) {
    return new Date(date).getTime();
}
