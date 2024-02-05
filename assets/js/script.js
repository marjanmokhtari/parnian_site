let firstsec = document.getElementById("firstsec");

window.addEventListener("scroll", () => {
  let x = window.scrollY;

  if (x > firstsec.offsetTop - 400) {
    firstsec.classList.remove("opacity-0");
  } else {
    firstsec.classList.add("opacity-0");
  }
});

let _slider = document.querySelectorAll("#slider>div");
let btn = document.querySelectorAll("#slider>button");
let flag = 0;

btn.forEach((val, index) => {
  val.addEventListener("click", () => {
    flag++;
    for (let i = 0; i < _slider.length; i++) {
      if (val != i) {
        _slider[i].classList.add("opacity-0");
        btn[i].classList.add("bg-[#2d2f41]");
        btn[i].classList.remove("bg-[#565a78]");
      }
    }
    _slider[index].classList.remove("opacity-0");
    btn[index].classList.add("bg-[#565a78]");
    btn[index].classList.remove("bg-[#2d2f41]");
  });
});

setInterval(() => {
  if (flag > 2) {
    flag = 0;
  }
  btn[flag].click();
}, 5000);


const send_email = document.getElementById('send_email')
const inp_email = document.getElementById('inp_email')


send_email.addEventListener('click', () => {
  myval = inp_email.value

  if (
    (myval.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) >= 0
  ) {
    alert('ok')
  }
})