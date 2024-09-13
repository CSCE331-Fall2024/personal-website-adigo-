function load_style() {
    let page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style == null) {
        page_style = "styles.css";
    }
    document.getElementById("page_style").setAttribute("href", "/project1/assets/css/" + page_style);
}

// function default_style() {
//     localStorage.setItem("page_stylesheet_name", "styles.css");
//     load_style();
// }

// function new_style() {
//     localStorage.setItem("page_stylesheet_name", "style2.css");
//     load_style();
// }
function toggle_style() {
    let current_style = localStorage.getItem("page_stylesheet_name");
    if (current_style === "styles.css") {
        localStorage.setItem("page_stylesheet_name", "style2.css");
    } else {
        localStorage.setItem("page_stylesheet_name", "styles.css");
    }
    load_style();
}

load_style();