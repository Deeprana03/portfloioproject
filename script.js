// ===== HOBBY ADD FUNCTION =====
var addButtons = document.querySelectorAll(".add-hobby-btn");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", function () {
    var input = this.previousElementSibling;
    var list = this.previousElementSibling.previousElementSibling;

    var text = input.value.trim();

    if (text === "") {
      alert("Please enter something");
      return;
    }

    var li = document.createElement("li");
    li.textContent = text;

    // delete button
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.style.marginLeft = "8px";

    delBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
  });
}

// ===== CONTACT FORM ALERT =====
var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  form.reset();
});

// ===== FOOTER DATE & TIME =====
function showDateTime() {
  var now = new Date();

  var date = now.toDateString(); // simple format
  var time = now.toLocaleTimeString();

  document.getElementById("datetime").textContent =
    date + " , " + time;
}

setInterval(showDateTime, 1000);
showDateTime();