function zoomIn(event) {
    event.target.style.width = "700px";
    event.target.style.height = "500px";
    event.target.style.transition = "all 0.5s";
}
function zoomOut(event) {
    event.target.style.width = "";
    event.target.style.height = "";
    event.target.style.transition = "all 0.5s";
}