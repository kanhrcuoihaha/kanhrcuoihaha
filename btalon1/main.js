// validation form login
const inputUsername = document.querySelector(".username-login");
const inputPassword = document.querySelector(".password-login");
const btnLogin = document.querySelector(".send-login");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng Nhập Thành Công");
      window.location.href = "test2.html";
    } else {
      alert("Đăng Nhập Thất Bại");
    }
  }
});