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

export function createActivity(activity: Omit<Activity, "timeEnd" | "duration" | "status">) {
    const newActivity: Activity = {
        ...activity,
        timeEnd: 0,
        duration: 0,
        status: "initial"
    };

    activities.push(newActivity);

    showList(getActivities())
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

function getActivityIndexById(activityId: string): number {
    return activities.findIndex((activity) => activity.id === activityId);
}