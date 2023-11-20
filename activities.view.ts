import { Activity } from "./activities.model.js";

export function showList(activities: Activity[]) {

    const activitiesListView = document.querySelector(".activities") as HTMLUListElement;

    activitiesListView.replaceChildren();

    activities.forEach(activity => {
        activitiesListView.append(generateActivityView(activity))
    });
}

function generateActivityView(activity: Activity): HTMLElement {

    const activityItem = document.createElement("li") as HTMLLIElement;
    activityItem.classList.add("activities__item");

    const activityView = document.createElement("div") as HTMLDivElement;
    activityView.classList.add("activity");

    const activityName = document.createElement("h3") as HTMLHeadingElement;
    activityName.classList.add("activity__name");
    activityName.innerText = activity.name;

    const activityTimes = document.createElement("div") as HTMLDivElement;
    activityTimes.classList.add("activity__times");

    const activityTimeStart = document.createElement("p") as HTMLParagraphElement;
    activityTimeStart.classList.add("activity__time");
    activityTimeStart.classList.add("activity__time--start");

    const timeTitleStart = document.createElement("span") as HTMLSpanElement;
    timeTitleStart.innerText = "Start: "
    activityTimeStart.append(timeTitleStart);
    activityTimeStart.innerText += new Date(activity.timeStart).toLocaleDateString();

    const activityTimeEnd = document.createElement("p") as HTMLParagraphElement;
    activityTimeEnd.classList.add("activity__time");
    activityTimeEnd.classList.add("activity__time--end");
    const timeTitleEnd = document.createElement("span") as HTMLSpanElement;
    timeTitleEnd.innerText = "End: "
    activityTimeEnd.append(timeTitleEnd);

    activityTimeEnd.innerText += activity.timeEnd ? activity.timeEnd.toLocaleString() : "N/A";

    activityTimes.append(activityTimeStart)
    activityTimes.append(activityTimeEnd)

    activityView.append(activityName)
    activityView.append(activityTimes)

    activityItem.append(activityView)

    return activityItem;
}