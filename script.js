//your JS code here. If required.
// Wait until DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");
  const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const form = document.getElementById("loginForm");

  // Check if credentials exist in localStorage
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block"; // show existing user button
  }

  // Handle form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) return;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      // Save credentials
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      existingBtn.style.display = "block";
    } else {
      // Remove any existing saved credentials
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      existingBtn.style.display = "none";
    }
  });

  // Handle "Login as existing user" button
  existingBtn.addEventListener("click", function () {
    const existingUsername = localStorage.getItem("username");
    if (existingUsername) {
      alert(`Logged in as ${existingUsername}`);
    }
  });
});
