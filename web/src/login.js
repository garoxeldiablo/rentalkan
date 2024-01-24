// matching user
function submitLog(e) {
  e.preventDefault();
  const emailUser = document.getElementById('email').value;
  const pwUser = document.getElementById('password').value;

  const catchdb = {
    email: emailUser,
    password: pwUser,
  };

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(catchdb),
    redirect: 'follow',
    mode: 'cors',
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((user) => {
      if (user.success) {
        // Successful login
        alert('Selamat Datang');
        window.location.href = '../clientarea.html';
      } else {
        // Invalid login
        alert('Invalid credentials');
      }
    })
    .catch((error) => {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    });

  return false;
}

const loginButton = document.getElementById('button-login');
if (loginButton) {
  loginButton.addEventListener('click', submitLog);
}
