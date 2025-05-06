function toggleMenu() {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");

    if (menu) {
        menu.classList.toggle("show");

        if (menu.classList.contains("show")) {
            if (content) content.classList.add("shifted");
        } else {
            if (content) content.classList.remove("shifted");
        }
    }
}

function navigate(page) {
    var menu = document.getElementById("menu_list");
    var content = document.getElementById("content");

    if (menu) menu.classList.remove("show");
    if (content) content.classList.remove("shifted");
}