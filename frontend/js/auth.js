const API_BASE = "http://127.0.0.1:8000";

/* ---------------- SIGNUP ---------------- */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      role: document.querySelector('input[name="role"]:checked').value
    };

    const res = await fetch(`${API_BASE}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.ok) {
      alert("Signup successful! Please login.");
      window.location.href = "login.html";
    } else {
      alert(result.detail || "Signup failed");
    }
  });
}

/* ---------------- LOGIN ---------------- */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (res.status === 404) {
      alert("User not found. Please sign up.");
      window.location.href = "signup.html";
      return;
    }

    const data = await res.json();

    if (!res.ok) {
      alert("Invalid credentials");
      return;
    }

    if (data.role === "admin") {
      window.location.href = "admin/admin-home.html";
    } else {
      window.location.href = "student/student-home.html";
    }
  });
}
function loginStudent() {
    // fake login success
    window.location.href = "../pages/student/student-dashboard.html";
}
