let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function increaseHeart(el) {
  heartCount++;
  document.getElementById("heartCount").innerText = `❤️ ${heartCount}`;
  el.innerText = "❤️";
}

function copyNumber(number) {
  navigator.clipboard.writeText(number);
  copyCount++;
  alert(`Copied number: ${number}`);
  document.getElementById("copyCount").innerText = `📋 ${copyCount} Copy`;
}

function makeCall(service, number) {
  if (coinCount < 20) {
    alert("Not enough coins to make a call!");
    return;
  }
  alert(`Calling ${service} at ${number}`);
  coinCount -= 20;
  document.getElementById("coinCount").innerText = `💰 ${coinCount}`;

  // Add to history with time
  const time = new Date().toLocaleTimeString();
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.innerText = `${service} - ${number} (${time})`;
  historyList.appendChild(li);
}

function clearHistory() {
  document.getElementById("historyList").innerHTML = "";
}
