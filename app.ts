

type ActivityStatus = "initial" | "tracked" | "done";

type Activity = {
    id: string,
    name: string,
    timeStart: string,
    timeEnd: string,
    status: ActivityStatus
}

const activities = [] as Activity[];


function createActivity(activity: Omit<Activity, "timeEnd" | "status">) {
    const newActivity: Activity = {
        ...activity,
        timeEnd: "",
        status: "initial"
    }

    activities.push(newActivity);
}

function generateActivityId() {
    return getCurrentTime();
}

function getCurrentTime() {
    return Date.now().toString();
}
function main() {
    console.log("Welcome to Tracker. app!")

    createActivity({
        id: generateActivityId(),
        name: "test",
        timeStart: getCurrentTime()
    })

    console.log(activities)
}

main()