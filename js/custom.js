function toggleMenu() {
    console.log(document.getElementById("sidebar").style.display);
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "flex";
    } else {
        sidebar.style.display = "none";
    }
}

