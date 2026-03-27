// ===== HOBBY ADD + DELETE FUNCTION =====
document.querySelectorAll(".add-hobby-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    
    var container = this.parentElement;
    var input = container.querySelector(".hobby-input");
    var list = container.querySelector("ol");

    var text = input.value.trim();

    if (text === "") {
      alert("Please enter something");
      return;
    }

    var li = document.createElement("li");
    li.textContent = text;

    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
  });
});


// ===== CONTACT FORM ALERT =====
document.querySelector("form").addEventListener("submit", function () {
  alert("Your message has been submitted successfully!");
});


// ===== DYNAMIC FOOTER DATE & TIME =====
function showDateTime() {
  var now = new Date();

  var options = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  };

  var date = now.toLocaleDateString("en-IN", options);
  var time = now.toLocaleTimeString("en-IN", { hour12: false });

  document.getElementById("datetime").textContent =
    date + ", " + time;
}

setInterval(showDateTime, 1000);
showDateTime();