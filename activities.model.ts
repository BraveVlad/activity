
type ActivityStatus = "initial" | "tracked" | "done";

export type Activity = {
    id: string,
    name: string,
    timeStart: string,
    timeEnd: string,
    status: ActivityStatus,
    comment: string
}

const activities = [] as Activity[];


export function createActivity(activity: Omit<Activity, "timeEnd" | "status">) {
    const newActivity: Activity = {
        ...activity,
        timeEnd: "",
        status: "initial"
    };

    activities.push(newActivity);
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
    return Date.now().toString();
}

function getActivityIndexById(activityId: string): number {
    return activities.findIndex((activity) => activity.id === activityId);
}