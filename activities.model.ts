import { showList } from "./activities.view.js";

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

    showList(getActivities())
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

export function generateActivityId() {
    return performance.now().toString();
}

export function getCurrentTime() {
    return Date.now();
}

export function getActivityIndexById(activityId: string): number {
    return activities.findIndex((activity) => activity.id === activityId);
}

export function convertStringToDate(date: string): number {
    return new Date(date).getTime();
}