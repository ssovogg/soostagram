const loginForm = document.querySelector(".login_form");
const userName = document.querySelector(".user_name");
const userPw = document.querySelector(".user_pw");
const loginBtn = document.querySelector(".login_btn");
const errorMsg = document.querySelector(".error");
let loginSucces = false;

loginForm.addEventListener("submit", (event)=>{
  event.preventDefault();
  let id = userName.value;
  let pw = userPw.value;
  if(id == 'soo'){
    (pw == '0000') ? loginSucces = true : alert("비밀번호가 올바르지 않습니다.");
  } else if (pw != '0000'){
    alert("아이디가 올바르지 않습니다.")
  } else {
    alert("존재하지 않는 계정입니다.")
  }
})

userName.addEventListener("input", checkValid);
userPw.addEventListener("input", checkValid);

function checkValid(){
  let id = userName.value;
  let pw = userPw.value;
  if(id!=''&& pw.length > 3 && pw.length < 16){
    loginBtn.classList.add("login_btn_active");
    errorMsg.style.display = "none";
  } else if (id = ''){
    loginBtn.classList.remove("login_btn_active");
  } else {
    errorMsg.style.display = "block";
    loginBtn.classList.remove("login_btn_active");
  }
}