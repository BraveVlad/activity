export function attachLoggerFormEvents() {
    const loggerDialog = document.querySelector(".log-activity-dialog");
    const openLoggerButton = document.querySelector(".floating-action__button");
    openLoggerButton.addEventListener("click", (e) => {
        loggerDialog.classList.remove("log-activity-dialog--hidden");
    });
    const form = document.forms.namedItem("log-activity-form");
    const cancelButton = form.querySelector(".log-activity-form__cancel");
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Canceled");
        loggerDialog.classList.add("log-activity-dialog--hidden");
    });
}
