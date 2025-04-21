// PHẦN ĐĂNG KÍ
// Ktra signup và lưu vào acc vào localStorage
const inputUsernameRegister = document.querySelector(".username-signup");
const inputPasswordRegister = document.querySelector(".password-signup");
const btnRegister = document.querySelector(".send-signup");

// Nếu các phần tử tồn tại thì mới thực hiện
if (btnRegister) {
  btnRegister.addEventListener("click", (e) => {   // Gắn click vào nút đki, khi bấm thì hàm bên trong chạy
    e.preventDefault();   // Ngăn trình duyệt reload khi  ấn gửi
    if (
      inputUsernameRegister.value === "" ||
      inputPasswordRegister.value === ""
    ) {
      alert("Vui lòng không để trống");
    } else {
      const user = {   // Tạo 1 obj user, lấy giá trị tên đki và mk ng dùng vừa nhập
        username: inputUsernameRegister.value, 
        password: inputPasswordRegister.value,
      };
      let json = JSON.stringify(user);   // Chuyển obj user -> string, vì localStorage chỉ lưu đc string
      localStorage.setItem(inputUsernameRegister.value, json);
      alert("Đăng Ký Thành Công");
      window.location.href = "login.html";   // Chuyển sang trang login
    }
  });
}

// PHẦN ĐĂNG NHẬP
// 
const inputUsername = document.querySelector(".username-login");
const inputPassword = document.querySelector(".password-login");
const btnLogin = document.querySelector(".send-login");

if (btnLogin) {
  btnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputUsername.value === "" || inputPassword.value === "") {
      alert("Vui lòng không để trống");
    } else {
      const user = JSON.parse(localStorage.getItem(inputUsername.value)); // Chuyển ngược lại với json.parse()
      if (
        user &&
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
}

// PHẦN GÓP Ý
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage = document.getElementById("message");
const btnSendFeedback = document.getElementById("send");

if (btnSendFeedback) {
  btnSendFeedback.addEventListener("click", function(e) {
    e.preventDefault();

    if (
      inputName.value === "" ||
      inputEmail.value === "" ||
      inputMessage.value === ""
    ) {
      alert("Vui lòng không để trống");
    } else {
      const feedback = {
        name: inputName.value,
        email: inputEmail.value,
        phone: inputPhone.value,
        message: inputMessage.value
      };

      let json = JSON.stringify(feedback);
      localStorage.setItem(inputName.value + "-" + new Date().getTime(), json);   // Tạo key ng dùng + time để duy nhất

      alert("Gửi góp ý thành công!");
      document.getElementById("contactForm").reset();   //reset(): xóa dữ liệu trang khi ng dùng nhập xog
    }
  });
}
