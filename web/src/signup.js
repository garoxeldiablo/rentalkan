// fetch - register

function submitReg(e) {
    e.preventDefault();
    const namaUser = document.getElementById("nama").value;
    const emailUser = document.getElementById("email").value;
    const pwUser = document.getElementById("password").value;
    const hpUser = document.getElementById("nohp").value;

const catchdb = {
    nama_user: namaUser,
    email: emailUser,
    password: pwUser,
    handphone: hpUser
};

fetch("http://localhost:3000/register", {
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
  alert("Daftar berhasil!");
  window.location.href = "../login.html";
})
.catch((error) => {
  console.error("Terjadi kesalahan:", error);
  alert("Terjadi kesalahan saat mengirim data.");
});

return false; // Prevent the default behavior of the "Kirim Pertanyaan" button
}

const daftarButton = document.getElementById("button-daftar");
daftarButton.addEventListener("click", submitReg);
