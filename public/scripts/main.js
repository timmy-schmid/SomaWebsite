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
var audio = document.getElementById("audio");

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

/* VIDEO OBSERVERS */
var vids = document.querySelectorAll("video");

function vid_callback(entries, observer) {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
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

document.addEventListener('touchstart', function (e) {
  if(e.touches.length > 1) {
      myScroll.disable();
  }
});

document.addEventListener('touchend', function (e) {
  myScroll.enable();
});

/* ARTIST DATA AND MANIPULATION */
let artistSection = document.querySelector('.artist-list');

var artists = new Map();

function joinArtistURL(artistURL) {
 return "https://res.cloudinary.com/dlvxse9ly/image/upload/c_fill,h_580,w_1080/" + artistURL;
}

artists.set(0,{id:0,
               name: 'Acopia',
               type: '(LIVE)',
               bio:"Acopia invite listeners to open their hearts and sink into their feelings, into a hazy dreamworld of sultry vocals, pensive synthesis, & smouldering basslines. The Naarm/Melbourne-based trio of Kate Durman (Purient), Lachlan McGeehan (Liluzu) & Morgan Wright, have crafted a collection of slow-burn anthems that rest in a fever dream between trip-hop, dream pop & downtempo. Conjuring the bedroom intimacy of their records effortlessly live, they softly lull listeners to dive into the sentimentality of past memories while forming new ones, together.", 
               image: joinArtistURL('v1687322243/soma/Acopia_02_lu1vbp.png'),
               sc: 1200653452})

artists.set(1,{id:1,
               name: 'akka',
               bio:"Shareeka Helaluddin is an experimental artist, radio producer, DJ & community facilitator interested in the sonic, written word and collective organising; guided by a framework of anti-racism, radical hope and reciprocity. Creating under the pseudonym akka, she fuses voice memos, found-sounds, echoic compositions, and influences of her mixed-multifaith lineage. She uses soundscaping as a means to unhinge linear expectations of colonial form and knowledge - in the pursuit of divinity and connection.",
               image: joinArtistURL('v1686982353/soma/Akka_pg4oit.png'),
               sc: 1546987525})
               
artists.set(2,{id:2,
               name: 'Ben Fester',
               bio: "Ben Fester is a staple of the Eora/Sydney electronic scene, with one of the most the most considered and extensive record collections. He has run the revered Heavenly parties for the last 10 years, having hosted Priori, Detroit in Effect, Bjorn Torske, Roza Terenzi and more, whilst also supporting the likes of Omar S, the Sex Tags crew, Marcellus Pittman, Ben UFO, Kyle Hall and Move D. The depths of his musical knowledge never cease to surprise, so expect the unexpected.",
               image: joinArtistURL('v1687322250/soma/Ben_Fester_wvm105.png'),
               sc: 1111704550})

artists.set(3,{id:3,
               name: 'Cured Pink',
               type: '(LIVE)',
               bio:"After a 7-year hiatus, Meanjin/Brisbane four-piece Cured Pink return for their first shows since the release of Current Climate (2020, Rough Skies Records; ever/never records). As a shorthand, critics have described the group with terms such as 'dub-centric post-punk', 'swamping brain-rattling spoken rants', 'perpetual state of falling apart', 'cultic caveman nod-outs' and 'one of the best records of the last decade'. We can’t wait for Cured Pink to return to the stage for Soma.",
               image: joinArtistURL('v1687447302/soma/Cured_Pink_02_c7hxx2.png'),
               sc: 214598605})

artists.set(4,{id:4,
               name: 'Darcy Justice',
               bio:"Bringing tranquillity to the booth, Naarm-based Darcy Justice has the opposite effect on any dancefloor. Butter Sessions staple, Bait Shop monger and host of RRR’s ‘Moody’, Darcy moves effortlessly between genres with a masterful touch. From R&B to rave, slow-mo-techno to soul, her presence and palette are one of a kind. After making an impeccable debut at Meredith Festival 2022, we can’t wait to move with D.J at Soma.",
               image: joinArtistURL('v1687322364/soma/Darcy_Justice_psegjp.png'),
               sc: 1407247069})

artists.set(5,{id:5,
                name: 'D-Grade & imbi',
                type: '(HYBRID)',
                bio:"D-Grade is a DJ and organiser. imbi is a vocalist, poet, and mystic. Both are dancefloor-frequenters and good friends based on Gadigal land. D-Grade is inspired by frenetic, unpredictable, bossy, emotive and beautiful sounds - ‘serious’ music with a light-hearted approach. imbi integrates experiential dancefloor energy work and rave-space spirituality with word-smithery and voice. Together they aim to facilitate a playful and expansive exchange, feeling and responding to the movements of each moment they share.",
                image: joinArtistURL('v1687405240/soma/D-Grade_imbi_03_efpops.png'),
                sc: 1095990151})
 
artists.set(6,{id:6,
               name: 'DJ Paramat',
               bio:"DJ Paramat’s curations range from ambient, dub and downtempo to obscure club & bass. He consistently endeavours to offer a new flavour, and share a new pocket of musical knowledge with each set. You may find him fill-in presenting on community FM radio station FBi, or offering a wider range of sounds on his monthly Nomad Radio show ‘All Purpose’. He is also the co-founder of events & netlabel General Merchant, promoting local music makers and hosting forward-thinking dance events across Eora.",
               image: joinArtistURL('v1686982355/soma/Dj_Paramat_u3lfns.png'),
               sc: 1504499671})

artists.set(7,{id:7,
               name: 'Emelyne',
               bio:"Emelyne is an active force within Naarm’s vibrant music scene. Her one-of-a-kind energy and enthusiasm around music bring people together. Emelyne’s diverse array of mixes exhibit her passion and natural craft, each mix in its own dimension, known for taking you through sonic spaces where listeners can plunge into for hours. She’s a sucker for the sweetest slow jams, the deepest darkest low-end frequencies, largely influenced by sound system culture with roots in jazz and punk.",
               image: joinArtistURL('v1686982352/soma/Emelyne_bm5abf.png'),
               sc: 1128361369})

artists.set(8,{id:8,
               name: 'Facta & K-Lone',
               country: '(UK)',
               bio:"We’re thrilled to have Bristol-based, Wisdom Teeth label heads Facta & K-Lone grace Australian shores for Soma 2023. Since its inception in 2014, the label has grown to become a globally recognised & respected imprint, releasing contemporary club music, experimental, ambient and downtempo from a roster of leading innovators including Tristan Arp, Lurka, Parris, Simo Cell & Hodge. With an adventurous palette, together their mixes seamlessly traverse genres, tempos, textures & moods, leaning both into and back out of the London & Bristol-centric styles of their past and present hometowns.",
               image: joinArtistURL('v1687447286/soma/Facta_K-Lone_zssz28.png'),
               sc: 1327093297})

artists.set(9,{id:9,
               name: 'Genie',
               bio:"Genie is an artist living on Ngunawal/Ngunnawal/Ngambri land. Part nail salon/part DJ/part promoter, Genie’s work aims to support and embrace community. Her mixes traverse through eclectic and ethereal soundscapes, stretching to the edges of emotion whilst pulling on a familiar thread of comfort. Genie runs long-standing party and mix series, Orbit, which has recently hosted the likes of Ehua, CS & Kreme & DJ Swisha.",
               image: joinArtistURL('v1687322263/soma/Genie_uzdngx.png'),
               sc: 1125552376})

artists.set(10,{id:10,
                name: 'ioki',
                type: '(LIVE)',
                bio:"ioki is a multi-disciplinary artist, creating things with sound and other materials, working primarily on unceded Ngunnawal and Ngambri land. Their mixes and sound works are a warm embrace - ebbing and flowing delicately through imagined landscapes; sounds often colliding in maximalist, post-club, euphoric wonder, against a bed of ambient textural organics. Deeply committed to community, ioki developed the [portal] collective, which operates as a freelance creative agency fulfilling a broad schedule of diverse and inclusive music+arts related events.",
                image: joinArtistURL('v1687322268/soma/ioki_f2lbxl.png'),
                sc: 1503579088})

artists.set(11,{id:11,
                name: 'Jossy Mitsu',
                country: '(UK)',
                bio:"Birmingham-born, now London-based Jossy Mitsu is known for her ability to shell down any club, whether that’s rinsing out a twisted concoction of sweaty House, Techno and left-field club heaters, firing heavy-weight Rave and Jungle sets, or serenading you with her 2-step vinyl collection. Alongside holding down Rinse & Fabric residencies, Jossy has DJ’d across Europe & the UK, at the likes of Dekmantel, Glastonbury, The Warehouse Project & Dimensions. We couldn’t be more chuffed to be hosting Jossy for her debut Australia tour.",
                image: joinArtistURL('v1687447289/soma/Jossy_jomgff.png'),
                sc: 1348221640})

artists.set(12,{id:12,
                name: 'Mike Midnight',
                bio:"Boorloo/Perth-based Mike Midnight is a producer and DJ with a deep love and encyclopaedic knowledge of music, with recent releases independently and via Pure Space, Pneumatic, Theory Therapy and Index Records imprints. His mixes are both technically sharp and emotionally resonant, spanning R&B, breakbeat, techno, global club constructions and beyond. Mike has an uncanny ability to connect, with his DJ sets being described as an ‘improvised yet collaborative process with the audience.’ A musical mosaic awaits us.",
                image: joinArtistURL('v1687322414/soma/Mike_Midnight_02_cxokpr.png'),
                sc: 1276578838})

artists.set(13,{id:13,
                name: 'Moopie',
                bio:"Weaving different eras, crossing genre boundaries and tirelessly connecting artists from bourgeoning micro-scenes, Naarm-based Moopie stands out as a uniquely creative force. Moopie is a specialist DJ, label boss of A Colourful Storm and a singular voice within contemporary electronic music. The sharing of musical discovery remains at his core. Developing his sound and playing at festivals (Dekmantel, Nachtigital, Pitch) and clubs (Berghain Kantine, Tresor, Globus) along the way, Moopie’s  sets are a journey through time, space & emotion - sure to keep you moving.",
                image: joinArtistURL('v1687322273/soma/Moopie_xgfqit.png'),
                sc: 1115006746})

artists.set(14,{id:14,
                name: 'Nat James',
                bio:"Eora-based Nat James’s ear for the uncanny is unequalled, drawing threads between experimental & abrasive sounds that bring them into rich and vivid tapestries. Unlikely to draw from the same well twice, you can always expect something truly special. Over the years, Nat has supported the likes of HTRK, Lena Willikens, DJ Marfox & Nazira, played host to ZULI and Giant Swan under Headroom, and her monthly slot on Bristol's Noods Radio left a hole in our hearts when it faded away during the COVID lockdowns.",
                image: joinArtistURL('v1687322526/soma/Nat_James_e3qzl9.png'),
                sc: 825584272})

artists.set(15,{id:15,
                name: 'Natalia',
                bio:"Natalia is a DJ & Radio Host. With her weekly show 'spoil' on FBi Radio, Natalia places a focus on discovering & profiling new experimental music, with a focus on the emotive and connecting the unexpected. She has to her name a string of headline shows & festival appearances, as well as support slots for the likes of Objekt, Park Hye Jin & Roza Terenzi. In 2018, Natalia co-founded NECTAR, an events, booking and touring agency with a focus on elevating developing DJs and live electronic artists.",
                image: joinArtistURL('v1687322451/soma/Natalia_02_ol6ekx.png'),
                sc: 976660927})

artists.set(16,{id:16,
                name: 'salllvage',
                type: '(LIVE)',
                bio:"salllvage (Rowan Savage) is a proud Kombumerri man, living on Wangal Land. He is an experimental producer and DJ working at the intersection of queer club culture and connection with Country. His work mutates on-Country field recordings into electronica, and inhabits and bridges the tensions between abstraction and emotion, the wild bush and the dancefloor, the personal and the social, authenticity and reconstruction.",
                image: joinArtistURL('v1687322555/soma/salllvage_01_etsgqc.png'),
                sc: 1252600033})

artists.set(17,{id:17,
                name: 'Setwun',
                bio:"Setwun explores and maneuverers through the many trajectories of soul, jazz, psych and electronic forms of music. A nod to the past with visions of the future. After a string of releases through CoOp Presents, Mandarin Dreams, OTIS, Rhythm Section and Moonshoe, Setwun toured the UK / EU in 2022 with a run of shows including We Out Here Festival, Ronnie Scotts, The Jazz Cafe,  Berlin’s XJAZZ Fest as well as NTS and Worldwide FM guest spots and interviews.",
                image: joinArtistURL('v1687322563/soma/Setwun_02_bv4fvu.png'),
                sc: 1454733796})

artists.set(18,{id:18,
                name: 'Tangela',
                bio:"DJ, radio host & co-founder of party collective dstreet & event series club <, Tangela’s name has become synonymous with the growth of Sydney/Eora’s ever-blossoming dance communities. Focusing on depth, bass-heavy rhythms, and the stripped-back & deeper shades of techno, trance, idm, Tangela plays across genres & tempos in unexpected ways, telling stories through intricate soundscapes. Tangela’s style pushes the sound for which Australia has become so known, and she’ll be joining Soma fresh off the back of her debut EU tour.",
                image: joinArtistURL('v1687405268/soma/Tangela_01_ejie17.png'),
                sc: 1374753175})

artists.set(19,{id:19,
                name: 'Tim Boyd',
                bio:"Tim Boyd is a DJ and record collector living on Ngunnawal/Ngambri land. Diving and gliding through his enviable collection of house music (and its derivatives), Tim’s mixes are a deeply considered journey, rolling through the often unknown yet nostalgic. Tim also ran Eora/Sydney-based record label Black Wattle, which grew from a healthy diet of sunsets, friends and a shared love of electronic music, with releases from Thomas Gray, Liam Ebbs and Matthew Hayes.",
                image: joinArtistURL('v1687360515/soma/Tim_Boyd_atfdy9.png'),
                sc: 1163944780})

artists.set(20,{id:20,
                name: 'Yikes',
                bio:"Panar [bun-nah]: Look Out!</br>Known for his genre versatility and uncapped talent, Yikes (Maduwongga & Wongi) is a staple in the Boorloo community, and continues to lay the groundwork for himself and others locally. He has taught and developed up-and-coming First Nations Artists under his agency Nani and in collaboration with Netwerxx, and has recently performed for Boiler Room, Inner Varnika and Pitch Music & Arts Festival and supported the likes of KushJones, DJ N*gga Fox and Wax o’ Paradiso.",
                image: joinArtistURL('v1687322477/soma/Yikes_oksuhd.png'),
                sc: 1422003994})

//Artist Popup Functionality
var artistMobile = document.querySelectorAll(".artist")[0];
var artistDesktop = document.querySelectorAll(".artist")[1];
var modalArtists = document.querySelector(".modal-artists");
var artistButtons = document.querySelectorAll("#artists h2");

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
    var text = "";
    for (let i = 0; i < this.firstChild.childNodes.length; i++) {
      let node = this.firstChild.childNodes[i];
      if (node.nodeType  === Node.TEXT_NODE) {
          text += node.data;
      }
    } 
    currentArtist = findArtistByName(text);
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
  document.querySelector('.artist__base_img').classList.add('visually-hidden');
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
      prevArtistId = 20;
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

//Mobile Nav Functionality
var mobileNav = document.querySelector(".mobile-nav");
var modalPopup =  document.querySelector(".modal-popup");
var mobileNavItems = document.querySelectorAll(".mobile-nav__item a");
var toggleButton = document.querySelector(".toggle-button");
var toggled = false;

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

  item.innerHTML = item.innerText.slice(0, -1) + '<span>-</span>';
  item.nextElementSibling.classList.remove('visually-hidden');
  item.nextElementSibling.classList.remove('visually-hidden');
}

function unexpandItem(item) {
    if (item.classList.contains('alternate')) {
      item.classList.remove('yellow-underline');
    } else {
      item.classList.remove('salmon-underline');
    }
  item.innerHTML = item.innerText.slice(0, -1) + '<span>+</span>';
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
    audio.pause();
    audioCredit.style.opacity = 0;
  } else {
    audioCredit.style.opacity = 1;
    soundButton.src = "images/sound_on.svg"
    audio.play();
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
    setTimeout(function () {
      document.querySelector(".scroll-prompt").style.opacity = 0;
    }, 8000);
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
    artistMobile.classList.add('visually-hidden');
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