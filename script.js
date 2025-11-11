document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Helper to detect non-empty stored credentials
  function hasSavedCredentials() {
    const su = localStorage.getItem("username");
    const sp = localStorage.getItem("password");
    return su !== null && sp !== null && su !== "" && sp !== "";
  }

  // Show/hide existing button based on stored credentials
  function updateExistingButtonVisibility() {
    if (hasSavedCredentials()) {
      existingBtn.style.display = "block";
    } else {
      existingBtn.style.display = "none";
    }
  }

  updateExistingButtonVisibility();

  // Form submit handling
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // If username or password are empty just show the alert as per spec?
    // The tests described expect alert on submit with entered username.
    // If fields are empty, we do nothing.
    if (!username || !password) {
      // No-op or you can alert a message; following test expectations we avoid alerting empty-login.
      return;
    }

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      // Remove any existing saved credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    updateExistingButtonVisibility();
  });

  // Existing user login
  existingBtn.addEventListener("click", function () {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      alert(`Logged in as ${savedUsername}`);
    } else {
      // If somehow clicked but no credentials exist, hide the button
      updateExistingButtonVisibility();
    }
  });
});
