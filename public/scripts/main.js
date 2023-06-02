// ref https://github.com/WICG/EventListenerOptions/pull/30
function isPassive() {
  var supportsPassiveOption = false;
  try {
      addEventListener("test", null, Object.defineProperty({}, 'passive', {
          get: function () {
              supportsPassiveOption = true;
          }
      }));
  } catch(e) {}
  return supportsPassiveOption;
}
     
var myScroll;

function loaded () {
    myScroll = new IScroll('#wrapper', {
      scrollX: true,
      scrollY: true,
      mouseWheel: true,
      freeScroll: true,
      startX: -3*1920,
      startY: -2.1*1080,
      zoom: false});
}

/*artist stuff */
let artistSection = document.getElementById('artists');
function loadArtistDOM(value,key,map) {
    const heading = document.createElement("h3");
    const node = document.createTextNode(value.name);
    heading.appendChild(node);
    artistSection.appendChild(heading);
}

var artists = new Map();

artists.set(0,{id:0, name: 'Adi Toohey', bio:"50 words dolor sit amet, consectetur adipiscing elit. Phasellus eu magna sodales, iaculis ex nec, finibus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut finibus et ligula gravida suscipit. Nulla auctor tempor elit, vitae ornare velit viverra ut. Nulla tristique ligula et nulla.", image: 'images/artist.png', sc: 1202126179})
artists.set(1,{id:1, name: 'Bobby Vibe Positive', bio:"60 words dolor sit amet, consectetur adipiscing elit. Phasellus est urna, pulvinar in blandit eu, consequat lacinia turpis. Nulla facilisi. Vivamus volutpat nisi vel aliquam convallis. Etiam sed est sit amet ipsum varius faucibus at vitae ligula. Nulla laoreet feugiat tristique. Nullam vitae arcu sit amet elit porta malesuada. Praesent sit amet turpis et turpis congue tincidunt. Vestibulum dolor augue.", image: 'images/artist.png', sc: 1231299577})
artists.set(2,{id:2,name: 'Cousin', bio:"70 words dolor sit amet, consectetur adipiscing elit. Cras eget maximus neque, vitae dignissim velit. Ut ut hendrerit enim. Praesent vel leo ipsum. Nullam et semper elit. Nunc dolor urna, accumsan eu lectus sed, accumsan imperdiet odio. Sed rhoncus nunc sed accumsan placerat. Nunc vel orci tempus, commodo justo tempus, volutpat tortor. Morbi maximus urna diam, semper lacinia metus luctus vel. Pellentesque at enim mauris. Quisque convallis a lorem a.", image: 'images/artist.png', sc: 1231299577})
artists.set(3,{id:3,name: 'Dary Justice', bio:"80 words dolor sit amet, consectetur adipiscing elit. Quisque in orci eget sem tincidunt blandit. Aenean efficitur leo non tortor condimentum, id auctor nisl lacinia. In hac habitasse platea dictumst. Maecenas vitae fermentum erat, in pulvinar eros. Nulla ac suscipit urna. Aenean pharetra velit ac finibus pellentesque. Pellentesque accumsan consectetur odio, in lacinia lacus porta non. Etiam sed tempus nunc. Fusce venenatis elit elementum justo lobortis iaculis. Pellentesque mollis mollis justo, a pharetra mauris ultrices in. Sed a massa volutpat.", image: 'images/artist.png', sc: 1231299577})
artists.set(4,{id:4,name: 'Doris', bio:"Rhythm. Sound. Musical histories of Jamaica and the UK provided in illusive, spaced out trips. Pulling from all corners of dub, jungle, bass and beyond, Ryan Hunter (Midnight Tenderness) and Rory McPike (Rings Around Saturn) will have no issues getting us where we need to go.", image: 'images/artist.png', sc: 1231299577})
artists.set(5,{id:5,name: 'DIN', bio:"The powerhouse duo of Rainbow Chan (also Chunyin) and Alex Ward (Moon Holiday) offer a brash, irreverent and unpretentious DIY delivery of pop leaning electro soundscapes. Effortless and intimate, driven by ethic, immune to bullshit.", image: 'images/artist.png', sc: 1231299577})
artists.set(6,{id:6,name: 'DJ Earl Grey', bio:"Sydney’s favourite do has been shouting out loud his local scene through his co-run label Ken Oath and party series Rimbombo, as well as his new label and radio program, Best Effort (Sky Lounge). A superior digger and mood setter. Pulling from all corners, he can set almost any scene.", image: 'images/artist.png', sc: 1231299577})
artists.set(7,{id:7,name: 'Fabrics', bio:"It’s rare to leave a Fabrics set without feeling as though you’ve delved into some sort of lowkey existential pondering. Their emotionally charged sets, full of pulsing, textural progressions, offer a consistent energy and pace that pull you along with it, no questions asked.", image: 'images/artist.png', sc: 1231299577})
artists.set(8,{id:8,name: 'FB Perimeter', bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.", image: 'images/artist.png', sc: 1231299577})
artists.set(9,{id:9,name: 'Interstellar Fugitives', bio:"Fuelled by high energy, higher calibre selects, DJ Sarah and Georgia Bird display a defiant drive built on a deep appreciation of breaks, jungle and the tougher edge of the Motor City sound. Sliding through with Drexciyan precision, this pair loosen and transport dancefloors with relative ease. Non stop bop.", image: 'images/artist.png', sc: 1231299577})
artists.set(10,{id:10,name: 'IV Drip', bio:"IV Drip is a Sydney based DJ who won’t be limited by genre bounds, but holds a high affiliation for glitchy electro and breaks. She’s a regular fixture in the Sydney rave scene and has played support for Delta Funktionen, Madam X and Nite Fleit.", image: 'images/artist.png', sc: 1231299577})
artists.set(11,{id:11,name: 'Merve', bio:"Fuelled by high energy, higher calibre selects, DJ Sarah and Georgia Bird display a defiant drive built on a deep appreciation of breaks, jungle and the tougher edge of the Motor City sound. Sliding through with Drexciyan precision, this pair loosen and transport dancefloors with relative ease. Non stop bop.", image: 'images/artist.png', sc: 1231299577})
artists.set(12,{id:12,name: 'Nat James', bio:"Nat James’ obsession with collecting records leans toward the left-field and experimental. Recent supports include Simo Cell and Moopie, as well as mixes for Apsis & Steeplejack that have only left us wanting more.", image: 'images/artist.png', sc: 1231299577})
artists.set(13,{id:13,name: 'Nazira', bio:"The powerhouse duo of Rainbow Chan (also Chunyin) and Alex Ward (Moon Holiday) offer a brash, irreverent and unpretentious DIY delivery of pop leaning electro soundscapes. Effortless and intimate, driven by ethic, immune to bullshit.", image: 'images/artist.png', sc: 1231299577})
artists.set(14,{id:14,name: 'Roy Batty Jr.', bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.", image: 'images/artist.png', sc: 1231299577})
artists.set(15,{id:15,name: 'Sardines', bio:"It’s rare to leave a Fabrics set without feeling as though you’ve delved into some sort of lowkey existential pondering. Their emotionally charged sets, full of pulsing, textural progressions, offer a consistent energy and pace that pull you along with it, no questions asked.", image: 'images/artist.png', sc: 1231299577})
artists.set(16,{id:16,name: 'Shoeb Ahmad', bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.", image: 'images/artist.png', sc: 1231299577})
artists.set(17,{id:17,name: 'Simon TK', bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.", image: 'images/artist.png', sc: 1231299577})
artists.set(18,{id:18,name: 'The Twerps', bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.", image: 'images/artist.png', sc: 1231299577})
artists.set(19,{id:19,name: 'Thomas Gray & Liam Ebbs', bio:"Recently joining forces having both released on Sydney’s Black Wattle, this pair knows how to map out a truly unique sonic journey. Traversing ambient jaunts with ethereal steps and overwhelming hypnosis, Tom & Liam will bring in the rise, Sunday morning.", image: 'images/artist.png', sc: 1231299577})
artists.set(20,{id:20,name: 'Trm B', bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.", image: 'images/artist.png', sc: 1231299577})
artists.set(21,{id:21,name: 'Tristian Arp', bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.", image: 'images/artist.png', sc: 1231299577})
artists.set(22,{id:22,name: 'Turner Street Sound', bio:"Rhythm. Sound. Musical histories of Jamaica and the UK provided in illusive, spaced out trips. Pulling from all corners of dub, jungle, bass and beyond, Ryan Hunter (Midnight Tenderness) and Rory McPike (Rings Around Saturn) will have no issues getting us where we need to go.", image: 'images/artist.png', sc: 1231299577})
artists.set(23,{id:23,name: 'Valesuchi', bio:"The powerhouse duo of Rainbow Chan (also Chunyin) and Alex Ward (Moon Holiday) offer a brash, irreverent and unpretentious DIY delivery of pop leaning electro soundscapes. Effortless and intimate, driven by ethic, immune to bullshit.", image: 'images/artist.png', sc: 1231299577})
artists.forEach(loadArtistDOM)


var brand = document.querySelector(".main-header__brand img");
var modal = document.querySelector(".modal-acknowledgment");
var header = document.querySelector(".main-header")
var footer = document.querySelector(".main-footer")
var modalButton = document.querySelector(".modal-acknowledgment__action");
var soundButton = document.querySelector(".toggle-music-mobile img");
var sections = document.querySelectorAll("section")
var sectionTitle = document.querySelector(".section_title");
var audioOn = false;
var scrollLinks = document.querySelectorAll(".scroll-link");
var infoSections = document.querySelectorAll("#info h3");
var termLinks = document.querySelectorAll('.terms-link');

/* PAGE OBSERVERS */
  
function callback(entries, observer) {
     entries.forEach((entry) => {
       if(entry.isIntersecting) {
        if (entry.target.id == 'home') {
          brand.style.opacity = 0;
          sectionTitle.style.opacity = 0;
          sectionTitle.innerHTML= "";  
        } else {
          sectionTitle.innerHTML= entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);  
          sectionTitle.style.opacity = 1;
        }
       } else {
        if (entry.target.id == 'home') {
          brand.style.opacity = 1;
       }
        sectionTitle.style.opacity = 0;
      }
    });
}

function createObserver(targets, callback) {
   const options = {
      root: null,
      threshold: 0
   };

  for (var i = 0; i < targets.length; i++) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targets[i]);
  } 
}

createObserver(sections, callback);

//Mobile Nav Functionality
var mobileNav = document.querySelector(".mobile-nav");
var modalPopup =  document.querySelector(".modal-popup");
var mobileNavItems = document.querySelectorAll(".mobile-nav__item a");
var toggleButton = document.querySelector(".toggle-button");
var toggled = false;

//Artist Popup Functionality
var artist = document.querySelector(".artist__individual");
var artistButtons = document.querySelectorAll("#artists h3");

for (var i = 0; i < artistButtons.length; i++) {
  artistButtons[i].addEventListener("click", loadArtist);
}
var currentArtist;

function findArtistByName (name) {
  for (const [key,value] of artists.entries()) { 
    if (name == value.name) {
      return value;
    }
  }
}

function loadArtist(event) {
  if (currentArtist === undefined) {
    currentArtist = findArtistByName(this.textContent)
  }
  //openModal();
  myScroll.disable();
  artist.scrollIntoView({block: "start", inline: "start" });
  artist.classList.remove('visually-hidden');
  document.querySelector(".artist__action-exit").style.display = "block"
  artist.querySelector('.artist__img').src = currentArtist.image;
  artist.querySelector('.artist__name').innerHTML = currentArtist.name;
  artist.querySelector('.artist__bio').innerHTML = currentArtist.bio;
  var sc_string = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + currentArtist.sc + '&color=%23d7cbff&inverse=true&auto_play=false&show_user=true';
  artist.querySelector('.artist__sc').src = sc_string;
  artist.querySelector('.artist__id').innerHTML = (currentArtist.id + 1) + "/24";
}

document.querySelector('.artist__action-back').addEventListener("click", function() {
  prevArtistId = currentArtist.id - 1
  if (prevArtistId == -1) {
    prevArtistId = 23;
  }
  currentArtist = artists.get(prevArtistId);
  loadArtist();
});

document.querySelector('.artist__action-next').addEventListener("click", function() {
  prevArtistId = (currentArtist.id + 1) % 24;
  currentArtist = artists.get(prevArtistId);
  loadArtist();
});

for (var i = 0; i < termLinks.length; i++) {
  termLinks[i].addEventListener("click", function() {
    myScroll.disable();
    document.querySelector('.terms-popup').classList.remove("visually-hidden");
  });
}

document.querySelector('.artist__action-exit').addEventListener("click", function() {
  myScroll.enable();
  artist.classList.add('visually-hidden'); //    artist.style.display = 'none';;
  this.style.display = 'none';
  currentArtist = undefined;
  closeMobileNav();
});

document.querySelector('.terms__action-exit').addEventListener("click", function() {
  myScroll.enable();
  document.querySelector('.terms-popup').classList.add("visually-hidden");
});


if (scrollLinks) {
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", scroll);
  }
}

function closeMobileNav() {
  toggleButton.classList.remove('filter_white')
  mobileNav.classList.add("visually-hidden");
  sectionTitle.style.opacity = 1;
  modalPopup.style.animationName = 'animate_background_out';
  setTimeout(function() {
    modalPopup.classList.add("visually-hidden"); 
  },200)
}

function scroll(event) {
  
  closeMobileNav();
  toggled = !toggled;
   // The animation easing could be: quadratic, circular, back, bounce, elastic.
  var targetName = this.getAttribute("href");
  var target = document.querySelector(targetName);
  myScroll.scrollToElement(target,3000,0,0,IScroll.utils.ease.quadratic);
  event.preventDefault();
}

var lastToggled = undefined;
function toggleItems(event) {

  if (lastToggled == this) {
    if (this.classList.length == 1 && this.classList.contains('alternate')) {
      expandItem(this);
    } else if (this.classList.length != 0) {
      unexpandItem(this);
    } else {
      expandItem(this);
    }
  } else if(lastToggled != undefined) {
    unexpandItem(lastToggled);  
    expandItem(this);
  } else {
    expandItem(this);
  }
  lastToggled = this;
}

function expandItem(item) {
  if (item.classList.contains('alternate')) {
    item.classList.add('yellow-underline');
  } else {
    item.classList.add('salmon-underline');
  }

  item.innerText = item.innerText.slice(0, -1) + '-';
  item.nextElementSibling.classList.remove('visually-hidden');
}

function unexpandItem(item) {
    if (item.classList.contains('alternate')) {
      item.classList.remove('yellow-underline');
    } else {
      item.classList.remove('salmon-underline');
    }
  item.innerText = item.innerText.slice(0, -1) + '+';
  item.nextElementSibling.classList.add('visually-hidden');
}


if (infoSections) {
  for (var i = 0; i < infoSections.length; i++) {
    infoSections[i].addEventListener("click", toggleItems);
  }
}

if (modalButton) {
  
  modalButton.addEventListener("click", closeModal);
}

if (soundButton) {
  soundButton.addEventListener("click", toggleSound);
}

function toggleSound() {
  if (audioOn) {
    soundButton.src = "images/sound_off.svg"
    document.getElementById("audio").pause();
  } else {
    soundButton.src = "images/sound_on.svg"
    document.getElementById("audio").play();
  }
  audioOn = !audioOn;
}

function closeModal() {
  if (modal) {
    
    modal.style.display = 'none';
    header.style.visibility ="visible";
    footer.style.visibility = "visible";
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.visibility = "visible"
    }
  }
}

function openModal() {
  modalPopup.classList.remove("visually-hidden");
  modalPopup.style.animationName = 'animate_background_in';
}

toggleButton.addEventListener("click", function() {
  if (!toggled) {
    toggleButton.classList.add('filter_white')
    mobileNav.classList.remove("visually-hidden");
    document.querySelector(".artist__action-exit").style.display = 'none';
    sectionTitle.style.opacity = 0;
    currentArtist = undefined;
    openModal()
  } else {
    closeMobileNav();
  }
  toggled = !toggled;
});


window.addEventListener('load', function() { 
  document.querySelector(".modal-acknowledgment__actions").classList.remove("loader");
  document.querySelector(".modal-acknowledgment__action").style.opacity = 1;
});

document.addEventListener('touchstart', function (e) {
  if(e.touches.length > 1) {
      myScroll.disable();
  }
});

document.addEventListener('touchend', function (e) {
  if (artist.classList.contains('visually-hidden')) {
    myScroll.enable();
  }
});
