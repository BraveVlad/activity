

export function attachLoggerFormEvents() {

    const loggerDialog = document.querySelector(".log-activity-dialog") as HTMLDivElement;

    const openLoggerButton = document.querySelector(".floating-action__button") as HTMLButtonElement;
    openLoggerButton.addEventListener("click", (e) => {
        loggerDialog.classList.remove("log-activity-dialog--hidden");
    });

    const form = document.forms.namedItem("log-activity-form") as HTMLFormElement;

    const cancelButton = form.querySelector(".log-activity-form__cancel") as HTMLButtonElement;

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("Canceled");
        loggerDialog.classList.add("log-activity-dialog--hidden");
    });



}