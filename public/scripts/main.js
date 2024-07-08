var scroller = document.querySelector("#scroller");
var brand = document.querySelector(".mobile-nav__brand img");
var modal = document.querySelector(".modal-acknowledgment");
var header = document.querySelector(".main-header");
var footer = document.querySelector(".main-footer");
var modalButton = document.querySelector(".modal-acknowledgment__action");
var soundButton = document.querySelector(".toggle-music-mobile img");
var sections = document.querySelectorAll("section");
var sectionTitle = document.querySelector(".section_title");
var audioOn = false;
var scrollLinks = document.querySelectorAll(".scroll-link");
var infoSections = document.querySelectorAll("#info h3");
var termLinks = document.querySelectorAll(".terms-link");
var audioCredit = document.querySelector(".audio-credit");
var audio = document.getElementById("audio");

/* PAGE OBSERVERS */

function callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id == "home") {
        brand.style.opacity = 0;
        sectionTitle.style.opacity = 0;
        sectionTitle.innerHTML = "";
      } else {
        sectionTitle.innerHTML =
          entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1);
        sectionTitle.style.opacity = 1;
      }
    } else {
      if (entry.target.id == "home") {
        brand.style.opacity = 1;
      }
      sectionTitle.style.opacity = 0;
    }
  });
}

function createObserver(targets, callback) {
  const options = {
    root: null,
    threshold: 0,
  };
  for (var i = 0; i < targets.length; i++) {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(targets[i]);
  }
}
createObserver(sections, callback);

/* VIDEO OBSERVERS */
var vids = document.querySelectorAll("video");

home_logo = document.querySelector(".home-logo");
console.log(vids["home-logo"]);
function vid_callback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
      entry.target.currentTime = 0;
    }
  });
}

createObserver(vids, vid_callback);

/* ISCROLL SETUP */

var myScroll;
function loaded() {
  myScroll = new IScroll("#wrapper", {
    scrollX: true,
    scrollY: true,
    mouseWheel: true,
    freeScroll: true,
    startX: -2.5 * 1920,
    startY: -1 * 1080,
    zoom: false,
  });
}
document.addEventListener("touchstart", function (e) {
  if (e.touches.length > 1) {
    myScroll.disable();
  }
});

document.addEventListener("touchend", function (e) {
  myScroll.enable();
});

/* ARTIST DATA AND MANIPULATION */
let artistSection = document.querySelector(".artist-list");

var artists = new Map();

function joinArtistURL(artistURL) {
  return (
    "https://res.cloudinary.com/dlvxse9ly/image/upload/c_fill,h_580,w_1080/" +
    artistURL
  );
}

artists.set(0, {
  id: 0,
  name: "akka",
  bio: "akka is an experimental artist, radio producer, DJ and community facilitator interested in the sonic, written word and collective organising; guided by a framework of anti-racism, radical hope and reciprocity. Creating under the pseudonym akka, she fuses voice memos, found-sounds, echoic compositions, and influences of her mixed-multifaith lineage. She uses soundscaping as a means to unhinge linear expectations of colonial form and knowledge - in the pursuit of divinity and connection.",
  image: joinArtistURL("v1720416377/soma/Web_Artist_akka_njwyuu.png"),
  sc: 1546987525,
});

artists.set(1, {
  id: 1,
  name: "Amelia Holt",
  country: "(US)",
  bio: "Amelia Holt, one of Brooklyn’s most distinctive selectors, crafts DJ sets that transform dancefloors into culture-bending, otherworldly experiences. One may hear her play broken beats, deep high octane, fine and elegant dance, alt techno, sharp electro, and delusional krautrock – sometimes all in the same night. Amelia holds a residency at The Lot Radio and has played in NYC’s best venues including Nowadays, Sustain-Release & Dripping. Beyond the decks, Amelia curates music newsletter ‘In Your Dirty Ears’ and runs the party series ‘Honey Trap’.",
  image: joinArtistURL("v1720416378/soma/Web_Artist_Amelia_Holt_t0uvcp.png"),
  sc: 1820147427,
});
artists.set(2, {
  id: 2,
  name: "Anusha",
  bio: "Anusha’s pendulum can swing from heaving hours of the club to soundtracking your precious weekend mornings. As a rotating resident for Cousin’s morning show on FBi Radio ‘Limbs Akimbo’, she brings a gossamer, femme fatale spin on dub textures. Her mix series ‘Limerence Lounge’ is dedicated to a romance between strange and soft sounds.",
  image: joinArtistURL("v1720416379/soma/Web_Artist_Anusha_tmtvkr.png"),
  sc: 1810195095,
});
artists.set(3, {
  id: 3,
  name: "Cousin",
  bio: "Diving from starlit heights to ocean depths, Cousin’s echoes step through tempos and styles while summoning surreal sonic landscapes centred in spacious atmospherics, subterranean bass pressure and rhythmic hypnotisms. Hailing from so-called Australia, Cousin channels the local flora, infusing his work with their variegated vibrancy. Whether DJing a teeming warehouse party or conjuring up a mesmerising live set, Cousin’s versatility as an artist and fluency in navigating across different energy levels comes from a place of unrestrained imagination and otherworldly inspiration.",
  image: joinArtistURL("v1720416382/soma/Web_Artist_Cousin_sncdxq.png"),
  sc: 1361408572,
});

artists.set(4, {
  id: 4,
  name: "DJ Mistry",
  bio: "DJ Mistry is an Indian-born Eora/Sydney local, whose DJ sets traverse across a range of electronic music with an aim to spark intrigue, wonder and escapism on the dancefloor through untamed synths and varying rhythms. With an affinity to no genre in particular, DJ Mistry gravitates towards music that is deep, abrasive and cathartic, reflecting the absurdity of the world and the spirit of the individuals and the community who strive to maintain sanity within it.",
  image: joinArtistURL("v1720416386/soma/Web_Artist_DJ_Mistry_e6acn1.png"),
  sc: 1309115590,
});

artists.set(5, {
  id: 5,
  name: "DJ Mum",
  bio: "DJ Mum is a DJ and organiser based in Naarm/Melbourne. Whether it’s through her work for London-based label and mix series, Local Knowledge, or Naarm’s event-space and central community establishment, Miscellania, she is dedicated to championing sounds from across the bass spectrum - from jungle, to dub, dubstep, breaks, and leftfield bass. Expect woozy subs and glitched out drums, strung together by a certain kind of emotional catharsis she calls ‘teen angst’.",
  image: joinArtistURL("v1720416382/soma/Web_Artist_DJ_Mum_ud0mpa.png"),
  sc: 473221344,
});

artists.set(6, {
  id: 6,
  name: "DJ Paramat",
  bio: "DJ Paramat is a DJ, founder of events and net-label ‘General Merchant', co-host of Fbi Radio’s ‘Limbs Akimbo’ and an active member of the local DIY rave scene in Sydney. As an independent artist, DJ Paramat constantly endeavours to evolve his sound, sharing a new pocket of musical discovery with each set. He aims to challenge listeners and dancefloors by combining unlikely genres with technical proficiency, often layering multiple sounds to create something new and exciting.",
  image: joinArtistURL("v1720416390/soma/Web_Artist_DJParamat_yh0i5l.png"),
  sc: 1504499671,
});

artists.set(7, {
  id: 7,
  name: "Emelyne",
  bio: "Emelyne is an active force within Naarm’s vibrant music scene and her one-of-a-kind energy and enthusiasm around music brings people together. Emelyne’s diverse array of mixes exhibit her passion and natural craft, each mix in its own dimension, known for taking listeners through sonic spaces where they can plunge into for hours. She’s a sucker for the sweetest slow jams, the deepest darkest low-end frequencies, largely influenced by sound system culture with roots in jazz and punk.",
  image: joinArtistURL("v1720416400/soma/Web_Artist_Emelyne_ckvxqj.png"),
  sc: 1128361369,
});
artists.set(8, {
  id: 8,
  name: "Ex Ponto",
  type: "(LIVE)",
  bio: "After a decade of self-released albums with improvisation collective, Council of Elders, and experimental no-wave band, Wunderlust, Ex Ponto (Ivan Masic) released his debut solo album in 2019 via General Purpose Records. Titled Neka Neka, the LP is a homage to Bosnian poet Ivo Andrić, ex-Yugoslavian experimentalists of the 80s, and the thriving, late-night intellectualism of Belgrade’s Club 20/44. Whilst these influences remain, Ex Ponto’s 2022 release, In A Quarry… (Offen Music) constructs an alternative civilisation of grace, post-sarcasm and intuitive response.",
  image: joinArtistURL("v1720416401/soma/Web_Artist_ExPonto_l69mmi.png"),
  sc: 1745138508,
});
artists.set(9, {
  id: 9,
  name: "Genie",
  bio: "Genie is an artist living on Ngunawal/Ngunnawal/Ngambri land. Part nail salon/part DJ/part promoter, Genie’s work aims to support and embrace community. Her mixes traverse through eclectic and ethereal soundscapes, stretching to the edges of emotion whilst pulling on a familiar thread of comfort. Genie runs long-standing party and mix series, Orbit, which has hosted the likes of Ehua, CS & Kreme & DJ Swisha.",
  image: joinArtistURL("v1720416391/soma/Web_Artist_Genie_d7tliy.png"),
  sc: 1448780506,
});
https: artists.set(10, {
  id: 10,
  name: "Hysterical Love Project",
  type: "(LIVE)",
  bio: "Hysterical Love Project is the Naarm/Melbourne-based duo of Ike Zwanikken and Brooklyn Mellar. Hazy and hypnotic, their undercurrent of sludgy downtempo rhythms are shimmered with layers of melancholic guitar and moody late-night vocals. Their second album “Lashes” was released last year on the beloved LA-based Motion Ward, followed by a string of live shows across the US and Europe.",
  image: joinArtistURL("v1720416389/soma/Web_Artist_HystericalLove_x4hzzx.png"),
  sc: 1509733111,
});
artists.set(11, {
  id: 11,
  name: "Miscmeg",
  bio: "Miscmeg is a Naarm/Melbourne-based DJ and one-half of event series Vortex. Her sets are mood-driven, thoughtful, expansive deep dives into modes of ambient and tech house. Miscmeg has established herself as a versatile selector, equally adept in energising club settings as she is in creating moments of reflection for home listening. Her sense of curation and intentionality is special, and permeates through the sets she weaves.",
  image: joinArtistURL("v1720012709/soma/Miscmeg_Web_Artist_xdrbld.png"),
  sc: 1481566198,
});

artists.set(12, {
  id: 12,
  name: "OK EG",
  type: "(LIVE)",
  bio: "Composed of producers Matthew Wilson and Lauren Squire, OK EG’s strident sound melds rhythm, bass and analogue synth. Known for their hardware-based live sets, the pair spiral around unpredictable patterns and interlocking grooves, encapsulating the unhinged energy of the Melbourne underground. Their latest release, Rivulets - out now on Amsterdam based label Kalahari Oyster Cult - is a deep dive into peak-time rave hypnotism, heads-down mind trips and transportive otherworldly electronics.",
  image: joinArtistURL("v1720012709/soma/OKEG_Web_Artist_eaidai.png"),
  sc: 939790300,
});

artists.set(13, {
  id: 13,
  name: "Posm",
  type: "(LIVE)",
  bio: "Walking through the trees with heightened senses, Posm guides you through different landscapes with a sense of curiosity, playfulness and depth, blending the natural world with one they’ve constructed. A multi-genre melting pot, the group’s ability to shift from ambient to driven groove is a defining quality of their debut album, 'With the Birds'. Formed on a hilltop on Eora/Sydney’s Northern coastline, Posm’s sonic explorations have reached the airwaves in Europe and the UK and are now crystallising as a live act for the first time.",
  image: joinArtistURL("v1720416391/soma/Web_Artist_Posm_bnd8ba.png"),
  sc: 1609765311,
});
artists.set(14, {
  id: 14,
  name: "Setwun",
  bio: "Setwun explores and maneuverers through the many trajectories of soul, jazz, psych and electronic forms of music; a nod to the past with visions of the future. After a string of releases through CoOp Presents, Mandarin Dreams, OTIS, Rhythm Section and Moonshoe, Setwun toured the UK / EU in 2022 with a run of shows including We Out Here Festival, Ronnie Scotts, The Jazz Cafe, Berlin’s XJAZZ Festival as well as NTS and Worldwide FM guest spots and interviews.",
  image: joinArtistURL("v1720416378/soma/Web_Artist_Setwun_vdhrrd.png"),
  sc: 1454733796,
});

artists.set(15, {
  id: 15,
  name: "Shuko",
  bio: "SHU-KO! Flowing melodically and accented with a percussive click - a name reflective of the hybrid he is. As a DJ and Producer Shuko draws from his Southern African origins, combining them with an eclectic arsenal of global diasporic influences to bring an energetic drum-driven sound to the club. His style is one he describes as “weaving together the different lines of the conversation that is global club music - one that you can’t help but move to.”",
  image: joinArtistURL("v1720416406/soma/Web_Artist_Shuko_icvodp.png"),
  sc: 1838057517,
});
artists.set(16, {
  id: 16,
  name: "Suzu",
  bio: "An artist that resists classification, Suzu (previously ‘Lazy Suzan’) has been an integral part of Eora’s underground music scene since 2015. Viewing the DJ as an active participant in a wider conversation, she has developed a nuanced style over the years having played at renowned techno parties in Tokyo, open-air raves on Sinixt land in BC, Canada and festivals along Australia's east coast, as well as co-hosting monthly shows with Subaske on Nomad Radio as part of their project, Ear Contact.",
  image: joinArtistURL("v1720416399/soma/Web_Artist_Suzu_sfmrjg.png"),
  sc: 1797308932,
});
artists.set(17, {
  id: 17,
  name: "Tim Boyd",
  bio: "Tim Boyd is a DJ and record collector living on Ngunnawal/Ngambri land. Diving and gliding through his enviable collection of house music (and its derivatives), Tim’s mixes are a deeply considered journey, rolling through the often unknown yet nostalgic. Tim also ran Eora/Sydney-based record label Black Wattle, which grew from a healthy diet of sunsets, friends and a shared love of electronic music, with releases from Thomas Gray, Liam Ebbs and Matthew Hayes.",
  image: joinArtistURL("v1720416405/soma/Web_Artist_TimBoyd_ejf3ev.png"),
  sc: 1163944780,
});

artists.set(18, {
  id: 18,
  name: "umki",
  type: "(LIVE)",
  bio: "umki is a digital artist and contemporary composer, creating things with sound and other materials, working primarily on unceded Ngunnawal and Ngambri country. Their computer music compositions exist at a boundary between ambient and post-club crunch. Harnessing grains of found sound from deep corners of the web, their voice and field recordings, umki interrogates inner worlds, ebbing and flowing delicately through imagined landscapes. umki has programmed live events and supported the likes of Ana Roxanne (USA), Nai Palm, and Acopia. Their live sets intend a soft communion and invite stimmy ritual states.",
  image: joinArtistURL("v1720416406/soma/Web_Artist_umki_zdyufw.png"),
  sc: 1503579088,
});
artists.set(19, {
  id: 19,
  name: "Wingnut",
  bio: "Wingnut is the moniker of Gadigal-based DJ Liam Taylor. With a penchant for the nooks, crannies and margins of dance music, Wingnut splices screwball electronica, fleeting melodies and reckless drum programming with a dubwise sensibility - piecing together a murky psychedelia for the body and mind. Alongside Eora/Sydney stalwart D-Grade, Wingnut is also one half of ‘boof’, a semi-frequent (i.e. when they feel like it) DIY party held on Gadigal land that is devoted to all things left of field.",
  image: joinArtistURL("v1720441547/soma/Web_Artist_Wingnut_qwb2dp.png"),
  sc: 1805893230,
});
artists.set(20, {
  id: 20,
  name: "Yikes",
  bio: "Boorloo-based Wongi man Yikes is a multi-talented DJ, producer, radio presenter, artist, designer and promoter. Not one to stick to any genre, Yikes’ sets are known to glide through a variety, effortlessly, tied together with his signature style of deep, broken and percussive sounds. Through his contributions on RTRFM community radio, his First Nations DJ course for young musicians and his own creative agency, Nani Creative, he continues to lay the groundwork for others and tangibly fight back against the lack of diversity in creative industries.",
  image: joinArtistURL("v1720416396/soma/Web_Artist_Yikes_w5tkvz.png"),
  sc: 1760080026,
});
artists.set(21, {
  id: 21,
  name: "Yushh",
  country: "(UK)",
  bio: "Yushh’s dubbed-out, atmospheric compositions are unmistakable. They give the illusion of comprising infinite layers of sound; no eight-bar mimicking the last as if we’re listening to her experiment in real time. Her own label, Pressure Dome, showcases an intricate curation of homegrown, emerging talent and has hosted parties with the likes of Pariah, Rhyw, DJ Python and Ehua. Yushh has carved out a distinct space for her weird, wonky sound; at times drawing on influences across the hardcore continuum, and at others offering a gentle, contemplative respite.",
  image: joinArtistURL("v1720416402/soma/Web_Artist_Yussh_fe2v53.png"),
  sc: 1141022758,
});
//Artist Popup Functionality
var artistMobile = document.querySelectorAll(".artist")[0];
var artistDesktop = document.querySelectorAll(".artist")[1];
var modalArtists = document.querySelector(".modal-artists");
var artistButtons = document.querySelectorAll("#artists h2");

for (var i = 0; i < artistButtons.length; i++) {
  artistButtons[i].addEventListener(
    "click",
    loadArtistElement,
    (clicked = true)
  );
}
var currentArtist;

function findArtistByName(name) {
  for (const [key, value] of artists.entries()) {
    if (name == value.name) {
      return value;
    }
  }
}
currentArtist = findArtistByName("akka");
function loadArtistElement(event) {
  if (event || currentArtist === undefined) {
    var text = "";
    for (let i = 0; i < this.firstChild.childNodes.length; i++) {
      let node = this.firstChild.childNodes[i];
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.data;
      }
    }
    currentArtist = findArtistByName(text);
  }

  if (window.innerWidth < 800) {
    openModal();
    document.querySelector(".artist__action-exit").style.display = "block";
    loadArtist(artistMobile, currentArtist);
  } else {
    loadArtist(artistDesktop, currentArtist);
  }
}

function loadArtist(artist, currentArtist) {
  artist.classList.remove("visually-hidden"); //  artist.style.display = 'flex';
  artist.querySelector(".artist__img").src = currentArtist.image;
  artist.querySelector(".artist__name").innerHTML = currentArtist.name;
  artist.querySelector(".artist__bio").innerHTML = currentArtist.bio;
  var sc_string =
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
    currentArtist.sc +
    "&color=%23283a97&inverse=true&auto_play=false&show_user=true";
  artist.querySelector(".artist__sc").src = sc_string;
  artist.querySelector(".artist__id").innerHTML = currentArtist.id + 1 + "/22";
}

backButton = document.querySelectorAll(".artist__action-back");
console.log(backButton);
for (let i = 0; i < backButton.length; i++) {
  backButton[i].addEventListener("click", function () {
    prevArtistId = currentArtist.id - 1;
    if (prevArtistId == -1) {
      prevArtistId = 21;
    }
    currentArtist = artists.get(prevArtistId);
    loadArtistElement();
  });
}

nextButton = document.querySelectorAll(".artist__action-next");

for (let i = 0; i < nextButton.length; i++) {
  nextButton[i].addEventListener("click", function () {
    prevArtistId = (currentArtist.id + 1) % 22;
    currentArtist = artists.get(prevArtistId);
    loadArtistElement();
  });
}

//Mobile Nav Functionality
var mobileNav = document.querySelector(".mobile-nav");
var modalPopup = document.querySelector(".modal-popup");
var mobileNavItems = document.querySelectorAll(".mobile-nav__item a");
var toggleButton = document.querySelector(".toggle-button");
var toggled = false;

for (var i = 0; i < termLinks.length; i++) {
  termLinks[i].addEventListener("click", function () {
    myScroll.disable();
    closeMobileNav();
    document.querySelector(".terms-popup").classList.remove("visually-hidden");
  });
}

document
  .querySelector(".artist__action-exit")
  .addEventListener("click", function () {
    artistMobile.classList.add("visually-hidden"); //    artist.style.display = 'none';;
    this.style.display = "none";
    currentArtist = undefined;
    closeMobileNav();
  });

document
  .querySelector(".terms__action-exit")
  .addEventListener("click", function () {
    myScroll.enable();
    document.querySelector(".terms-popup").classList.add("visually-hidden");
  });

if (scrollLinks) {
  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", scroll);
  }
}

function closeMobileNav() {
  toggleButton.classList.remove("filter_white");
  mobileNav.classList.add("visually-hidden");
  sectionTitle.style.opacity = 1;
  modalPopup.style.animationName = "animate_background_out";
  setTimeout(function () {
    modalPopup.classList.add("visually-hidden");
  }, 200);
}

function scroll(event) {
  closeMobileNav();
  toggled = !toggled;
  // The animation easing could be: quadratic, circular, back, bounce, elastic.
  var targetName = this.getAttribute("href");
  var target = document.querySelector(targetName);
  myScroll.scrollToElement(target, 3000, 0, 0, IScroll.utils.ease.quadratic);
  event.preventDefault();
}

var lastToggled = undefined;
function toggleItems(event) {
  if (lastToggled == this) {
    if (this.classList.length == 1 && this.classList.contains("alternate")) {
      expandItem(this);
    } else if (this.classList.length != 0) {
      unexpandItem(this);
    } else {
      expandItem(this);
    }
  } else if (lastToggled != undefined) {
    unexpandItem(lastToggled);
    expandItem(this);
  } else {
    expandItem(this);
  }
  lastToggled = this;
}

function expandItem(item) {
  if (item.classList.contains("alternate")) {
    item.classList.add("yellow-underline");
  } else {
    item.classList.add("salmon-underline");
  }

  item.innerHTML = item.innerText.slice(0, -1) + "<span>-</span>";
  item.nextElementSibling.classList.remove("visually-hidden");
  item.nextElementSibling.classList.remove("visually-hidden");
}

function unexpandItem(item) {
  if (item.classList.contains("alternate")) {
    item.classList.remove("yellow-underline");
  } else {
    item.classList.remove("salmon-underline");
  }
  item.innerHTML = item.innerText.slice(0, -1) + "<span>+</span>";
  item.nextElementSibling.classList.add("visually-hidden");
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
    soundButton.src = "images/sound_off.svg";
    audio.pause();
    audioCredit.style.opacity = 0;
  } else {
    audioCredit.style.opacity = 1;
    soundButton.src = "images/sound_on.svg";
    audio.play();
  }
  audioOn = !audioOn;
}

function closeModal() {
  if (modal) {
    modal.style.display = "none";
    header.style.visibility = "visible";
    footer.style.visibility = "visible";
    console.log(home_logo);
    home_logo.currentTime = 0;
    home_logo.play();

    for (var i = 0; i < sections.length; i++) {
      sections[i].style.visibility = "visible";
    }

    setTimeout(function () {
      document.querySelector(".scroll-prompt").style.opacity = 0;
      setTimeout(function () {
        document.querySelector(".scroll-prompt").style.display = "none";
      }, 2000);
    }, 8000);
  }
}

function openModal() {
  modalPopup.classList.remove("visually-hidden");
  modalPopup.style.animationName = "animate_background_in";
}

toggleButton.addEventListener("click", function () {
  if (!toggled) {
    toggleButton.classList.add("filter_white");
    mobileNav.classList.remove("visually-hidden");
    artistMobile.classList.add("visually-hidden");
    document.querySelector(".artist__action-exit").style.display = "none";
    sectionTitle.style.opacity = 0;
    currentArtist = undefined;
    openModal();
  } else {
    closeMobileNav();
  }
  toggled = !toggled;
});

window.addEventListener("load", function () {
  document
    .querySelector(".modal-acknowledgment__actions")
    .classList.remove("loader");
  document.querySelector(".modal-acknowledgment__action").style.opacity = 1;
});
