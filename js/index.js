var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    mainSVG = select('.mainSVG'),
    wholeGroup = select('.wholeGroup'),
    ballGroup = select('#ballGroup'),
    mainPath = nodeListToArray(selectAll('.mainPath')).reverse(),
    allBalls = selectAll('.ball'),
    ball = selectAll('.ball'),//nodeListToArray(allBalls).reverse(),
    offset = 0.04

TweenMax.set(ball, {
  transformOrigin:'50% 100%'
})

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(mainPath, {
  drawSVG:'1% 9%'
})

var tl = new TimelineMax({delay:1, repeat:0, repeatDelay:1, onComplete:function(){
tl.play(0);
}});
tl.staggerTo(mainPath, 1, {
  drawSVG:'24% 32%',
  ease:Expo.easeInOut
}, offset)
.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 1, {
  y:'+=120',
  ease:Bounce.easeOut 
},offset,'-=0.65')
.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 0.1, {
  scaleX:1.2,
  scaleY:0.8,
  ease:Power2.easeIn
  
},offset,'-=0.75')
.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 0.1, {
  scaleX:1,
  scaleY:1

},offset,'-=0.6')

.staggerTo(mainPath, 1, {
  drawSVG:'45.5% 53.5%',
  ease:Expo.easeInOut
}, offset)
.staggerTo('.ball', 1, {
  y:'+=120',
  ease:Bounce.easeOut
},offset,'-=0.65')
.staggerTo('.ball', 0.1, {
  scaleX:1.2,
  scaleY:0.8,
  ease:Power2.easeIn
  
},offset,'-=0.75')
.staggerTo('.ball', 0.1, {
  scaleX:1,
  scaleY:1

},offset,'-=0.6')

.staggerTo(mainPath, 1, {
  drawSVG:'68.5% 76.5%',
  ease:Expo.easeInOut
}, offset)
.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 1, {
  y:'+=120',
  ease:Bounce.easeOut
},offset,'-=0.65')

.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 0.1, {
  scaleX:1.2,
  scaleY:0.8,
  ease:Power2.easeIn
  
},offset,'-=0.75')
.staggerTo(nodeListToArray(selectAll('.ball')).reverse(), 0.1, {
  scaleX:1,
  scaleY:1

},offset,'-=0.6')
.staggerTo(mainPath, 1, {
  drawSVG:'90% 98%',
  ease:Expo.easeInOut
}, offset)
.staggerTo('.ball', 1, {
  y:'+=120',
  ease:Bounce.easeOut
},offset,'-=0.65')
.staggerTo('.ball', 0.1, {
  scaleX:1.2,
  scaleY:0.8,
  ease:Power2.easeIn
  
},offset,'-=0.75')
.staggerTo('.ball', 0.1, {
  scaleX:1,
  scaleY:1

},offset,'-=0.6')

.to(wholeGroup, tl.duration(), {
  y:'-=480',
  ease:Linear.easeNone
},'-='+tl.duration())

//ScrubGSAPTimeline(tl);

function nodeListToArray(list){
  
  return Array.prototype.slice.call(list);
}


/* TweenMax.set(mainSVG, {
  transformOrigin:'50% 50%',
  scaleY:-1,
  y:-600
}) */