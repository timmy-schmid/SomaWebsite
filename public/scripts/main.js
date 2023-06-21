var scroller = document.querySelector("#scroller");
var brand = document.querySelector(".mobile-nav__brand img");
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
var audioCredit = document.querySelector(".audio-credit");


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
  //var observers = [];
  for (var i = 0; i < targets.length; i++) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targets[i]); 
    //observers.push({obs: new IntersectionObserver(callback, options),target:targets[i]});
  } 
  //return observers;
}
createObserver(sections, callback);
//var observers = createObserver(sections, callback);

/*
function resumeObservers() {
  for (var i = 0; i < observers.length; i++) {
    observers[i].obs.observe(observers[i].target);
    console.log(observers[i]);
  }
}

function pauseObservers() {
  for (var i = 0; i < observers.length; i++) {
    observers[i].obs.unobserve(observers[i].target);
  } 
}*/
//resumeObservers();
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
    //myScroll.on('scrollStart', pauseObservers);
    //myScroll.on('scrollEnd', resumeObservers);
}

document.addEventListener('touchstart', function (e) {
  if(e.touches.length > 1) {
      myScroll.disable();
  }
});

document.addEventListener('touchend', function (e) {
  myScroll.enable();
});


/*artist stuff */
let artistSection = document.querySelector('.artist-list');
function loadArtistDOM(value,key,map) {
    const heading = document.createElement("h3");
    const link = document.createElement("a");
    const node = document.createTextNode(value.name);
    heading.appendChild(link);
    link.appendChild(node);
    artistSection.appendChild(heading);
}

var artists = new Map();

function joinArtistURL(artistURL) {
 return "https://res.cloudinary.com/dlvxse9ly/image/upload/c_fill,h_580,w_1080/" + artistURL;
}


artists.set(0,{id:0,
               name: 'Acopia (LIVE)',
               bio:"50 words dolor sit amet, consectetur adipiscing elit. Phasellus eu magna sodales, iaculis ex nec, finibus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut finibus et ligula gravida suscipit. Nulla auctor tempor elit, vitae ornare velit viverra ut. Nulla tristique ligula et nulla.", 
               image: joinArtistURL('v1687322243/soma/Acopia_02_lu1vbp.png'),
               sc: 1202126179})

artists.set(1,{id:1,
               name: 'akka',
               bio:"60 words dolor sit amet, consectetur adipiscing elit. Phasellus est urna, pulvinar in blandit eu, consequat lacinia turpis. Nulla facilisi. Vivamus volutpat nisi vel aliquam convallis. Etiam sed est sit amet ipsum varius faucibus at vitae ligula. Nulla laoreet feugiat tristique. Nullam vitae arcu sit amet elit porta malesuada. Praesent sit amet turpis et turpis congue tincidunt. Vestibulum dolor augue.",
               image: joinArtistURL('v1686982353/soma/Akka_pg4oit.png'),
               sc: 1231299577})

artists.set(2,{id:2,
               name: 'Ben Fester',
               bio:"70 words dolor sit amet, consectetur adipiscing elit. Cras eget maximus neque, vitae dignissim velit. Ut ut hendrerit enim. Praesent vel leo ipsum. Nullam et semper elit. Nunc dolor urna, accumsan eu lectus sed, accumsan imperdiet odio. Sed rhoncus nunc sed accumsan placerat. Nunc vel orci tempus, commodo justo tempus, volutpat tortor. Morbi maximus urna diam, semper lacinia metus luctus vel. Pellentesque at enim mauris. Quisque convallis a lorem a.",
               image: joinArtistURL('v1687322250/soma/Ben_Fester_wvm105.png'),
               sc: 1231299577})

artists.set(3,{id:3,
               name: 'Cured Pink (LIVE)',
               bio:"Rhythm. Sound. Musical histories of Jamaica and the UK provided in illusive, spaced out trips. Pulling from all corners of dub, jungle, bass and beyond, Ryan Hunter (Midnight Tenderness) and Rory McPike (Rings Around Saturn) will have no issues getting us where we need to go.",
               image: joinArtistURL('v1687238971/soma/Cured_Pink_lksmz1.png'),
               sc: 1231299577})

artists.set(4,{id:4,
               name: 'D-Grade & imbi (HYBRID)',
               bio:"The powerhouse duo of Rainbow Chan (also Chunyin) and Alex Ward (Moon Holiday) offer a brash, irreverent and unpretentious DIY delivery of pop leaning electro soundscapes. Effortless and intimate, driven by ethic, immune to bullshit.",
               image: joinArtistURL('v1687360488/soma/D-Grade_imbi_01_ivutba.png'),
               sc: 1231299577})

artists.set(5,{id:5,
               name: 'Darcy Justice',
               bio:"Sydney’s favourite do has been shouting out loud his local scene through his co-run label Ken Oath and party series Rimbombo, as well as his new label and radio program, Best Effort (Sky Lounge). A superior digger and mood setter. Pulling from all corners, he can set almost any scene.",
               image: joinArtistURL('v1687322364/soma/Darcy_Justice_psegjp.png'),
               sc: 1231299577})

artists.set(6,{id:6,
               name: 'DJ Paramat',
               bio:"It’s rare to leave a Fabrics set without feeling as though you’ve delved into some sort of lowkey existential pondering. Their emotionally charged sets, full of pulsing, textural progressions, offer a consistent energy and pace that pull you along with it, no questions asked.",
               image: joinArtistURL('v1686982355/soma/Dj_Paramat_u3lfns.png'),
               sc: 1231299577})

artists.set(7,{id:7,
               name: 'Emelyne',
               bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.",
               image: joinArtistURL('v1686982352/soma/Emelyne_bm5abf.png'),
               sc: 1231299577})

artists.set(8,{id:8,
               name: 'Facta & K-Lone (UK)',
               bio:"Fuelled by high energy, higher calibre selects, DJ Sarah and Georgia Bird display a defiant drive built on a deep appreciation of breaks, jungle and the tougher edge of the Motor City sound. Sliding through with Drexciyan precision, this pair loosen and transport dancefloors with relative ease. Non stop bop.",
               image: joinArtistURL('v1687241516/soma/Artist_Empty_oyahnq.png'),
               sc: 1231299577})

artists.set(9,{id:9,
               name: 'Genie',
               bio:"IV Drip is a Sydney based DJ who won’t be limited by genre bounds, but holds a high affiliation for glitchy electro and breaks. She’s a regular fixture in the Sydney rave scene and has played support for Delta Funktionen, Madam X and Nite Fleit.",
               image: joinArtistURL('v1687322263/soma/Genie_uzdngx.png'),
               sc: 1231299577})

artists.set(10,{id:10,
                name: 'ioki (LIVE)',
                bio:"Fuelled by high energy, higher calibre selects, DJ Sarah and Georgia Bird display a defiant drive built on a deep appreciation of breaks, jungle and the tougher edge of the Motor City sound. Sliding through with Drexciyan precision, this pair loosen and transport dancefloors with relative ease. Non stop bop.",
                image: joinArtistURL('v1687322268/soma/ioki_f2lbxl.png'),
                sc: 1231299577})

artists.set(11,{id:11,
                name: 'Jossy Mitsu (UK)',
                bio:"Nat James’ obsession with collecting records leans toward the left-field and experimental. Recent supports include Simo Cell and Moopie, as well as mixes for Apsis & Steeplejack that have only left us wanting more.",
                image: joinArtistURL('v1687241516/soma/Artist_Empty_oyahnq.png'),
                sc: 1231299577})
                
artists.set(12,{id:12,
                name: 'Mike Midnight',
                bio:"The powerhouse duo of Rainbow Chan (also Chunyin) and Alex Ward (Moon Holiday) offer a brash, irreverent and unpretentious DIY delivery of pop leaning electro soundscapes. Effortless and intimate, driven by ethic, immune to bullshit.",
                image: joinArtistURL('v1687322414/soma/Mike_Midnight_02_cxokpr.png'),
                sc: 1231299577})

artists.set(13,{id:13,
                name: 'Moopie',
                bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.",
                image: joinArtistURL('v1687322273/soma/Moopie_xgfqit.png'),
                sc: 1231299577})

artists.set(14,{id:14,
                name: 'Nat James',
                bio:"It’s rare to leave a Fabrics set without feeling as though you’ve delved into some sort of lowkey existential pondering. Their emotionally charged sets, full of pulsing, textural progressions, offer a consistent energy and pace that pull you along with it, no questions asked.",
                image: joinArtistURL('v1687322526/soma/Nat_James_e3qzl9.png'),
                sc: 1231299577})

artists.set(15,{id:15,
                name: 'Natalia',
                bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.",
                image: joinArtistURL('v1687322451/soma/Natalia_02_ol6ekx.png'),
                sc: 1231299577})

artists.set(16,{id:16,
                name: 'salllvage (LIVE)',
                bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.",
                image: joinArtistURL('v1687322555/soma/salllvage_01_etsgqc.png'),
                sc: 1231299577})

artists.set(17,{id:17,
                name: 'Setwun',
                bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.",
                image: joinArtistURL('v1687322563/soma/Setwun_02_bv4fvu.png'),
                sc: 1231299577})

artists.set(18,{id:18,
                name: 'Tangela',
                bio:"Recently joining forces having both released on Sydney’s Black Wattle, this pair knows how to map out a truly unique sonic journey. Traversing ambient jaunts with ethereal steps and overwhelming hypnosis, Tom & Liam will bring in the rise, Sunday morning.",
                image: joinArtistURL('v1687360510/soma/Tangela_p4miv9.png'),
                sc: 1231299577})

artists.set(19,{id:19,
                name: 'Tim Boyd',
                bio:"Always across all things experimental, Shoeb Ahmad (Tangents, Spartak, Agency) is hard to pin down. Consistently offering performances with a considered ambiance and subtle political urgency, Shoeb will be delivering a unique performance not to be missed.",
                image: joinArtistURL('v1687360515/soma/Tim_Boyd_atfdy9.png'),
                sc: 1231299577})

artists.set(20,{id:20,
                name: 'Yikes',
                bio:"Prepped for any occasion, and always on the textural tip. One of the masterminds behind the infamous Pickle crew out of Canberra, FB Perimeter knows how to put out a niche spread for the masses. Balanced for both the body and mind.",
                image: joinArtistURL('v1687322477/soma/Yikes_oksuhd.png'),
                sc: 1231299577})

artists.forEach(loadArtistDOM)


//Mobile Nav Functionality
var mobileNav = document.querySelector(".mobile-nav");
var modalPopup =  document.querySelector(".modal-popup");
var mobileNavItems = document.querySelectorAll(".mobile-nav__item a");
var toggleButton = document.querySelector(".toggle-button");
var toggled = false;

//Artist Popup Functionality
var artistMobile = document.querySelectorAll(".artist")[0];
var artistDesktop = document.querySelectorAll(".artist")[1];
var modalArtists = document.querySelector(".modal-artists");
var artistButtons = document.querySelectorAll("#artists h3");

for (var i = 0; i < artistButtons.length; i++) {
  artistButtons[i].addEventListener("click", loadArtistElement, clicked=true);
}
var currentArtist;

function findArtistByName (name) {
  for (const [key,value] of artists.entries()) { 
    if (name == value.name) {
      return value;
    }
  }
}

function loadArtistElement(event) {
  if (event || currentArtist === undefined) {
    currentArtist = findArtistByName(this.textContent)
  }

  if (window.innerWidth < 800) {
    openModal();
    document.querySelector(".artist__action-exit").style.display = "block"
    loadArtist(artistMobile,currentArtist);
  } else {
    loadArtist(artistDesktop,currentArtist);
  }
}

function loadArtist(artist,currentArtist) {
  artist.classList.remove('visually-hidden'); //  artist.style.display = 'flex';

  artist.querySelector('.artist__img').src = currentArtist.image;
  artist.querySelector('.artist__name').innerHTML = currentArtist.name;
  artist.querySelector('.artist__bio').innerHTML = currentArtist.bio;
  var sc_string = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + currentArtist.sc + '&color=%23283a97&inverse=true&auto_play=false&show_user=true';
  artist.querySelector('.artist__sc').src = sc_string;
  artist.querySelector('.artist__id').innerHTML = (currentArtist.id + 1) + "/21";
}


backButton = document.querySelectorAll(".artist__action-back");

for (let i = 0; i < backButton.length; i++) {
  backButton[i].addEventListener("click", function() {
    prevArtistId = currentArtist.id - 1
    if (prevArtistId == -1) {
      prevArtistId = 23;
    }
    currentArtist = artists.get(prevArtistId);
    loadArtistElement();
  });
}

nextButton = document.querySelectorAll(".artist__action-next");

for (let i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener("click", function() {
    prevArtistId = (currentArtist.id + 1) % 21;
    currentArtist = artists.get(prevArtistId);
    loadArtistElement();
  });
}


for (var i = 0; i < termLinks.length; i++) {
  termLinks[i].addEventListener("click", function() {
    myScroll.disable();
    document.querySelector('.terms-popup').classList.remove("visually-hidden");
  });
}

document.querySelector('.artist__action-exit').addEventListener("click", function() {
  artistMobile.classList.add('visually-hidden'); //    artist.style.display = 'none';;
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
    audioCredit.style.opacity = 0;
  } else {
    audioCredit.style.opacity = 1;
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
    //scroller.classList.add(".fade-in");
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
    artistMobile.classList.add('visually-hidden'); //   artist.style.display = 'none';
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


