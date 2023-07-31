// CREDITS
const clog = {
  time: 2000,
  style: 'padding: 8px 20px; font-family: sans-serif; border-radius: 20px; background: linear-gradient(135deg, #4271d7, #25c9d0); color: #fff',
  message: "MADE BY DF21",
  emoji: ["🤯", "🤪", "🧠", "☕", "✨", "🔥", "💊"],
  start: () => {
    setInterval(() => {
      console.clear();
      clog.i = (clog.i <= clog.emoji.length - 2) ? clog.i + 1 : 0;
      console.log('%c' + clog.message + " " + clog.emoji[clog.i], clog.style);
    }, clog.time)
  },
  i: 0
};
clog.start();

// STICKY HEADER
const state = {
  lastScroll: 0,
  headerScroll: 0
}

const header = document.querySelector('#nav-header')
const headerHeight = header.offsetHeight
// header.style.setProperty('--header-height', headerHeight)

function clamp(min, value, max) {
  return Math.max(min, Math.min(value, max))
}

function rafThrottle(fn) {
  let requestId = null
  let context
  let args

  function frameFunction() {
    fn.apply(context, args)
    requestId = null
  }

  function replacedFunction() {
    context = this
    args = arguments

    if (requestId === null) {
      requestId = requestAnimationFrame(frameFunction)
    }
  }

  Object.defineProperty(replacedFunction, 'cancel', {
    value() {
      cancelAnimationFrame(requestId)
      requestId = null
    }
  })

  return replacedFunction
}

function onScroll() {
  const currentScroll = window.scrollY
  const scrollDiff = currentScroll - state.lastScroll
  state.lastScroll = currentScroll  
  state.headerScroll = clamp(0, state.headerScroll + scrollDiff, headerHeight)
  const scrollRatio = state.headerScroll / headerHeight
  header.style.setProperty('--header-scroll-ratio', scrollRatio)
}

document.addEventListener('scroll', rafThrottle(onScroll), { passive: true });

// RIPPLE BUTTON
var macB = new Audio("https://assets.codepen.io/567707/audio-mac.mov");
function playMac() {
	macB.play();
}

var btn = document.querySelectorAll('.material');
btn.forEach(el => {
  el.style.position = 'relative';
  el.style.overflow = 'hidden';
  el.addEventListener('click', function(e) {
    var x = e.offsetX;
    var y = e.offsetY;

    var ripples = document.getElementsByClassName('ripple');

    if (ripples.length < 10) { // this restricts the user from creating lots of ripples
      var ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x+'px';
      ripple.style.top = y+'px';
      this.appendChild(ripple);

      setTimeout(function() {
        ripple.remove();
      }, 1000);
    }
  });  
})
  
ripple(".G-widget_item",{
  triggerExcept: "a.btn",
})
const sd = ripple(".btn",{
  background: "white"
})

$(document).ready(function () {
    var _openedMenu = "";
    //responsive menu icon click//
    $("#responsive-menu").click(function () {
      $("#responsive-admin-menu #menu").slideToggle();
    });
    //responsive menu icon click//
  
    //responsive remove style
    $(window).resize(function () {
      $("#responsive-admin-menu #menu").removeAttr("style");
    });
    //responsive remove style
  
    //sub menu open / close
    $("#menu a.submenu").click(function () {
      if (_openedMenu != "") {
        $("#" + _openedMenu)
          .prev("a")
          .removeClass("downarrow");
        $("#" + _openedMenu).slideUp("fast");
      }
      if (_openedMenu == $(this).attr("name")) {
        $("#" + $(this).attr("name")).slideUp("fast");
        $(this).removeClass("downarrow");
        _openedMenu = "";
      } else {
        $("#" + $(this).attr("name")).slideDown("fast");
        _openedMenu = $(this).attr("name");
        $(this).addClass("downarrow");
      }
      return false;
    });
    //sub menu open / close
});

//=== CUSTOM ===//
new kursor({
    // removeDefaultCursor: true,
    type: 1,
    color: 'rgba(200,145,54)'
    // el: '.myBox'
})

	
// PAGE TIMELOAD
//calculate the time before calling the function in window.onload
var beforeload = (new Date()).getTime();
function getPageLoadTime() {
    //calculate the current time in afterload
    var afterload = (new Date()).getTime();
    // now use the beforeload and afterload to calculate the seconds
    seconds = (afterload - beforeload) / 1000;
    a = document.getElementsByTagName('HTML')[0].outerHTML;
    b = a.length / 1024;
    c = Math.round(b);
    // Place the seconds in the innerHTML to show the results
    $("#load_time").text(' ' + seconds + 's (' + c + 'kb)');
}
window.onload = getPageLoadTime;