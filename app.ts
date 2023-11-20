

type ActivityStatus = "initial" | "tracked" | "done";

type Activity = {
    id: string,
    name: string,
    timeStart: string,
    timeEnd: string,
    status: ActivityStatus,
    comment: string
}

const activities = [] as Activity[];


function createActivity(activity: Omit<Activity, "timeEnd" | "status">) {
    const newActivity: Activity = {
        ...activity,
        timeEnd: "",
        status: "initial"
    };

    activities.push(newActivity);
}

function removeActivity(activityId: string) {
    const activityIndex = getActivityIndexById(activityId);

    if (activityIndex === -1) throw Error("Activity to remove not found.");

    activities.splice(activityIndex, 1);
}

function getActivityIndexById(activityId: string): number {
    return activities.findIndex((activity) => activity.id === activityId);
}

function generateActivityId() {
    return performance.now().toString();
}

function getCurrentTime() {
    return Date.now().toString();
}
function main() {
    console.log("Welcome to Tracker. app!")

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

    console.log(activities);
    console.log(getActivityIndexById(activities[1].id));
    removeActivity(activities[1].id)
    console.log(activities);

}

main()