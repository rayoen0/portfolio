/* crux's mark: "Ring that opens" (Rayane's pick, 6 Nov 2026; board: site-variants/keel-mark/board-v2.html).
   At rest the whole day: earlier blocks in taupe, the running block in orange, the white now-edge.
   Hover plays the start: the plate turns, then the camera dollies into the folded crook, the count seated in it.
   One drawing for the crux page (wordmark, top bar, favicon) and the home list. */
(function(G){
'use strict';
var KC={dark:{ground:'#14110D',track:'#2A2219',spent:'#55483A',ink3:'#776C5E',ink2:'#ABA091',ink:'#F4EEE4',hi:'#E3763F',dim:'#7B3A21',edge:'#FFFFFF'},
        light:{ground:'#F4EFE6',track:'#E8DFCE',spent:'#C9BAA1',ink3:'#9A8E79',ink2:'#6E6453',ink:'#211C15',hi:'#C4551F',dim:'#D8C6AC',edge:'#211C15'}};
function rad(a){return a*Math.PI/180;}
function P(r,a){return [r*Math.sin(rad(a)),-r*Math.cos(rad(a))];}
function f2(n){return Math.round(n*100)/100;}
function pt(p){return f2(p[0])+' '+f2(p[1]);}
function clamp01(x){return x<0?0:x>1?1:x;}
function seg(u,a,b){return clamp01((u-a)/(b-a));}
function lerp(a,b,t){return a+(b-a)*t;}
function eo(t){return 1-Math.pow(1-t,3);}
function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
function line(a,b,c,w,op,cap){return '<line x1="'+f2(a[0])+'" y1="'+f2(a[1])+'" x2="'+f2(b[0])+'" y2="'+f2(b[1])+'" stroke="'+c+'" stroke-width="'+f2(w)+'"'+(op!=null?' opacity="'+f2(op)+'"':'')+(cap?' stroke-linecap="round"':'')+'/>';}
function sw(px,base,minPx){return Math.max(base,(minPx||1.1)*220/px);}
/* a straight-edged band: the plate is folded every `fold` degrees, creases at rot + k*fold */
function polyR(rc,rot,fold,a){var rel=((a-rot)%fold+fold)%fold,mid=rel-fold/2;return rc*Math.cos(rad(fold/2))/Math.cos(rad(mid));}
function polyBand(r1,r2,rot,fold,a0,a1){
  if(a1-a0<.05)return '';
  var as=[a0],k=Math.floor((a0-rot)/fold)+1;
  for(var v=rot+k*fold;v<a1-1e-6;v+=fold)as.push(v);
  as.push(a1);
  var o=as.map(function(a){return P(polyR(r2,rot,fold,a),a);}),i=as.slice().reverse().map(function(a){return P(polyR(r1,rot,fold,a),a);});
  return 'M'+o.map(pt).join('L')+'L'+i.map(pt).join('L')+'Z';
}
function count(x,y,size,n,C){
  return '<text x="'+f2(x)+'" y="'+f2(y)+'" font-family="ui-rounded,\'SF Pro Rounded\',Nunito,-apple-system,sans-serif" font-weight="900" font-size="'+f2(size)+'" letter-spacing="'+f2(-size*.035)+'" fill="'+C.ink+'">'+n+
    '<tspan font-family="-apple-system,BlinkMacSystemFont,Helvetica,sans-serif" font-weight="500" font-size="'+f2(size*.24)+'" dx="'+f2(size*.06)+'" fill="'+C.ink2+'" letter-spacing="0">min</tspan></text>';
}
/* u = 0 the whole day, u = 1 the crook; Lm = minutes left; px = drawn size (small sizes get a bigger running block).
   Dollying in multiplies degrees per minute, so the folds (one per five minutes) appear as the camera arrives. */
var DPH1=150/32, DONE=[[-170,-128],[-112,-80],[-66,-34]];
function draw(u,Lm,C,px){
  if(typeof C==='string')C=KC[C];
  var small=px<48,turn=eo(seg(u,0,.25)),d=eio(seg(u,.19,1)),cut=eio(seg(u,.42,1));
  var EDGE=250+lerp(44,0,turn),dph=Math.exp(lerp(Math.log(small?2.4:1.6),Math.log(DPH1),d)),fold=5*dph;
  var W=small?lerp(30,46,d):lerp(24,32,d),rm=small?lerp(78,76,d):lerp(76,74,d),r1=rm-W/2,r2=rm+W/2;
  var before=lerp(180,120,cut),after=lerp(180,170,cut),lo=EDGE-before,hi=EDGE+after;
  var end=EDGE+Lm*dph,start=EDGE-(45-Lm)*dph,rot=end,s='';
  s+='<path d="'+polyBand(r1,r2,rot,fold,lo,hi)+'" fill="'+C.track+'"/>';
  DONE.forEach(function(b){var a0=EDGE+b[0]*dph,a1=EDGE+b[1]*dph;if(a1>lo)s+='<path d="'+polyBand(r1,r2,rot,fold,Math.max(a0,lo),a1)+'" fill="'+C.spent+'"/>';});
  s+='<path d="'+polyBand(r1,r2,rot,fold,Math.max(start,lo),EDGE)+'" fill="'+C.dim+'"/>';
  s+='<path d="'+polyBand(r1,r2,rot,fold,EDGE,Math.min(end,hi))+'" fill="'+C.hi+'"/>';
  if(!small&&fold>12){var k0=Math.ceil((lo-rot)/fold),op=seg(fold,12,20)*.55;
    for(var v=rot+k0*fold;v<hi;v+=fold){s+=line(P(polyR(r1,rot,fold,v),v),P(polyR(r2,rot,fold,v),v),C.ground,sw(px,1.6,.8),op);
      if(px>=160)s+=line(P(r2+4,v),P(r2+10,v),C.ink3,1.6,op/.55);}}
  s+=line(P(r1-(small?5:9),EDGE),P(r2+(small?4:9),EDGE),C.edge,sw(px,3.2,1.2),null,true);
  if(px>=160){var ca=seg(u,.55,.92);if(ca>0)s+='<g opacity="'+f2(ca)+'">'+count(-22,44,52,Math.ceil(Lm),C)+'</g>';}
  return s;
}

/* ---------- live marks (browser only) ---------- */
var live=[],raf=0;
function RM(){return !!(G.matchMedia&&G.matchMedia('(prefers-reduced-motion: reduce)').matches);}
function dark(){return !!(G.matchMedia&&G.matchMedia('(prefers-color-scheme: dark)').matches);}
function paint(m){var px=m.px||m.el.getBoundingClientRect().width||40;m.el.innerHTML=draw(m.u,32,m.theme?m.theme():(dark()?'dark':'light'),px);}
function tick(now){raf=0;var busy=false;
  live.forEach(function(m){if(!m.anim)return;var a=m.anim,k=clamp01((now-a.t0)/a.dur);
    m.u=lerp(a.from,a.to,a.to>a.from?k:eo(k));if(k>=1){m.u=a.to;m.anim=null;}else busy=true;paint(m);});
  if(busy)raf=requestAnimationFrame(tick);}
/* the start in 560 ms; back to the whole day in 350 ms. Reduced motion: the mark stays at rest. */
function play(m,on){if(RM()){m.u=0;m.anim=null;paint(m);return;}var to=on?1:0;if(m.u===to&&!m.anim)return;
  m.anim={from:m.u,to:to,t0:performance.now(),dur:on?560:350};if(!raf)raf=requestAnimationFrame(tick);}
/* el: an <svg viewBox="-110 -110 220 220">; opt.px fixes the drawn size, opt.theme returns 'dark' or 'light' */
function mount(el,opt){opt=opt||{};var m={el:el,u:0,anim:null,px:opt.px,theme:opt.theme};live.push(m);paint(m);return m;}
/* hover (or keyboard focus) on `box` plays the start on its marks; a tap toggles it on touch */
function bind(box,marks,opt){opt=opt||{};
  function all(on){marks.forEach(function(m){play(m,on);});}
  box.addEventListener('pointerenter',function(e){if(e.pointerType!=='touch')all(true);});
  box.addEventListener('pointerleave',function(e){if(e.pointerType!=='touch')all(false);});
  /* keyboard focus only: a script focusing the row after a click (the List opening) leaves the mark at rest */
  box.addEventListener('focusin',function(e){var v=true;try{v=e.target.matches(':focus-visible');}catch(x){}if(v)all(true);});
  box.addEventListener('focusout',function(){all(false);});
  if(opt.tap)box.addEventListener('pointerup',function(e){if(e.pointerType==='touch')all(!(marks[0].u>.5||(marks[0].anim&&marks[0].anim.to===1)));});
}
function repaint(){live.forEach(paint);}
if(G.matchMedia){var q=G.matchMedia('(prefers-color-scheme: dark)');q.addEventListener&&q.addEventListener('change',repaint);}
G.CruxMark={draw:draw,colors:KC,mount:mount,bind:bind,play:play,repaint:repaint};
})(typeof window!=='undefined'?window:globalThis);
