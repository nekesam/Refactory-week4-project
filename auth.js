const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showLoginBtn = document.getElementById("showLogin");
const showSignupBtn = document.getElementById("showSignup");
const authMessage = document.getElementById("authMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nameRegex = /^[A-Za-z\s]{2,30}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/; // min 6, letters + numbers

function getUsers() {
    const users = localStorage.getItem("todoUsers");
    return users ? JSON.parse(users) : [];
}

function setUsers(users) {
    localStorage.setItem("todoUsers", JSON.stringify(users));
}

function setMessage(msg) {
    authMessage.textContent = msg;
}

showLoginBtn.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    showLoginBtn.classList.add("active");
    showSignupBtn.classList.remove("active");
    setMessage("");
});

showSignupBtn.addEventListener("click", () => {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    showSignupBtn.classList.add("active");
    showLoginBtn.classList.remove("active");
    setMessage("");
});




signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        setMessage("All signup fields are required.");
        return;
    }

    if (!nameRegex.test(name)) {
        setMessage("Name must be 2-30 letters only.");
        return;
    }

    if (!emailRegex.test(email)) {
        setMessage("Invalid email format.");
        return;
    }

    if (!passwordRegex.test(password)) {
        setMessage("Password must be at least 6 chars and include letters and numbers.");
        return;
    }

    const users = getUsers();
    const existing = users.find((u) => u.email === email);

    if (existing) {
        setMessage("Account already exists. Please login.");
        return;
    }

    users.push({ name, email, password });
    setUsers(users);

    localStorage.setItem("todoCurrentUser", email);
    window.location.href = "index.html";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
        setMessage("Email and password are required.");
        return;
    }

    if (!emailRegex.test(email)) {
        setMessage("Invalid email format.");
        return;
    }

    const users = getUsers();
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        setMessage("Invalid login credentials.");
        return;
    }

    localStorage.setItem("todoCurrentUser", email);
    window.location.href = "index.html";
});