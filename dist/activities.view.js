export function showList(activities) {
    const activitiesListView = document.querySelector(".activities");
    activitiesListView.replaceChildren();
    activities.forEach(activity => {
        activitiesListView.append(generateActivityView(activity));
    });
}
function generateActivityView(activity) {
    const activityItem = document.createElement("li");
    activityItem.classList.add("activities__item");
    const activityView = document.createElement("div");
    activityView.classList.add("activity");
    const activityName = document.createElement("h3");
    activityName.classList.add("activity__name");
    activityName.innerText = activity.name;
    const activityTimes = document.createElement("div");
    activityTimes.classList.add("activity__times");
    const activityTimeStart = document.createElement("p");
    activityTimeStart.classList.add("activity__time");
    activityTimeStart.classList.add("activity__time--start");
    const timeTitleStart = document.createElement("span");
    timeTitleStart.innerText = "Start: ";
    activityTimeStart.append(timeTitleStart);
    activityTimeStart.innerText += new Date(activity.timeStart).toLocaleString();
    const activityTimeEnd = document.createElement("p");
    activityTimeEnd.classList.add("activity__time");
    activityTimeEnd.classList.add("activity__time--end");
    const timeTitleEnd = document.createElement("span");
    timeTitleEnd.innerText = "End: ";
    activityTimeEnd.append(timeTitleEnd);
    activityTimeEnd.innerText += new Date(activity.timeEnd).toLocaleString();
    activityTimes.append(activityTimeStart);
    activityTimes.append(activityTimeEnd);
    activityView.append(activityName);
    activityView.append(activityTimes);
    activityItem.append(activityView);
    return activityItem;
}
