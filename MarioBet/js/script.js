menu_button = document.getElementById("show-nav");
menu = document.getElementById("menu");

function show_nav() {
    var computedStyle = window.getComputedStyle(menu);
    var displayProperty = computedStyle.getPropertyValue('display');
    
    if (displayProperty === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }

    menu.classList.toggle("show");
}
