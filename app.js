const btn = document.getElementById("btn");
const inputMsg = document.getElementById("msg");
const msg = document.querySelector(".msg");

const displayMsg = (e) => {
  e.preventDefault();
  const value = document.getElementById("msg").value;
  msg.textContent = value;
  document.getElementById("msg").value = "";
};

btn.addEventListener("click", displayMsg);
