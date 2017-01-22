;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xinwen" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.483379 513.628224m-508.819876 0a508.819876 508.819876 0 1 0 1017.639752 0 508.819876 508.819876 0 1 0-1017.639752 0Z" fill="#FE3D50" ></path>'+
      ''+
      '<path d="M512.483379 513.628224m-355.442485 0a355.442484 355.442484 0 1 0 710.884969 0 355.442484 355.442484 0 1 0-710.884969 0Z" fill="#F8E71C" ></path>'+
      ''+
      '<path d="M897.653665 807.643429H127.313093a25.440994 25.440994 0 0 1-25.440994-25.440994V245.060373a25.440994 25.440994 0 0 1 25.440994-25.440994h770.340572a25.440994 25.440994 0 0 1 25.440993 25.440994v537.148422a25.440994 25.440994 0 0 1-25.440993 25.440994z" fill="#FFFFFF" ></path>'+
      ''+
      '<path d="M923.113739 724.966559v44.521739c0 14.056149-11.384845 25.440994-25.440994 25.440994H127.319453c-14.056149 0-25.440994-11.384845-25.440993-25.440994v-44.521739c0 14.056149 11.384845 25.440994 25.440993 25.440994h770.353292c14.056149 0 25.440994-11.384845 25.440994-25.440994z" fill="#F0F2F1" ></path>'+
      ''+
      '<path d="M923.113739 245.022211v37.461864H101.87846v-37.461864c0-13.992547 11.384845-25.440994 25.440993-25.440994h770.353292c14.056149 0 25.440994 11.448447 25.440994 25.440994z" fill="#FFFFFF" ></path>'+
      ''+
      '<path d="M165.480944 638.657988h230.476323v168.521142H165.480944z" fill="#51E4C2" ></path>'+
      ''+
      '<path d="M157.040894 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561243 0 10.780621 10.780621 0 1 0-21.561243 0Z" fill="#FE3D50" ></path>'+
      ''+
      '<path d="M194.407354 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561242 0 10.780621 10.780621 0 1 0-21.561242 0Z" fill="#F8E71C" ></path>'+
      ''+
      '<path d="M231.773814 251.032646m-10.780621 0a10.780621 10.780621 0 1 0 21.561242 0 10.780621 10.780621 0 1 0-21.561242 0Z" fill="#51E4C2" ></path>'+
      ''+
      '<path d="M101.87846 282.484075h821.216198" fill="" ></path>'+
      ''+
      '<path d="M448.162186 346.086559h118.459628v17.490683H448.162186zM448.162186 409.689043h411.031056v17.490684H448.162186zM448.162186 473.291528h411.031056v17.490683H448.162186zM448.162186 638.657988h118.459628v17.490683H448.162186zM448.162186 702.260472h411.031056v17.490683H448.162186zM448.162186 765.862957h411.031056v17.490683H448.162186z" fill="#E8EDEB" ></path>'+
      ''+
      '<path d="M165.480944 346.086559h230.476323v230.476323H165.480944z" fill="#2283F6" ></path>'+
      ''+
      '<path d="M165.480944 556.903354h230.476323v19.659528H165.480944z" fill="#252528" ></path>'+
      ''+
      '<path d="M646.124919 537.949814H554.963478a19.080745 19.080745 0 0 0-19.080745 19.080745v0.445217a19.080745 19.080745 0 0 0 19.080745 19.080746h91.161441a19.080745 19.080745 0 0 0 19.080746-19.080746v-0.445217a19.080745 19.080745 0 0 0-19.080746-19.080745z" fill="#F8E71C" ></path>'+
      ''+
      '<path d="M836.932373 537.949814h-91.161441a19.080745 19.080745 0 0 0-19.080746 19.080745v0.445217a19.080745 19.080745 0 0 0 19.080746 19.080746h91.161441a19.080745 19.080745 0 0 0 19.080745-19.080746v-0.445217a19.080745 19.080745 0 0 0-19.080745-19.080745z" fill="#FE3D50" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
