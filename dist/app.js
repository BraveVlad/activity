const activities = [];
function createActivity(activity) {
    const newActivity = {
        ...activity,
        timeEnd: "",
        status: "initial"
    };
    activities.push(newActivity);
}
function removeActivity(activityId) {
    const activityIndex = getActivityIndexById(activityId);
    if (activityIndex === -1)
        throw Error("Activity to remove not found.");
    activities.splice(activityIndex, 1);
}
function getActivityIndexById(activityId) {
    return activities.findIndex((activity) => activity.id === activityId);
}
function generateActivityId() {
    return performance.now().toString();
}
function getCurrentTime() {
    return Date.now().toString();
}
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
    console.log(activities);
    console.log(getActivityIndexById(activities[1].id));
    removeActivity(activities[1].id);
    console.log(activities);
}
main();
