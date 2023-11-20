import { convertStringToDate, createActivity, generateActivityId } from "./activities.model.js";
const loggerDialog = document.querySelector(".log-activity-dialog");
export function attachLoggerFormEvents() {
    const openLoggerButton = document.querySelector(".floating-action__button");
    openLoggerButton.addEventListener("click", (e) => {
        openLoggerForm();
    });
    const form = document.forms.namedItem("log-activity-form");
    const cancelButton = form.querySelector(".log-activity-form__cancel");
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeLoggerForm();
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const activityData = new FormData(form);
        console.log(activityData);
        const activityName = activityData.get("log-activity-name");
        console.log(activityName);
        const activityComment = activityData.get("log-activity-comment");
        console.log(activityComment);
        const startTime = convertStringToDate(activityData.get("log-activity-time-start"));
        console.log(startTime);
        const endTime = convertStringToDate(activityData.get("log-activity-time-end"));
        console.log(endTime);
        createActivity({
            id: generateActivityId(),
            name: activityName,
            timeStart: startTime,
            timeEnd: endTime,
            comment: activityComment ? activityComment : ""
        });
        closeLoggerForm();
        form.reset();
    });
}
export function closeLoggerForm() {
    loggerDialog.classList.add("log-activity-dialog--hidden");
}
export function openLoggerForm() {
    loggerDialog.classList.remove("log-activity-dialog--hidden");
}
