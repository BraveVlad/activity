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
        const activityName = activityData.get("logger-name");
        const activityComment = activityData.get("logger-comment");
        const startTime = convertStringToDate(activityData.get("logger-time-start"));
        const endTime = convertStringToDate(activityData.get("logger-time-end"));
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
