function viewMore(){
    for (let n of document.querySelectorAll(".card")){
        n.addEventListener("click", function(){
            n.querySelector("section").style.display = "flex";
        });
    }
}

function closeSpan(){
    const span = document.querySelectorAll("section");
    for(let i of span){
        i.style.display = "none"
    }
}

async function getCharacters(){
    const data = await fetch ("https://api.disneyapi.dev/characters");
    const answer = await data.json();

    for (let n of answer.data){

        const arrFilms = [];
        const numFilms = n.films.length
        for (let i = 0; i <= numFilms; i++){
            arrFilms.push(n.films[i]);
        }
        const arrFilmsDot = n.films.length >= 1 ? " ==> " : ""

        const arrShotFilms = [];
        const numShortFilms = n.shortFilms.length
        for (let i = 0; i <= numShortFilms; i++){
            arrShotFilms.push(n.shortFilms[i]);
        }
        const arrShotFilmsDot = n.shortFilms.length >= 1 ? " ==> " : ""

        const arrTvShows = [];
        const numTvShows = n.tvShows.length
        for (let i = 0; i <= numTvShows; i++){
            arrTvShows.push(n.tvShows[i]);
        }
        const arrTvShowsDot = n.tvShows.length >= 1 ? " ==> " : ""

        const arrvideoGames = [];
        const numvideoGames = n.videoGames.length
        for (let i = 0; i <= numvideoGames; i++){
            arrvideoGames.push(n.videoGames[i]);
        }
        const arrvideoGamesDot = n.videoGames.length >= 1 ? " ==> " : ""

        const arrparkAttractions = [];
        const numparkAttractions= n.parkAttractions.length
        for (let i = 0; i <= numparkAttractions; i++){
            arrparkAttractions.push(n.parkAttractions[i]);
        }
        const arrparkAttractionsDot = n.parkAttractions.length >= 1 ? " ==> " : ""
        
        document.querySelector("main").insertAdjacentHTML("beforeend", `
        
        <div class="card" onclick="viewMore()">
            <img src="${n.imageUrl}" alt="characterImage" class="characterImage">
            <div class="characterInfo">
                <p class="name">Name: ${n.name}</p>
                <p class="films">Films: ${n.films.length}</p>
                <p class="shortFilms">Short films: ${n.shortFilms.length}</p>
                <p class="tvShows">TV Shows: ${n.tvShows.length}</p>
                <p class="videoGames">Video Games: ${n.videoGames.length}</p>
                <p class="parkAttractions">Park Attractions: ${n.parkAttractions.length}</p>
            </div>

                <section>
                    <img src="${n.imageUrl}" alt="characterImage" class="characterImage1">
                    <div class="characterInfo">
                        <p class="name1">Name: ${n.name}</p><br>
                        <p class="films">Films: ${n.films.length} ${(arrFilmsDot + arrFilms).slice(0, -1)}</p><br>
                        <p class="shortFilms">Short films: ${n.shortFilms.length} ${(arrShotFilmsDot + arrShotFilms).slice(0, -1)}</p><br>
                        <p class="tvShows">TV Shows: ${n.tvShows.length} ${(arrTvShowsDot + arrTvShows).slice(0, -1)}</p><br>
                        <p class="tvShows">Video Games: ${n.videoGames.length} ${(arrvideoGamesDot + arrvideoGames).slice(0, -1)}</p><br>
                        <p class="tvShows">Park Attractions: ${n.parkAttractions.length} ${(arrparkAttractionsDot + arrparkAttractions).slice(0, -1)}</p><br>
                    </div><br>
                    <a href="./index.html"><button class="closeSpan">CLOSE</button></a>
                </section>
        </div>

        `)

    }
}

getCharacters()
