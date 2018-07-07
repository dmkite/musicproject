var musicList = [
  {
      id: 1,
      artist: "Major Lazer",
      title: "Free the Universe",
      rating: 3,
      songs: ["Jet Blue Jet", "Jah No Partial", "Wind Up", "Scare Me"]
    },
    {
      id: 2,
      artist: "Chrome Sparks",
      title: "<3 and Soul",
      rating: 3,
      songs: ["Marijuana", "<3 and Soul", "All There Is"]
    },
    {
      id: 3,
      artist: "Glass Animals",
      title: "Zaba",
      rating: 3,
      songs: ["Gooey", "Black Mambo", "Pools"]
    }, {
      id: 4,
      artist: "Sufjan Setevens ",
      title: "Seven Swans",
      rating: 3.5,
      songs: ["All the Trees of the Field...", "To be Alone with You", "Abraham", "We won't Need Legs to Stand"]
    },
    {
      id: 5,
      artist: "Tame Impala",
      title: "Currents",
      rating: 4.5,
      songs: ["Let it Happen", "Yes I'm Changing", "Past Life", "The Less I know the better"]
    },
    {
      id: 6,
      artist: "Lupe Fiasco",
      title: "The Cool",
      rating: 3,
      songs: ["The Coolest", "Hip-Hop Saved My Life", "Streets on Fire", "Little Weapon"]
    },
    {
      id: 7,
      artist: "Vampire Weekend",
      title: "Modern Vampires of the City",
      rating: 3,
      songs: ["Unbelievers", "Step", "Everlasting Arms", "Finger Back"]
    },
    {
      id: 8,
      artist: "Neutral Milk Hotel",
      title: "Aeroplane Over the Sea",
      rating: 3,
      songs: ["King of Carrot Flowers", "Aeroplane Over the Sea", "Holland 1945"]
    },
    {
      id: 9,
      artist: "Tame Impala",
      title: "Lonerism",
      rating: 3,
      songs: ["Apocalypse Dreams", "Feels Like We Only Go Backwards", "Elephant", "Nothing has Happened So Far"]
    },
    {
      id: 10,
      artist: "Starfucker",
      title: "Miracle Mile",
      rating: 4.5,
      songs: ["While I'm Alive", "Sazed", "Beach Monster", "Atlantis", "Fortune's Fool"]
    },
    {
      id: 11,
      artist: "St. Vincent",
      title: "St. Vincent",
      rating: 3,
      songs: ["Birth in Reverse", "Prince Johnny", "Digital Witness"]
    },
    {
      id: 12,
      artist: "First Aid Kit",
      title: "Stay Gold",
      rating: 4,
      songs: ["My Silver Lining", "Stay Gold", "The Bell", "Fleeting One"]
    },
    {
      id: 13,
      artist: "Rogue Wave",
      title: "Asleep at Heaven's Gate",
      rating: 2.5,
      songs: ["Harmonium", "Chicago x12", "Fantasies"]
    },
    {
      id: 14,
      artist: "Sufjan Stevens",
      title: "The Avalanche",
      rating: 4,
      songs: ["Adlai Stevenson", "Chicago (acoustic)", "The Henney Buggy Band", "The Mistress Witch...", "No Man's Land"]
    },
    {
      id: 15,
      artist: "Bibo",
      title: "Ambivalence Avenue",
      rating: 4,
      songs: ["Jealous of Roses", "Lovers' Carvings", "All the Flowers", "S'vive"]
    },
    {
      id: 16,
      artist: "Foster the People",
      title: "Torches",
      rating: 4.5,
      songs: ["Helena Beat", "Don't Stop", "Waste", "Houdini", "Miss You"]
    },
    {
      id: 17,
      artist: "Dr. Dog",
      title: "Shame, Shame",
      rating: 4,
      songs: ["Shadow People", "Where'd All the Time Go?", "Unbearable", "Jackie Wants a Black Eye"]
    },
    {
      id: 18,
      artist: "Sufjan Stevens",
      title: "Michigan",
      rating: 2.5,
      songs: ["All The Good Naysayers...", "Say Yes to M!ch!gan", "Tahqua..."]
    },
    {
      id: 19,
      artist: "The Black Keys",
      title: "Brothers",
      rating: 4,
      songs: ["Next Girls", "Howlin' for You", "The Only One", "Too Afraid to Love You"]
    },
    {
      id: 20,
      artist: "Bibio",
      title: "Silver Wilkinson",
      rating: 4,
      songs: ["A Touta l'Heure", "You", "Raincoat", "You Won't Remember"]
    },
    {
      id: 21,
      artist: "Phantogram",
      title: "Voices",
      rating: 3.5,
      songs: ["Fall in Love", "The Day You Died", "Howling at the Moon", "I Don't Blame You"]
    },
    {
      id: 22,
      artist: "Peter, Bjorn, and John",
      title: "Writer's Block",
      rating: 4,
      songs: ["Amsterdam", "Up Against the Wall", "Let's Call it Off", "The Chill"]
    },
    {
      id: 23,
      artist: "Alt J",
      title: "An Awesome Wave",
      rating: 3.5,
      songs: ["Something Good", "Dissolve Me", "Fitzpleasure", "Taro"]
    },
    {
      id: 24,
      artist: "Arcade Fire",
      title: "The Suburbs",
      rating: 3,
      songs: ["The Sprawl II", "Modern Man", "Culture War"]
    },
    {
      id: 25,
      artist: "Fleet Foxes",
      title: "Helplessness Blues",
      rating: 3,
      songs: ["Battery Kinzie", "Helplessness Blues"]
    },
    {
      id: 26,
      artist: "AJJ",
      title: "Knife Man",
      rating: 4,
      songs: ["Michael Jordan of Drunk Driving", "Fucc the Devil", "If you have love in your heart", "People II: Still Peoplin'/Sorry Bro"]
    }
    
  
];

function create(music) {
  for (var i = 0; i < music.length; i++) {
    var div = document.createElement("div");
    var holder = document.getElementById("holder");
    var title = music[i].title;
    var artist = music[i].artist;
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var txt = document.createTextNode(title);
    var artistTxt = document.createTextNode(artist);
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var h3 = document.createElement("h3");
    var h4 = document.createElement("h4");

    holder.appendChild(div);
    div.classList.add("cards");
    //Add Artwork
    div.appendChild(img);

    //Add Album Title
    div.appendChild(h2);
    document.querySelectorAll(".cards h2")[i].appendChild(txt);

    //Add Artist
    div.appendChild(h3);
    document.querySelectorAll(".cards h3")[i].appendChild(artistTxt);
    div.appendChild(h4);

    div.appendChild(ul);

    // Add Top Songs.
    for (var a = 0; a < music[i].songs.length; a++) {
      var songTitle = music[i].songs[a];
      //add li's and link
      var url =
        "https://www.youtube.com/results?search_query=" +
        music[i].songs[a].split(" ").join("+") +
        "+" +
        music[i].artist.split(" ").join("+");
      document.getElementsByClassName("cards")[i].children[4].innerHTML +=
        '<li> <a href="' + url + '" target="_blank">' + songTitle + "</a></li>";
    }
  }
  rating(music);
  addArtwork(music);
}

create(musicList);

function rating(music) {
  for (var i = 0; i < music.length; i++) {
    var stars = music[i].rating;
    var ratings = document.querySelectorAll(".cards h4")[i];
    ratings.innerHTML = '';
    if (stars % 1 === 0) {
      for (var j = 0; j < stars; j++) {
        ratings.innerHTML += '<i class="fa fa-star"></i>';
      }
    } else {
      for (var k = 0; k < stars - 0.5; k++) {
        ratings.innerHTML += '<i class = "fa fa-star"></i>';
      }
      ratings.innerHTML += '<i class = "fa fa-star-half"></i>';
    }
  }
}



function addArtwork(music) {
  for (var i = 0; i < music.length; i++) {
    //document.querySelectorAll(".cards img")[i].src =
     // "https://images-na.ssl-images-amazon.com/images/I/61t274O4cUL._SY355_.jpg";
    document.querySelectorAll('.cards img')[i].src = 'img/' + music[i].title.toLowerCase().split(' ').join('') + '.jpg';
    //above won't work - .split(' ').join('');
    if(music[i].title[0] === '<'){
      document.querySelectorAll('.cards img')[i].src = 'img/heartandsoul.jpg';
    }

  }
}

//addArtwork(musicList);

function highLow(a, b) {
  if (a.rating > b.rating) {
    return -1;
  }
  if (a.rating < b.rating) {
    return 1;
  }

  return 0;
}

function lowHigh(a, b) {
  if (a.rating < b.rating) {
    return -1;
  }
  if (a.rating > b.rating) {
    return 1;
  }

  return 0;
}

//Sort A-Z for Album.
function albumAToZ(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }

  return 0;
}

function albumZToA(a, b) {
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return 1;
  }

  return 0;
}

function artistAToZ(a, b) {
  if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
    return -1;
  }
  if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
    return 1;
  }

  return 0;
}

function artistZToA(a, b) {
  if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
    return -1;
  }
  if (a.artist.toLowerCase() < b.artist.toLowerCase()) {
    return 1;
  }

  return 0;
}

var sortButton = document.getElementById("sortButton");
var dropDown = document.getElementById("sortBy");
var searchButton = document.getElementById("searchButton");

sortButton.onclick = function() {
  document.getElementById("holder").innerHTML = "";
  if (dropDown.value == "ratingHighLow") {
    musicList.sort(highLow);
  } else if (dropDown.value == "ratingLowHigh") {
    musicList.sort(lowHigh);
  } else if (dropDown.value == "albumAZ") {
    musicList.sort(albumAToZ);
  } else if (dropDown.value == "albumZA") {
    musicList.sort(albumZToA);
  } else if (dropDown.value == "artistZA") {
    musicList.sort(artistZToA);
  } else if (dropDown.value == "artistAZ") {
    musicList.sort(artistAToZ);
  }
  create(musicList);
  rating(musicList);
  addArtwork(musicList);
  for (var i = 0; i < musicList.length; i++) {
    document.getElementsByClassName("cards")[i].style.animation =
      "fadeIn .5s ease-in";
  }
};

searchButton.onclick = function() {
  document.getElementById("holder").innerHTML = "";
  var searchTerm = document.getElementById("searchTerm").value;
  var searchArray = [];

  //return no results if user enters space
  if (searchTerm.replace(/\s/g, "") === "") {
    document.getElementById("holder").innerHTML = "No results";
    return;
  }

  for (var i = 0; i < musicList.length; i++) {
    //check songs for search term.
    for (var j = 0; j < musicList[i].songs.length; j++) {
      if (
        musicList[i].songs[j].toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        searchArray.push(musicList[i]);
        break;
      }
    }
    if (searchArray.includes(musicList[i])) {
      continue;
    }
    //check artist and album for search term.
    if (
      musicList[i].artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      musicList[i].title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      searchArray.push(musicList[i]);
    }
  }

  create(searchArray);
  //rating(searchArray);
  //addArtwork(searchArray);
};

var toggle = 0;
document.getElementById("filterButton").onclick = function() {
  filter();
};
document.getElementById("triangleUp").onclick = function() {
  filter();
};


var div = document.createElement("div");
    var utility = document.getElementById("utility");
    utility.appendChild(div);
    var utilityCSS = (utility.lastElementChild.className = "filterBox");
    document.getElementsByClassName("filterBox")[0].innerHTML =
      '<p>Only include albums with a rating of...</p><div><input type="checkbox" name="star" id="1stars" value="1"><label for="1stars">1 Star</label></div><div><input type="checkbox" name="star" value="2" id="2stars"><label for="2stars">2 Stars</label></div><div><input type="checkbox" name="star" value="3"id="3stars"><label for="3stars">3 Stars</label></div><div><input type="checkbox" name="star" value="4" id="4stars"><label for="4stars">4 Stars</label></div><div><input type="checkbox" name="star" value="5" id="5stars"><label for="star">5 Stars</label></div><button id="filterGo">Go</button>';
 for (var i = 0; i < document.querySelectorAll(".filterBox div").length; i++){
      var span = document.createElement("span");
      document.querySelectorAll(".filterBox div")[i].appendChild(span);
    }

function filter() {
  
  if (toggle === 0) {
    
    document.getElementById("utility").style.animation =
      "dropOpen .25s ease-in";
    
    document.getElementById("utility").style.height = "330px";
    
    document.getElementById("triangleUp").style.transform = "rotate(0deg)";
    
    document.getElementById("triangleUp").style.animation =
      "rotateDown .25s ease-in";
    toggle = 1;
  } else if (toggle === 1) {
    document.getElementById("utility").style.height = "29px";
    document.getElementById("utility").style.animation =
      "slideUp .25s ease-out";
    document.getElementById("triangleUp").style.transform = "rotate(180deg)";
    document.getElementById("triangleUp").style.animation =
      "rotateDown .25s ease-in";
    toggle = 2;
  } else if (toggle === 2) {
    document.getElementById("utility").style.height = "335px";
    document.getElementById("utility").style.animation =
      "dropOpen .25s ease-in";
    document.getElementById("triangleUp").style.transform = "rotate(0deg)";
    document.getElementById("triangleUp").style.animation =
      "rotateUp .25s ease-in";
    toggle = 1;
  }

}

document.getElementById("filterButton").onmouseover = function() {
  document.getElementById("triangleUp").style.borderBottom =
    "10px solid #63b49d";
};

document.getElementById("filterButton").onmouseout = function() {
  document.getElementById("triangleUp").style.borderBottom = "10px solid white";
};




//custom checkboxes
function selectBox(i){
  return function(){
    if (document.querySelectorAll('.filterBox input')[i].checked === true){
      document.querySelectorAll('.filterBox span')[i].style.backgroundColor = '#63b49d';
    }
    else {
      document.querySelectorAll('.filterBox span')[i].style.backgroundColor = 'white';
    }
  };
}

 for (var i = 0; i < document.querySelectorAll('.filterBox input').length; i++){
   document.querySelectorAll('.filterBox input')[i].onclick = selectBox(i);
 }
var filterList = [];

document.getElementById('filterGo').onclick = function(){
  document.getElementById("utility").style.height = "29px";
  document.getElementById("utility").style.animation =
      "slideUp .25s ease-out";
  document.getElementById("triangleUp").style.transform = "rotate(180deg)";
  document.getElementById("triangleUp").style.animation =
      "rotateDown .25s ease-in";
  document.getElementById('holder').innerHTML = '';
   for (var i = 0; i < musicList.length; i++){
     for (var j = 1; j < 6; j++){
       var custId = j + 'stars';
       if(document.getElementById(custId).checked === true && musicList[i].rating === j){
          filterList.push(musicList[i]);   

       }
     }
   }
  
  create(filterList);
  if(filterList.length < 1){document.getElementById('holder').innerHTML = 'No results'}
};

var mobileToggle = 1;


document.getElementById('mobileMenu').onclick = function(){

  if (mobileToggle === 1){
    document.getElementById('mobileMenu').style.transform = 'rotate(45deg)';
    document.getElementById('mobileMenu').style.animation = 'rotate .25s linear';
    document.getElementById('utility').style.display = 'block';
    document.getElementById('utility').style.animation = 'appear .25s linear';
    mobileToggle = 0;
  }
  else{
    document.getElementById('mobileMenu').style.transform = 'rotate(0deg)';
    document.getElementById('mobileMenu').style.animation = 'reverseRotate .25s linear';
    document.getElementById('utility').style.display = 'none';
    document.getElementById('utility').style.animation = 'disappear .25s linear';
    mobileToggle = 1;
  }
}
