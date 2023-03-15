let movieDiv = document.querySelector("#detailedInfo");

function getDetails() {
    const detail = JSON.parse(localStorage.getItem("movie"));
    // console.log(detail.movieId);
    movieDiv.innerHTML = detail.movieId;
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${detail.movieId}`)
        .then(response =>
            response.json())
        .then(detailData => {
            // console.log(detail.movieId);

            const retrieve = detailData.data.movie;

            const movieDetail = document.createElement("div");
            movieDetail.classList = "movie-detail";

            const title = document.createElement("h2");
            title.className = "movie-title";
            title.innerHTML = retrieve.title;
            movieDetail.appendChild(title);

            const image = document.createElement("img");
            image.src = retrieve.medium_cover_image;
            movieDetail.appendChild(image);

            const year = document.createElement("h4");
            year.className = "movie-year";
            year.innerHTML = retrieve.year;
            movieDetail.appendChild(year);

            const description = document.createElement("p");
            description.className = "movie-description";
            description.innerHTML = retrieve.description_full;
            movieDetail.appendChild(description);


            movieDiv.appendChild(movieDetail);

        });

}
getDetails()