const music = new Audio('songs/3.m4a');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Arjan Valley <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.png"
    },
    {
        id: 2,
        songName: `Haiwaan <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/2.png"
    },
    {
        id: 3,
        songName: `Hua main <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/3.png"
    },
    {
        id: 4,
        songName: `Kashmir <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/4.png"
    },
    {
        id: 5,
        songName: `Papa Meri Jaan <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/5.png"
    },
    {
        id: 6,
        songName: `Pehle bhi main <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/6.png"
    },
    {
        id: 7,
        songName: `Saari Duniya jala denge <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/7.png"
    },
    {
        id: 8,
        songName: `Satranga <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/8.png"
    },
    {
        id: 9,
        songName: `Tera Mera Viah <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/9.png"
    },
    {
        id: 10,
        songName: `Hum tere bin <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/10.png"
    },
    {
        id: 11,
        songName: `Tum jo aaye <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/11.png"
    },
    {
        id: 12,
        songName: `Ruk jana <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/12.png"
    },
    {
        id: 13,
        songName: `Teri Wang da <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/13.png"
    },
    {
        id: 14,
        songName: `Yaar <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/14.png"
    },
    {
        id: 15,
        songName: `Teri adawa <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/15.png"
    },
    {
        id: 16,
        songName: `Tumhara Dil <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/16.png"
    },
    {
        id: 17,
        songName: `Mahadev <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/17.png"
    },
    {
        id: 18,
        songName: `Softly <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/18.png"
    },
    {
        id: 19,
        songName: `Gora Rang <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/19.png"
    },
    {
        id: 20,
        songName: `Thoda thoda  <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 21,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 22,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 23,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 24,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 25,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 26,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 27,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 28,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 29,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 30,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 31,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 32,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 33,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 34,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 35,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 36,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 37,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 38,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 39,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 40,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 41,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 42,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 43,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 44,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 45,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 46,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 47,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 48,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 49,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 50,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 51,
        songName: `East side <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
    {
        id: 52,
        songName: `Music <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/10.png"
    },
    {
        id: 53,
        songName: `Tere dil <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/11.png"
    },
    {
        id: 54,
        songName: `Expert jatt <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/12.png"
    },
    {
        id: 55,
        songName: `Labbo pe <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/13.png"
    },
    {
        id: 56,
        songName: `Narci <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/14.png"
    },
    {
        id: 57,
        songName: `Hari or me <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/15.png"
    },
    {
        id: 58,
        songName: `Teri Hoke <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/16.png"
    },
    {
        id: 59,
        songName: `Main tera <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/17.png"
    },
    {
        id: 60,
        songName: `Humnama mere <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/18.png"
    },
    {
        id: 61,
        songName: `Ik tera <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/19.png"
    },
    {
        id: 62,
        songName: `Baby teri smile <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "images/20.png"
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});


//search data

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const { id, songName, poster } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
        <img src="${poster}" alt="">
        <div class="content">
            ${songName}
        </div>
    `;
    search_results.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++) {
        let contentElement = items[index].getElementsByClassName('content')[0];

        // Check if the contentElement is defined
        if (contentElement) {
            let text_value = contentElement.textContent || contentElement.innerHTML;

            if (text_value.toUpperCase().indexOf(input_value) > -1) {
                items[index].style.display = "flex";
            } else {
                items[index].style.display = "none";
            }
        } else {
            // Handle the case where 'content' is undefined (no element with class 'content')
            // console.error("No element with class 'content' found in the current card.");
        }
    }
});

//search khtm

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=> {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) =>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
    e.addEventListener('click', (el)=> {
        index = el.target.id;
        // console.log(index);
        music.src = `songs/${index}.m4a`;
        poster_master_play.src = `images/${index}.png`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `songs/${index}.m4a`;

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');

    });
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');

music.addEventListener('timeupdate', ()=> {
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);

    if(sec1<10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2<10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((music_curr / music_dur) * 100);
     seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;


    

});

seek.addEventListener('change', ()=> {
    music.currentTime = seek.value * music.duration / 100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.add('bi-volume-off');
    }
    if (vol.value>0){
        vol_icon.classList.remove('bi-volume-up');
        vol_icon.classList.add('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up');
        vol_icon.classList.remove('bi-volume-down');
        vol_icon.classList.remove('bi-volume-off');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    // console.log(vol_a);
    music.volume = vol_a / 100;
});


let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click', ()=>{
    index -= 1;
    if (index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `songs/${index}.m4a`;
        poster_master_play.src = `images/${index}.png`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index>Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src = `songs/${index}.m4a`;
        poster_master_play.src = `images/${index}.png`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let {songName} = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
        makeAllplays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');

})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
                break;
    }
});



const next_music = () =>{
    // index ++;
    if (index == songs.length) {
        index=1
    } else {
        index++;
    }
    music.src = `songs/${index}.m4a`;
    poster_master_play.src = `images/${index}.png`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.m4a`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

const repeat_music = () =>{
    index;
    
    music.src = `songs/${index}.m4a`;
    poster_master_play.src = `images/${index}.png`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.m4a`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

const random_music = () =>{
    // index ++;
    if (index == songs.length) {
        index=1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `songs/${index}.m4a`;
    poster_master_play.src = `images/${index}.png`
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `songs/${index}.m4a`;

    let songTitles = songs.filter((els) => {
        return els.id == index;
    });

    songTitles.forEach(elss => {
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ='rgb(105, 105, 105, .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
    
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})
        let menu_list_active_button = document.getElementById('menu_list_active_button');
        let menu_side = document.getElementsByClassName('menu_side')[0];



        let song_side = document.getElementsByClassName('song_side')[0];

        menu_list_active_button.addEventListener('click', ()=> {
            menu_side.style.transform = "translateX(-15%)";
            menu_list_active_button.style.opacity = 1;
        })

        menu_list_active_button.addEventListener('click', ()=> {
            menu_list_active_button.style.opacity = 1;
            // menu_side.style.transform = "translateX(-115%)";

        })

        let close = document.getElementById('close')
        close.addEventListener('click', () => {
            menu_side.style.transform = "translateX(-115%)";
        })
console.log("no error");
console.log("no error");
