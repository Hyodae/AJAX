function createList() {
    var s; 
    s = "<ul>" 
        + "<li>Mission Impossible</li>"
        + "<li>Avatar</li>"
        + "<li>Captin America</li>"
        + "</ul>";
    divMovies = document.getElementById("divMovies");
    divMovies.innerHTML = s;
}