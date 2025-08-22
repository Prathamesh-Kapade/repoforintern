const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  btn.addEventListener('mouseover', function (e) {
    console.log(e.target);

    if (e.target.id === "red") {
      body.style.backgroundColor = "#ff6b6b";
    } else if (e.target.id === "green") {
      body.style.backgroundColor = "#6bcf63";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "#4d9de0";
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = "#f7c948";
    }
  });
});



