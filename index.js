const btn = document.querySelector("button");
const input = document.querySelector(".input");
const h3 = document.querySelector("h3");

btn.addEventListener("click", function () {
  let value = input.value;
  typeof value;
  if (typeof value == Number) {

    
    let square = Math.sqrt(value);
    square = Math.round(square);
    h3.innerHTML = square;
  } else {
    alert("please insert a number");
  }
});
