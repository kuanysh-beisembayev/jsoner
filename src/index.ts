import "./index.css";

window.addEventListener("load", () => {
  const buttonElement = document.getElementById("button") as HTMLButtonElement;
  const textareaElement = document.getElementById(
    "textarea"
  ) as HTMLTextAreaElement;

  textareaElement.focus();

  buttonElement.addEventListener("click", () => {
    try {
      const content = JSON.parse(textareaElement.value);
      textareaElement.value = JSON.stringify(content, null, 2);
    } catch {
      textareaElement.classList.add("textarea-error");
    }
  });

  textareaElement.addEventListener("input", () => {
    textareaElement.classList.remove("textarea-error");
  });
});
