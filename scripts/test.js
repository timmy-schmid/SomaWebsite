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
        startY: -2000,
    	startX: -4000,});
  }
  
  document.addEventListener('touchmove', function (e) { e.preventDefault(); }, isPassive() ? {
      capture: false,
      passive: false
  } : false);