import { drawActivitiesList } from "./activities.view.js";

const ACTIVITIES_STORAGE_KEY = "activities-list";

type ActivityStatus = "initial" | "tracked" | "done";

export type Activity = {
    id: string,
    name: string,
    timeStart: number,
    timeEnd: number,
    duration: number,
    status: ActivityStatus,
    comment: string
}

const activities = [] as Activity[];

export function createActivity(activity: Omit<Activity, "duration" | "status">) {
    const newActivity: Activity = {
        ...activity,
        duration: calculateDuration(activity.timeStart, activity.timeEnd),
        status: "done"
    };

    activities.push(newActivity);

    saveStoredActivities(getActivities());
    drawActivitiesList(getActivities());
}

function calculateDuration(timeStart: number, timeEnd: number) {
    return timeEnd - timeStart;
}

export function removeActivity(activityId: string) {
    const activityIndex = getActivityIndexById(activityId);

    if (activityIndex === -1) throw Error("Activity to remove not found.");

    activities.splice(activityIndex, 1);
}

export function getActivities() {
    return activities.slice();
}

function setActivities(newActivities: Activity[]) {
    emptyActivities();
    newActivities.forEach((activity) => activities.push(activity))
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

export function convertTimeToString(time: number) {
    return new Date(time).toLocaleString();
}
export function getActivityIndexById(activityId: string): number {
    return activities.findIndex((activity) => activity.id === activityId);
}

export function convertStringToDate(date: string): number {
    return new Date(date).getTime();
}

function saveStoredActivities(activities: Activity[]) {
    clearStoredActivities();
    const serializedActivities = JSON.stringify(activities);
    localStorage.setItem(ACTIVITIES_STORAGE_KEY, serializedActivities);
}

function clearStoredActivities() {
    localStorage.setItem(ACTIVITIES_STORAGE_KEY, "");
}

function getStoredActivities(): Activity[] {
    const rawActivities = localStorage.getItem(ACTIVITIES_STORAGE_KEY);

    if (!rawActivities) throw Error("No stored activities!");

    const deserializedActivities = JSON.parse(rawActivities);

    return deserializedActivities;
}

export function loadActivities() {
    try {
        setActivities(getStoredActivities());
        drawActivitiesList(getActivities());
    } catch {
        emptyActivities();
    }
}