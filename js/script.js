menu_button = document.getElementById("show-nav");
menu = document.getElementById("menu");

function show_nav() {
  var computedStyle = window.getComputedStyle(menu);
  var displayProperty = computedStyle.getPropertyValue("display");

  if (displayProperty === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  menu.classList.toggle("show");
}

function show_user() {
  let popup_user = document.getElementById("user_popup");

  if (popup_user.style.visibility == "hidden") {
    popup_user.style.visibility = "visible";
  } else if (popup_user.style.visibility == "visible") {
    popup_user.style.visibility = "hidden";    
  }
}
