const q = console.log;

let interval;
let i = 0;

function autoTextEffect(text, speed) {
  clearInterval(interval);
  interval = setInterval(() => {
    if (text[i]) {
      document.querySelector("h1").innerHTML += `${text[i]}`;
      i += 1;
    } else {
      i = 0;
      document.querySelector("h1").innerText = "";
    }
  }, 1000 / speed);
}

autoTextEffect("We Love Programming!", 1);

document.querySelector("input").addEventListener("change", () => {
  autoTextEffect("We Love Programming!", document.querySelector("input").value);
});
