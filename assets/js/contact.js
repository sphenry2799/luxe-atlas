// Function to link Email JS to javascript
(function () {
  emailjs.init("M7YirBCJ61f49tPKe"); // replace with your EmailJS public key
})();

const btn = document.getElementById("button");

// Clicking the submit button to send email
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "contact_service";
  const templateID = "template_14n6mnn";

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
