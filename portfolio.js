document.querySelector(".b0").addEventListener("click", (e) => {
  document.querySelector("body").style.background = `white`;
});
document.querySelector(".b1").addEventListener("click", (e) => {
  document.querySelector("body").style.background = `#ccc`;
});
document.querySelector(".b2").addEventListener("click", (e) => {
  document.querySelector("body").style.background = `rgba(92, 238, 25, 0.5)`;
});
document.querySelector(".b3").addEventListener("click", (e) => {
  document.querySelector("body").style.background = `rgba(9, 137, 241, 0.5)`;
});
document.querySelector(".b4").addEventListener("click", (e) => {
  document.querySelector("body").style.background = `rgba(240, 9, 9, 0.6)`;
});

for (let i = 0; i <= 4; i++) {
  document.getElementById(i).addEventListener("click", (e) => {
    document.getElementById(i).style.background = e.target.attributes[2];
    document.getElementById(i).style.transform = "scale(2)";
    check(parseInt(e.target.id));
  });
}
check = (val) => {
  for (let i = 0; i <= 4; i++) {
    if (i !== val) {
      document.getElementById(i).style.transform = "scale(1)";
    }
  }
};
