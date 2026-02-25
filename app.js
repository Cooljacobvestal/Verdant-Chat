const body = document.body;
const themeToggle = document.querySelector("#themeToggle");
const composer = document.querySelector("#composer");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messages");

const storedTheme = localStorage.getItem("verdant-theme");
if (storedTheme === "dark") {
  body.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("verdant-theme", body.classList.contains("dark") ? "dark" : "light");
});

const formatTime = () =>
  new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

composer?.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  const bubble = document.createElement("article");
  bubble.className = "bubble outgoing";
  bubble.innerHTML = `<p>${value.replace(/</g, "&lt;")}</p><time>${formatTime()}</time>`;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
  input.value = "";

  setTimeout(() => {
    const reply = document.createElement("article");
    reply.className = "bubble incoming";
    reply.innerHTML = `<p>Love this direction. Let's keep the velocity 🚀</p><time>${formatTime()}</time>`;
    messages.appendChild(reply);
    messages.scrollTop = messages.scrollHeight;
  }, 700);
});
