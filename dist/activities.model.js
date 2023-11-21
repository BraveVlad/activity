import { drawActivitiesList } from "./activities.view.js";
const ACTIVITIES_STORAGE_KEY = "activities-list";
const activities = [];
export function createActivity(activity) {
    const newActivity = {
        ...activity,
        duration: calculateDuration(activity.timeStart, activity.timeEnd),
        status: "done"
    };
    activities.push(newActivity);
    saveStoredActivities(getActivities());
    drawActivitiesList(getActivities());
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
function setActivities(newActivities) {
    emptyActivities();
    newActivities.forEach((activity) => activities.push(activity));
}
function emptyActivities() {
    activities.splice(0);
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
function saveStoredActivities(activities) {
    clearStoredActivities();
    const serializedActivities = JSON.stringify(activities);
    localStorage.setItem(ACTIVITIES_STORAGE_KEY, serializedActivities);
}
function clearStoredActivities() {
    localStorage.setItem(ACTIVITIES_STORAGE_KEY, "");
}
function getStoredActivities() {
    const rawActivities = localStorage.getItem(ACTIVITIES_STORAGE_KEY);
    if (!rawActivities)
        throw Error("No stored activities!");
    const deserializedActivities = JSON.parse(rawActivities);
    return deserializedActivities;
}
export function loadActivities() {
    try {
        setActivities(getStoredActivities());
        drawActivitiesList(getActivities());
    }
    catch {
        emptyActivities();
    }
}
