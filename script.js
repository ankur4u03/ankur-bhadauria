/* script.js - Ankur Bhadauria portfolio
   ============ EDIT THESE TWO LINES ============
   Paste your profile links between the quotes. Icons stay hidden until a link is set. */
const LINKEDIN_URL = "";   // example: "https://www.linkedin.com/in/your-name"
const GITHUB_URL   = "";   // example: "https://github.com/your-username"
/* ============================================== */

/* Page behaviour: reveal on scroll, counters, popups, contact form, background animation */
(function(){
document.documentElement.classList.add('js');
var rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var LINKEDIN=LINKEDIN_URL,GITHUB=GITHUB_URL;
document.querySelectorAll('[data-li]').forEach(function(a){if(LINKEDIN){a.href=LINKEDIN;a.hidden=false;}});
document.querySelectorAll('[data-gh]').forEach(function(a){if(GITHUB){a.href=GITHUB;a.hidden=false;}});
document.getElementById('yr').textContent=new Date().getFullYear();
var csend=document.getElementById('csend');
csend.addEventListener('click',function(){
  var f=[document.getElementById('cn'),document.getElementById('ce'),document.getElementById('cm')],ok=true,t=document.getElementById('cnote');
  f.forEach(function(x){var v=x.value.trim(),bad=!v||(x.type==='email'&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));x.setAttribute('aria-invalid',bad);if(bad)ok=false;});
  if(!ok){t.textContent='Please fill every field with a valid email.';return;}
  t.textContent='Opening your email app...';
  location.href='mailto:ankur4u03@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+f[0].value.trim())+'&body='+encodeURIComponent(f[2].value.trim()+'\n\n'+f[0].value.trim()+' ('+f[1].value.trim()+')');
});

/* dialog */
document.addEventListener('click',function(e){
  var o=e.target.closest('[data-open]');if(o){document.querySelectorAll('dialog[open]').forEach(function(d){d.close()});document.getElementById(o.dataset.open).showModal();return;}
  var c=e.target.closest('[data-close]');if(c){c.closest('dialog').close();return;}
  var cp=e.target.closest('[data-copy]');if(cp){try{navigator.clipboard.writeText(cp.dataset.copy).then(function(){cp.textContent='Copied'},function(){cp.textContent='Select text'});}catch(x){cp.textContent='Select text';}setTimeout(function(){cp.textContent='Copy'},1600);return;}
  if(e.target.tagName==='DIALOG')e.target.close();
});
document.getElementById('send').addEventListener('click',function(){
  var n=document.getElementById('fn').value.trim(),m=document.getElementById('fm').value.trim(),t=document.getElementById('note');
  if(!n||!m){t.textContent='Please add your name and a message.';return;}
  t.textContent='';location.href='mailto:ankur4u03@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n);
});
/* reveal + counters */
document.querySelectorAll('.rv').forEach(function(el){var i=Array.prototype.indexOf.call(el.parentNode.children,el);el.style.transitionDelay=Math.min(i,5)*70+'ms';});
function count(el){var n=+el.dataset.n,s=el.dataset.s;if(rm){el.textContent=n+s;return;}var t0=null;function f(t){if(!t0)t0=t;var k=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;if(k<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');(function(t){setTimeout(function(){t.classList.add('done');t.style.transitionDelay='0s';},1300);})(x.target);var b=x.target.querySelector('[data-n]');if(b)count(b);io.unobserve(x.target);}});},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
  var secs=document.querySelectorAll('main section'),ls=document.querySelectorAll('.links a');
  var so=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){ls.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+x.target.id)});}});},{rootMargin:'-45% 0px -50% 0px'});
  secs.forEach(function(s){so.observe(s)});
}else{document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in');var b=el.querySelector('[data-n]');if(b)b.textContent=b.dataset.n+b.dataset.s;});}
/* particles: one shared background system */
var cv=document.getElementById('bg'),cx=cv.getContext('2d'),W=0,H=0,dpr=1,mobile=innerWidth<700,fine=matchMedia('(pointer:fine)').matches;
var pts=[],cols=[],frs=[],sy=0,ty=0,mx=-999,my=-999,tmx=-999,tmy=-999,last=0,run=false,rid=0;
var TOK='0101101001*;{}%#<>=7391'.split(''),FR=['SELECT *','JOIN','GROUP BY','COUNT(*)','WHERE x > 0','WITH cte AS (','ORDER BY','SUM(sales)','LEFT JOIN','HAVING'];
function rnd(a,b){return a+Math.random()*(b-a);}
function build(){
  var N=mobile?26:68;pts=[];for(var i=0;i<N;i++)pts.push({x:rnd(0,W),y:rnd(0,H),vx:rnd(-.18,.18),vy:rnd(-.14,.14),z:rnd(.3,1),r:rnd(1,2.1)});
  var C=mobile?5:Math.max(8,Math.round(W/95));cols=[];for(var c=0;c<C;c++)cols.push({x:(c+.5)*W/C+rnd(-20,20),y:rnd(-H,H),v:rnd(.5,1.3),n:Math.round(rnd(9,16)),ch:[]});
  cols.forEach(function(k){for(var i=0;i<k.n;i++)k.ch.push(TOK[(Math.random()*TOK.length)|0]);});
  var F=mobile?3:8;frs=[];for(var f=0;f<F;f++)frs.push({t:FR[(Math.random()*FR.length)|0],x:rnd(0,W),y:rnd(0,H),v:rnd(.08,.22),z:rnd(.4,.8)});
}
function size(){mobile=innerWidth<700;dpr=Math.min(window.devicePixelRatio||1,mobile?1:1.5);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);build();if(rm)draw(0);}
var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(size,150);});
addEventListener('scroll',function(){ty=window.scrollY||0;},{passive:true});
if(fine&&!rm)addEventListener('pointermove',function(e){tmx=e.clientX;tmy=e.clientY;},{passive:true});
function wave(t,base,amp,f1,f2,sp,a,col){cx.beginPath();for(var x=0;x<=W;x+=14){var y=base+Math.sin(x*f1+t*sp)*amp+Math.sin(x*f2-t*sp*.6)*amp*.5;x?cx.lineTo(x,y):cx.moveTo(x,y);}cx.strokeStyle='rgba('+col+','+a+')';cx.lineWidth=1.2;cx.stroke();}
function draw(t){
  cx.clearRect(0,0,W,H);
  sy+=(ty-sy)*.08;mx+=(tmx-mx)*.12;my+=(tmy-my)*.12;
  /* waveforms + chart line */
  wave(t,H*.80,16,.006,.015,.5,.09,'34,211,238');wave(t,H*.88,22,.004,.011,.35,.07,'59,130,246');
  cx.beginPath();for(var x=0;x<=W;x+=16){var y=H*.28+Math.sin(x*.008+t*.3)*26+Math.sin(x*.023+t*.55+sy*.002)*11-(x/W)*30;x?cx.lineTo(x,y):cx.moveTo(x,y);}
  cx.strokeStyle='rgba(45,212,191,.08)';cx.lineWidth=1.2;cx.stroke();
  /* data streams */
  cx.font='12px ui-monospace,Menlo,Consolas,monospace';cx.textAlign='center';
  for(var i=0;i<cols.length;i++){var k=cols[i];k.y+=k.v*(rm?0:1);if(k.y-k.n*16>H){k.y=-rnd(40,300);k.x=rnd(0,W);}
    for(var j=0;j<k.n;j++){var yy=k.y-j*16;if(yy<-16||yy>H+16)continue;if(!rm&&Math.random()<.01)k.ch[j]=TOK[(Math.random()*TOK.length)|0];
      var al=(1-j/k.n)*(j===0?.32:.14);cx.fillStyle='rgba(34,211,238,'+al+')';cx.fillText(k.ch[j],k.x,yy);}}
  /* code fragments */
  cx.textAlign='left';cx.font='13px ui-monospace,Menlo,Consolas,monospace';
  for(var f=0;f<frs.length;f++){var q=frs[f];q.x+=q.v;if(q.x>W+120){q.x=-140;q.y=rnd(0,H);}
    var fy=((q.y-sy*.2*q.z)%H+H)%H;cx.fillStyle='rgba(96,165,250,.13)';cx.fillText(q.t,q.x,fy);}
  /* nodes + network with parallax and mouse reaction */
  var R=mobile?100:125,P=[];
  for(var a=0;a<pts.length;a++){var p=pts[a];p.x+=p.vx*(rm?0:1);p.y+=p.vy*(rm?0:1);if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;if(p.y<-10)p.y=H+10;if(p.y>H+10)p.y=-10;
    var rx=p.x,ry=((p.y-sy*.12*p.z)%H+H)%H;
    var dx=rx-mx,dy=ry-my,d=Math.sqrt(dx*dx+dy*dy);if(d<150&&d>.1){var s=(150-d)/150*22;rx+=dx/d*s;ry+=dy/d*s;}
    P.push(rx,ry,p.z,p.r);}
  for(var m=0;m<P.length;m+=4){
    for(var n=m+4;n<P.length;n+=4){var ex=P[m]-P[n],ey=P[m+1]-P[n+1],dd=ex*ex+ey*ey;if(dd<R*R){cx.strokeStyle='rgba(59,130,246,'+(.2*(1-Math.sqrt(dd)/R))+')';cx.lineWidth=.7;cx.beginPath();cx.moveTo(P[m],P[m+1]);cx.lineTo(P[n],P[n+1]);cx.stroke();}}
    cx.fillStyle='rgba(34,211,238,'+(.05+P[m+2]*.07)+')';cx.beginPath();cx.arc(P[m],P[m+1],P[m+3]*4,0,6.283);cx.fill();
    cx.fillStyle='rgba(125,235,255,'+(.35+P[m+2]*.35)+')';cx.beginPath();cx.arc(P[m],P[m+1],P[m+3],0,6.283);cx.fill();}
}
function frame(ts){if(!run)return;rid=requestAnimationFrame(frame);if(ts-last<(mobile?33:16))return;last=ts;draw(ts/1000);}
function start(){if(rm||run)return;run=true;rid=requestAnimationFrame(frame);}
function stop(){run=false;cancelAnimationFrame(rid);}
size();if(rm)draw(0);else start();
document.addEventListener('visibilitychange',function(){document.hidden?stop():start();});
/* hero: live bars + cycling SQL */
var bars=document.querySelectorAll('.bars i'),pre=document.querySelector('.dash pre'),qi=0;
var Q=[['<em>SELECT</em> segment, <em>COUNT</em>(*) <em>AS</em> customers','<em>FROM</em> audience_data','<em>WHERE</em> validated = <u>1</u>','<em>GROUP BY</em> segment;'],['<em>WITH</em> clean <em>AS</em> (','&nbsp;&nbsp;<em>SELECT DISTINCT</em> * <em>FROM</em> raw_data)','<em>SELECT</em> region, <em>SUM</em>(amount)','<em>FROM</em> clean <em>GROUP BY</em> region;'],['<em>SELECT</em> a.id, r.region','<em>FROM</em> audience a','<em>JOIN</em> regions r <em>ON</em> a.rid = r.id','<em>ORDER BY</em> a.id;']];
if(!rm){setInterval(function(){if(document.hidden)return;bars.forEach(function(b){b.style.setProperty('--h',Math.round(rnd(32,96))+'%');});},2600);
  setInterval(function(){if(document.hidden||!pre)return;qi=(qi+1)%Q.length;pre.innerHTML=Q[qi].map(function(l){return '<span>'+l+'</span>';}).join('');},7000);}
})();

/* Certificate popup */
document.addEventListener('click',function(e){
  var c=e.target.closest('[data-cert]');if(!c)return;
  var card=c.closest('article'),img=card.querySelector('.cth img'),d=document.getElementById('dlg-cert');
  document.getElementById('cimg').src=img.src;document.getElementById('cimg').alt=img.alt;
  document.getElementById('ctt').textContent=card.querySelector('h3').textContent;
  d.showModal();
});

/* Retail project popup: show the dashboard screenshot inside the detail popup */
document.addEventListener('click',function(e){
  if(e.target.closest('[data-open="dlg-retail"]')){
    var t=document.getElementById('rthumb'),i=document.getElementById('rimg');
    if(t&&i&&!i.getAttribute('src'))i.src=t.getAttribute('src');
  }
});
