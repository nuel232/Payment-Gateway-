document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const cardDetailsForm = document.getElementById("cardDetailsForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Hide login form and show card details form
    document.querySelector(".from-box.login").style.display = "none";
    document.querySelector(".from-box.card-details").style.display = "block";
  });

  cardDetailsForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const cardNumber = document.getElementById("card_number").value.trim();
    const expiryDate = document.getElementById("expiry_date").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    // Perform validation (you can add more validation as needed)
    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    // Redirect to congratulations page
    window.location.href = "congratulations.html";
  });
});
