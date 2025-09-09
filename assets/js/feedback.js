(function () {
  emailjs.init("M7YirBCJ61f49tPKe"); // replace with your actual public key
})();

const btn = document.getElementById("button");
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "contact_service"; // replace with your actual service ID
  const templateID = "template_3eqgm7w"; // replace with your template ID

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
