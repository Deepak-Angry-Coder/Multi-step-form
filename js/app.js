var wrapper1 = document.getElementById("wrapper1");
var wrapper2 = document.getElementById("wrapper2");
var wrapper3 = document.getElementById("wrapper3");
var wrapper4 = document.getElementById("wrapper4");
var wrapper5 = document.getElementById("wrapper5");
var count = document.querySelectorAll(".count");
var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");
var count3 = document.getElementById("count3");
var count4 = document.getElementById("count4");
var count5 = document.getElementById("count5");

wrapper1.style.display = "flex";
wrapper2.style.display = "none";
wrapper3.style.display = "none";
wrapper4.style.display = "none";
wrapper5.style.display = "none";

count.forEach((count) => {
  count.style.color = "white";
});

count1.style.backgroundColor = "var(--LightBlue)";
count1.style.color = "var(--MarineBlue)";

count2.style.backgroundColor = "var(--LightBlue)";
count2.style.color = "var(--MarineBlue)";

count3.style.backgroundColor = "var(--LightBlue)";
count3.style.color = "var(--MarineBlue)";

count4.style.backgroundColor = "var(--LightBlue)";
count4.style.color = "var(--MarineBlue)";

count5.style.backgroundColor = "var(--LightBlue)";
count5.style.color = "var(--MarineBlue)";

function FirstSubmitForm() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var name_err = document.getElementById("name_err");
  var email_err = document.getElementById("email_err");
  var phone_err = document.getElementById("phone_err");
  var isValid = true;

  if (name.value === "") {
    name_err.innerHTML = "This field is required";
    name.style.border = "1px solid hsl(354, 84%, 57%)";
    isValid = false;
  } else {
    name_err.innerHTML = "";
    name.style.border = "1px solid hsl(228, 100%, 84%)";
  }

  if (email.value === "") {
    email_err.innerHTML = "This field is required";
    email.style.border = "1px solid hsl(354, 84%, 57%)";
    isValid = false;
  } else if (!validEmail(email.value)) {
    email_err.innerHTML = "Email is not valid";
    isValid = false;
  } else {
    email_err.innerHTML = "";
    email.style.border = "1px solid hsl(228, 100%, 84%)";
  }

  if (phone.value === "") {
    phone_err.innerHTML = "This field is required";
    phone.style.border = "1px solid hsl(354, 84%, 57%)";

    isValid = false;
  } else {
    phone_err.innerHTML = "";
    phone.style.border = "1px solid hsl(228, 100%, 84%)";
  }

  if (isValid) {
    wrapper1.style.display = "none";
    wrapper2.style.display = "flex";
  }
}

function validEmail(email) {
  var valid = /\S+@\S+\.\S+/;
  return valid.test(email);
}

// selecting card

const game_card = document.querySelectorAll(".game_card");

game_card.forEach((card) => {
  card.addEventListener("click", () => {
    const activeChild = document.querySelector(".game_card.active");
    activeChild.classList.remove("active");
    card.classList.add("active");
    let priceText = card.querySelector(".amt").innerText;
    var price = parseFloat(priceText.replace("$", "").replace("/mo", ""));
    return price;
  });
});

//check if yearly or monthly subscription

const checkBox = document.getElementById("check");
checkBox.addEventListener("click", () => {
  const amount1 = document.querySelector(".amt1");
  const amount2 = document.querySelector(".amt2");
  const amount3 = document.querySelector(".amt3");
  const free = document.querySelectorAll(".free");

  if (checkBox.checked) {
    amount1.textContent = "$90/yr";
    amount2.textContent = "$120/yr";
    amount3.textContent = "$150/yr";
    free.forEach(function (frees) {
      frees.innerHTML = "2 months free";
    });
  } else {
    amount1.textContent = "$9/mo";
    amount2.textContent = "$12/mo";
    amount3.textContent = "$15/mo";
    free.forEach(function (frees) {
      frees.innerHTML = "";
    });
  }
});

function next() {
  wrapper2.style.display = "none";
  wrapper3.style.display = "flex";
}

// add-ons step

const addOns = document.querySelectorAll(".ser_card");

addOns.forEach(function (card) {
  card.addEventListener("click", () => {
    const selectCard = document.querySelector(".ser_card.active_add");
    if (selectCard) {
      selectCard.classList.remove("active_add");
    }
    card.classList.add("active_add");

    const checkbox = card.querySelector(".service");
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
    }
  });
});

function submitForm() {
  wrapper3.style.display = "none";
  wrapper4.style.display = "flex";
}

function lastSubmitForm() {
  wrapper4.style.display = "none";
  wrapper5.style.display = "flex";
}
