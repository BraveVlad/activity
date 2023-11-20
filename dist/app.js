const activities = [];
function createActivity(activity) {
    const newActivity = {
        ...activity,
        timeEnd: "",
        status: "initial"
    };
    activities.push(newActivity);
}
function generateActivityId() {
    return getCurrentTime();
}
function getCurrentTime() {
    return Date.now().toString();
}
function main() {
    console.log("Welcome to Tracker. app!");
    createActivity({
        id: generateActivityId(),
        name: "test",
        timeStart: getCurrentTime()
    });
    console.log(activities);
}
main();
