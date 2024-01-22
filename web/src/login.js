// matching user
function submitLog(e) {
    e.preventDefault();
    const emailUser = document.getElementById("email").value;
    const pwUser = document.getElementById("password").value;

const catchdb = {
    email: emailUser,
    password: pwUser,
};


fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(catchdb),
  redirect: "follow",
  mode: "cors", // Enable CORS
  credentials: "same-origin", // Optional: Include credentials (cookies) when making same-origin requests
})

.then((response) => response.json()) // Parse the response as JSON
.then((data) => {
  // Handle the response from the server if needed
  alert("Selamat Datang");
  window.location.href = "../index.html";
})
.catch((error) => {
  console.error("Terjadi kesalahan:", error);
  alert("Terjadi kesalahan saat mengirim data.");
});

return false; // Prevent the default behavior of the "Kirim Pertanyaan" button
}

const daftarButton = document.getElementById("button-login");
daftarButton.addEventListener("click", submitLog);