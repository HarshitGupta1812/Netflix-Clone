const api="api_key=35cb55458021aa6efab5c61819fa5fba";
const base_url="https://api.themoviedb.org/3";
const banner_url="https://image.tmdb.org/t/p/original";
const img_url="https://image.tmdb.org/t/p/w300";

const requests = {

    fetchTrending: `${base_url} /trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
}

function truncate(str,n) {
    return str?.length>n?str.substr(0,n-1) + "..." : str;
}

fetch(requests.fetchNetflixOriginals)
     .then((res) => res.json())

     .then((data) => {
        console.log(data.results)

        const setMovie = data.results[Math.floor(Math.random() * data.results.length-1)];

        var banner = document.getE1ementById("banner");
        var banner_title = document.getE1ementById("banner_title");
        var banner_desc = document.getE1ementById("banner_description");

        banner.style.backgroundImage = 
        "url(" + banner_url + setMovie.backdrop_path + ")";
         banner_desc.inner.Text = truncate (setMovie.overview,150);
         banner_tittle.inner.Text = setMovie.name;
     });

     fetch(requests.fetchNetflixOriginals)
         .then((res) => res.json() )

         .then((data) => {
            const headrow = document.getE1ementById("headrow");
            const row = document.createE1ement("div");

            row.className = "row";
            row.classList.add("netflixrow");

            headrow.appendChild(row);

            const title = document.createElement("h2");

            title.className = "row_title";
            title.innerText = "NETFLIX_ORIGINALS";

            row.appendChild(title);

            const row_posters = document.createElement("div");
            row_posters.classNmae = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {

                const poster = document.createElement("img");
                poster.className = "row_posterlarge";
            
                poster.id = s;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
            });
         });

         fetch(requests.fetchTrending)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Top Rated";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);
            });
        });

        fetch(requests.fetchActionMovies)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Action Movies";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });
         
        fetch(requests.fetchComedyMovies)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Comedy Movies";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

        fetch(requests.fetchHorrorMovies)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Horror Movies";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

        fetch(requests.fetchRomanceMovies)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Romance Movies";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });

        fetch(requests.fetchDocumentaries)
         .then((res) => res.json())
         .then((data) => {
            const headrow = document.cretaeElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row_title";
            title.innerText = "Documentaries";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row_posters";
            row.appendChild(row_posters);

            data.results.forEach((movie) => {
                console.log(movie);
                const poster = document.cretaeElement("img");
                poster.className = "row_posterLarge";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.backdrop_path;
                row_posters.appendChild(poster);
            });
        });