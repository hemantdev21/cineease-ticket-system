// Redirect if not logged in
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("cineease_user");
  const currentPage = location.href;

  // Redirect if user not logged in and not on index or signup page
  if (!user && !currentPage.includes("index") && !currentPage.includes("signup")) {
    location.href = "index.html";
  }

  // If on a page with a profile name element, update it
  const usernameElement = document.getElementById("username");
  if (usernameElement && user) {
    usernameElement.textContent = `Hi, ${user}!`;
  }
});

// Logout logic
function logout() {
  localStorage.removeItem("cineease_user");
  location.href = "index.html";
}
