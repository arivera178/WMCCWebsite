function openNav() {
    var sidebar = document.querySelector("div.sidebar");
    var main = document.querySelector("div#main");

    sidebar.style.width = "250px";
    sidebar.style.transition = "width 1s"
    main.style.marginLeft = "250px";
    main.style.transition = "margin-left 1s"
}
function closeNav() {
    var sidebar = document.querySelector("div.sidebar");
    var main = document.querySelector("div#main");

    sidebar.style.width = "0";
    sidebar.style.transition = "width 1s"
    main.style.marginLeft = "0";
    main.style.transition = "margin-left 1s"
}