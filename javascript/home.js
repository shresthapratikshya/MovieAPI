let risDiv = document.querySelector("#movie-list");

function getMovies() {
    fetch(`https://yts.mx/api/v2/list_movies.json`)
        .then(response =>
            response.json())
        .then(movieData => {
            console.log(movieData);
            movieData.data.movies.forEach(element => {
                const div = document.createElement("div");
                div.className = "movie-content";

                const title = document.createElement("h2");
                title.className = "movie-title";
                title.innerHTML = element.title;
                div.appendChild(title);

                const image = document.createElement("img");
                image.src = element.medium_cover_image;
                div.appendChild(image);

                const button = document.createElement("button");
                button.classList = "open";
                button.innerHTML = "details";
                button.setAttribute("onclick", "moveToDetail(" + element.id + ")");
                div.appendChild(button);

                risDiv.appendChild(div);
            });
        });
}

function moveToDetail(movieId) {
    let movie = JSON.parse(localStorage.getItem("movie"));
    let id = { movieId };
    localStorage.setItem("movie", JSON.stringify(id));
    location.replace("../movieDetails.html");
}

window.onload = function movieList() {
    getMovies();
}