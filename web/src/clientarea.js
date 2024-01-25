// tab feature

function feature(evt, featureName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
}

// info user
document.addEventListener("DOMContentLoaded", function() {
  // Ambil informasi pengguna dari localStorage
  var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  // Tampilkan informasi pengguna di halaman
  if (loggedInUser) {
    displayUserInfo(loggedInUser);
  } else {
    // Jika tidak ada informasi pengguna, redirect ke halaman login
    window.location.href = 'login.html';
  }
});

function displayUserInfo(catchdb) {
  // Tampilkan informasi pengguna di halaman
  var userInfoDiv = document.getElementById("username-display");
  userInfoDiv.innerHTML = `${catchdb.email}`;
}

