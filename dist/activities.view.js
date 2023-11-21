import { convertTimeToString } from "./activities.model.js";
export const loggerButton = document.querySelector(".floating-action__button");
export const loggerDialog = document.querySelector(".logger-dialog");
export const loggerForm = document.forms.namedItem("logger-form");
export const loggerStartDate = loggerForm.querySelector("#logger-time-start");
export const loggerEndDate = loggerForm.querySelector("#logger-time-end");
export const cancelButton = loggerForm.querySelector(".logger-form__cancel");
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
    activityItem.innerHTML = `
        <li class="activities__item">
            <div class="activity">
                <h3 class="activity__name">${activity.name}</h3>
                <div class="activity__times">
                    <p class="activity__time activity__time--start"><span>Start: </span>${convertTimeToString(activity.timeStart)}</p>
                    <p class="activity__time activity__time--end"><span>End: </span>${convertTimeToString(activity.timeEnd)}</p>
                </div>
            </div>
        </li>
    `;
    return activityItem;
}
export function resetLoggerForm() {
    closeLoggerForm();
    loggerForm.reset();
}
export function openLoggerForm() {
    loggerDialog.classList.remove("logger-dialog--hidden");
    resetLoggerDateInput(loggerStartDate);
    resetLoggerDateInput(loggerEndDate);
}
export function closeLoggerForm() {
    loggerDialog.classList.add("logger-dialog--hidden");
}
export function resetLoggerDateInput(dateInput) {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() - currentTime.getTimezoneOffset());
    dateInput.value = currentTime.toISOString().slice(0, 16);
}
