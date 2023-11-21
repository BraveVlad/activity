import { convertStringToDate, createActivity, generateActivityId } from "./activities.model.js";
import { cancelButton, closeLoggerForm, loggerForm, loggerButton, openLoggerForm, resetLoggerForm } from "./activities.view.js";
export function attachLoggerFormEvents() {
    loggerButton.addEventListener("click", (e) => {
        openLoggerForm();
    });
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeLoggerForm();
    });
    loggerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const activityData = new FormData(loggerForm);
        console.log(activityData);
        const activityName = activityData.get("logger-name");
        console.log(activityName);
        const activityComment = activityData.get("logger-comment");
        console.log(activityComment);
        const startTime = convertStringToDate(activityData.get("logger-time-start"));
        console.log(startTime);
        const endTime = convertStringToDate(activityData.get("logger-time-end"));
        console.log(endTime);
        createActivity({
            id: generateActivityId(),
            name: activityName,
            timeStart: startTime,
            timeEnd: endTime,
            comment: activityComment ? activityComment : ""
        });
        resetLoggerForm();
    });
}
