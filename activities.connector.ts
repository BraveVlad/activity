import { convertStringToDate, createActivity, generateActivityId } from "./activities.model.js";

const loggerDialog = document.querySelector(".log-activity-dialog") as HTMLDivElement;


export function attachLoggerFormEvents() {

    const openLoggerButton = document.querySelector(".floating-action__button") as HTMLButtonElement;
    openLoggerButton.addEventListener("click", (e) => {
        openLoggerForm();
    });

    const form = document.forms.namedItem("log-activity-form") as HTMLFormElement;

    const cancelButton = form.querySelector(".log-activity-form__cancel") as HTMLButtonElement;

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        closeLoggerForm();
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const activityData = new FormData(form);
        console.log(activityData);

        const activityName: string = activityData.get("log-activity-name") as string;
        console.log(activityName);

        const activityComment: string = activityData.get("log-activity-comment") as string;
        console.log(activityComment);

        const startTime = convertStringToDate(activityData.get("log-activity-time-start") as string);
        console.log(startTime);

        const endTime = convertStringToDate(activityData.get("log-activity-time-end") as string);
        console.log(endTime)

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
