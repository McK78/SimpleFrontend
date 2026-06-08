document.addEventListener("DOMContentLoaded", () => {

  const forms = document.querySelectorAll("form");

  forms.forEach(form => {

    form.addEventListener("submit", () => {

      const button = form.querySelector("button");

      button.innerText = "Submitting...";
      button.disabled = true;

      setTimeout(() => {
        button.innerText = "Submitted";
      }, 1000);

    });

  });

});