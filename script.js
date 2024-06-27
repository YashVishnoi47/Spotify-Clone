console.log("script is working")



async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text()
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith("mp3")){
            songs.push(element.href.split("/songs/")[1])
            
        }
        
    }
    return songs
}

async function main(){
    let songs  = await getsongs();
    console.log(songs)

    let songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><div class="songlist-li-songinfo">

                                <i class="fa-sharp fa-solid fa-music"></i>

                                <div class="songinfo">
                                    <p class="song-name">${song.replaceAll("%20", " ")} </p>
                                    <p class="song-artist">Yash</p>
                                </div>

                            </div>

                            <span> Play<i class="fa-solid fa-play"></i></span></li>`

    }

    var audio = new Audio(songs[0]); 
    // audio.play(); 
}
 
main()



