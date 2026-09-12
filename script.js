/* ═══════════════════════════════════════════════════════════
   ONE MONTH — everything you edit lives in this CONFIG block.
   Scroll past it and you shouldn't need to touch anything.
   ═══════════════════════════════════════════════════════════ */
const CONFIG = {

  /* ── names & dates ─────────────────────────────────────── */
  herName: "Alifianna",
  hisName: "Kenneth",
  startDate: "2026-08-12",   // the day you started dating (YYYY-MM-DD)
  meetDate:  "",             // when you'll meet in person. "" = counts up instead
  capsuleDate: "2027-08-12", // when the time capsule unlocks (1 year)

  /* ── photos ────────────────────────────────────────────── */
  /* imageDir must match your folder name exactly. You made
     "image" (singular), so that's what this is set to. If you
     ever rename the folder, change it here and nowhere else. */
  imageDir: "image/",
  autoCount: 0,              // set to 35 once photos are named photo1.jpg...
  autoPrefix: "photo",
  autoExt: ".jpg",

  /* ── PART 1: timeline slides (6-8 is the sweet spot) ───── */
  timeline: [
    { photo:"photo1.jpg", date:"day one",   line:"the map where you said yes." },
    { photo:"photo2.jpg", date:"week one",  line:"[ one line about this moment ]" },
    { photo:"photo3.jpg", date:"",          line:"[ one line ]" },
    { photo:"photo4.jpg", date:"",          line:"[ one line ]" },
    { photo:"photo5.jpg", date:"",          line:"[ one line ]" },
    { photo:"photo6.jpg", date:"last week", line:"[ one line ]" },
  ],
  slideMs: 4200,             // how long each slide holds

  /* ── PART 2a: love meter reactions ─────────────────────── */
  /* img: put cropped TRANSPARENT pngs in images/. Falls back
     to the emoji if the file is missing. */
  meter: [
    { upTo:0,   img:"chibi-annoyed.png", emoji:"\u{1F611}", say:"…we're going to pretend that was an accident." },
    { upTo:25,  img:"chibi-cry.png",     emoji:"\u{1F622}", say:"okay. ow." },
    { upTo:50,  img:"chibi-pout.png",    emoji:"\u{1F624}", say:"half? after everything?" },
    { upTo:75,  img:"chibi-think.png",   emoji:"\u{1F914}", say:"getting warmer." },
    { upTo:99,  img:"chibi-blush.png",   emoji:"\u{1F60A}", say:"so close. keep going." },
    { upTo:149, img:"chibi-heart.png",   emoji:"\u{1F970}", say:"correct answer." },
    { upTo:200, img:"chibi-sparkle.png", emoji:"\u{1F929}", say:"two hundred percent. that's my girl." },
  ],

  /* ── PART 2b: bouquet — one compliment per lily ────────── */
  bouquet: [
    "you are the most beautiful person I know.",
    "you love out loud, even when it's scary... that's rare hihi.",
    "you get giddy about the things you care about, and it's my favorite thing to watch.",
    "you're learning a whole filipino language just to be closer to me.",
    "you feel everything deeply, and that's a strength, not a flaw.",
    "you make an ordinary day feel like somewhere I want to be. I'm so lucky to be with you.",
  ],

  /* ── PART 2c: the three letters ────────────────────────── */
  letters: [
    { when:"open when you miss me", body:[
      "Hi honey. If you're reading this, the distance is being loud again — so let me be louder.",
      "Kangen aja Fianna. Every single time. But missing you just means what we have is real, and worth the wait. Close your eyes, I'm right there. I'm not going anywhere.",
    ]},
    { when:"open when you can't sleep", body:[
      "Stop overthinking, my love. Whatever's spinning in your head at this hour — it's smaller than it feels right now.",
      "Breathe with me. In, hold, out. You are safe, you are loved, and tomorrow doesn't need to be figured out tonight. Rest. I've got you.",
    ]},
    { when:"open when you feel small", body:[
      "Listen to me: you are not too much, and you are not not enough. You never were.",
      "You don't have to be perfect, or the top of anything, or anyone but yourself to be worth loving. I chose you exactly as you are — and I'd choose you again every single time. You are enough. Full stop.",
    ]},
  ],

  /* ── PART 3a: where we'll go ───────────────────────────── */
  places: [
    { name:"the waterfall",  what:"the real one. not the one we rendered." },
    { name:"[ place two ]",  what:"[ what you'll do there ]" },
    { name:"[ place three ]",what:"[ what you'll do there ]" },
    { name:"[ place four ]", what:"[ what you'll do there ]" },
  ],

  /* ── PART 3b: reasons jar (aim for ~35) ────────────────── */
  reasons: [
    "because you text me when you can't sleep.",
    "because you say what you mean.",
    "because you get excited explaining things I don't understand.",
    "because you learned my language for me.",
    "because you love with your whole heart.",
    "because you make the hard days lighter.",
    "because you're soft and strong at the same time.",
    "because you forgive me faster than I deserve.",
    "because you feel like home even from far away.",
    "because you're trying to be kinder to yourself, and I'm proud of you.",
    "because your laugh fixes my whole day.",
    "because you chose me — and keep choosing me.",
  ],

  /* ── PART 3c: the ask ──────────────────────────────────── */
  taunts: [
    "nope.",
    "not that one.",
    "it's going to keep doing that.",
    "you're only making the other one bigger.",
    "be serious.",
    "okay this is just embarrassing now.",
  ],

  /* ── PART 3d: certificate fine print ───────────────────── */
  certTerms: [
    "shall be told she is loved, frequently and without warning",
    "retains full rights to the last slice of anything",
    "may claim one (1) reason from the jar per bad day",
    "is legally forbidden from calling herself 'too much'",
    "renewable monthly, indefinitely",
  ],

  /* ── PART 3e: time capsule ─────────────────────────────── */
  capsule: {
    teaser: "there is something in here I'm not ready to say yet.",
    peek: "one year from now you will read this and I hope you are still",
    locked: [
      "not yet.",
      "still sealed.",
      "it doesn't open just because you asked nicely.",
      "patience. it's dated for a reason.",
      "you really are going to keep tapping, aren't you.",
    ],
    message: [
      "[ Write this to her one year from now. ]",
      "[ She can't read it until then — so be honest. ]",
    ],
  },
};

/* ═══════════════════════════════════════════════════════════
   Below here is machinery. You shouldn't need to edit it.
   ═══════════════════════════════════════════════════════════ */

const $ = (id) => document.getElementById(id);
const DIR = CONFIG.imageDir;
const PHOTOS = CONFIG.autoCount > 0
  ? Array.from({length:CONFIG.autoCount},(_,i)=>`${DIR}${CONFIG.autoPrefix}${i+1}${CONFIG.autoExt}`)
  : [];

/* ── background: meadow ── */
const MOBILE = matchMedia("(max-width:700px)").matches;
const rnd=(a,b)=>a+Math.random()*(b-a);

function buildClouds(){
  const l=$("clouds"); if(!l) return;
  const n=MOBILE?4:7;
  for(let i=0;i<n;i++){
    const c=document.createElement("span");
    c.className="cloud";
    const w=rnd(160,420);
    c.style.width=w+"px";
    c.style.height=w*rnd(.32,.5)+"px";
    c.style.top=rnd(2,46)+"vh";
    c.style.setProperty("--bl",rnd(10,26).toFixed(0)+"px");
    c.style.setProperty("--d",rnd(70,150).toFixed(0)+"s");
    c.style.setProperty("--delay",(-rnd(0,140)).toFixed(0)+"s");
    c.style.opacity=rnd(.35,.8).toFixed(2);
    l.appendChild(c);
  }
}

function buildGrass(){
  const l=$("grass"); if(!l) return;
  const n=MOBILE?70:130;
  const greens=[["#5A7D73","#2F4A45"],["#6B8F80","#38544E"],["#4E7068","#26403C"]];
  for(let i=0;i<n;i++){
    const b=document.createElement("span");
    b.className="blade";
    const g=greens[i%greens.length];
    b.style.left=(i/n*100+rnd(-.5,.5))+"%";
    b.style.setProperty("--w",rnd(2,5).toFixed(1)+"px");
    b.style.setProperty("--h",rnd(34,104).toFixed(0)+"px");
    b.style.setProperty("--c2",g[0]);
    b.style.setProperty("--c1",g[1]);
    b.style.setProperty("--d",rnd(3,6.5).toFixed(1)+"s");
    b.style.setProperty("--delay",(-rnd(0,6)).toFixed(1)+"s");
    const a=rnd(4,10);
    b.style.setProperty("--a1",(-a).toFixed(1)+"deg");
    b.style.setProperty("--a2",a.toFixed(1)+"deg");
    l.appendChild(b);
  }
}

function buildBugs(){
  const l=$("bugs"); if(!l) return;
  const n=MOBILE?10:18;
  for(let i=0;i<n;i++){
    const b=document.createElement("span");
    b.className="bug";
    b.style.left=rnd(2,98)+"vw";
    b.style.top=rnd(40,92)+"vh";
    b.style.setProperty("--s",rnd(3,6).toFixed(1)+"px");
    b.style.setProperty("--d",rnd(14,26).toFixed(0)+"s");
    b.style.setProperty("--b",rnd(2.2,4.6).toFixed(1)+"s");
    b.style.setProperty("--delay",(-rnd(0,20)).toFixed(1)+"s");
    b.style.setProperty("--dx",rnd(-120,120).toFixed(0)+"px");
    b.style.setProperty("--dy",rnd(-140,-40).toFixed(0)+"px");
    l.appendChild(b);
  }
}

function buildPetals(){
  const l=$("petals"); if(!l) return;
  const n=MOBILE?14:26;
  const tints=["rgba(214,232,244,.9)","rgba(232,240,248,.85)",
               "rgba(228,190,190,.75)","rgba(245,241,233,.9)"];
  for(let i=0;i<n;i++){
    const p=document.createElement("span");
    p.className="petal-f";
    p.style.left=rnd(-4,102)+"vw";
    const w=rnd(9,17);
    p.style.setProperty("--w",w.toFixed(1)+"px");
    p.style.setProperty("--h",(w*rnd(1.3,1.7)).toFixed(1)+"px");
    p.style.setProperty("--pc",tints[i%tints.length]);
    p.style.setProperty("--d",rnd(13,26).toFixed(0)+"s");
    p.style.setProperty("--delay",(-rnd(0,26)).toFixed(1)+"s");
    p.style.setProperty("--dx",rnd(-140,140).toFixed(0)+"px");
    p.style.setProperty("--rot",rnd(200,700).toFixed(0)+"deg");
    p.style.setProperty("--o",rnd(.45,.9).toFixed(2));
    l.appendChild(p);
  }
}

function buildBgPhotos(){
  const l=$("bgPhotos"); if(!l||!PHOTOS.length) return;
  const spots=[{t:"8%",x:"4%",w:200,r:-3},{t:"26%",x:"78%",w:165,r:4},
    {t:"52%",x:"8%",w:180,r:2.5},{t:"68%",x:"72%",w:210,r:-4},
    {t:"38%",x:"44%",w:150,r:3},{t:"86%",x:"26%",w:175,r:-2}];
  spots.forEach((sp,i)=>{
    const f=document.createElement("figure");
    f.style.top=sp.t; f.style.left=sp.x;
    f.style.setProperty("--w",sp.w+"px");
    f.style.setProperty("--r",sp.r+"deg");
    f.style.setProperty("--d",42+Math.random()*24+"s");
    f.style.setProperty("--delay",(Math.random()*-30).toFixed(1)+"s");
    f.style.setProperty("--dx",(Math.random()*60-30).toFixed(0)+"px");
    f.style.setProperty("--dy",(-30-Math.random()*50).toFixed(0)+"px");
    f.style.setProperty("--o",(.10+Math.random()*.06).toFixed(2));
    const im=new Image(); im.src=PHOTOS[i%PHOTOS.length]; im.alt="";
    im.onload=()=>f.classList.add("on"); im.onerror=()=>f.remove();
    f.appendChild(im); l.appendChild(f);
  });
}
buildClouds(); buildGrass(); buildBugs(); buildPetals(); buildBgPhotos();

/* ── blue lily builder ───────────────────────────────────
   Six pointed, recurved petals with a blue→violet gradient,
   pale throat, dark speckles and stamens with anthers.       */
let LILY_UID = 0;
const NS = "http://www.w3.org/2000/svg";
const mk = (t, attrs={}) => {
  const e = document.createElementNS(NS, t);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
};

function makeLily(size, opts={}){
  const uid = "l" + (++LILY_UID);
  const P = opts.petals || 6;
  const animate = opts.animate !== false;
  const base = opts.delay || 0;

  const svg = mk("svg", {
    class: "lily",
    viewBox: "-130 -130 260 260",
    width: size, height: size
  });
  svg.style.overflow = "visible";

  /* ---- gradients ---- */
  const defs = mk("defs");

  const pg = mk("linearGradient", {id:uid+"-p", gradientUnits:"userSpaceOnUse", x1:"0", y1:"2", x2:"0", y2:"-118"});
  [["0%","#FBFDFF"],["12%","#DCEBFB"],["30%","#9CC8F2"],
   ["52%","#5E9AE6"],["74%","#4470D4"],["90%","#5A57C2"],["100%","#6B4BAE"]]
   .forEach(([o,c])=>pg.appendChild(mk("stop",{offset:o,"stop-color":c})));
  defs.appendChild(pg);

  // soft vein highlight down the middle of each petal
  const vg = mk("linearGradient", {id:uid+"-v", gradientUnits:"userSpaceOnUse", x1:"0", y1:"2", x2:"0", y2:"-110"});
  [["0%","rgba(255,255,255,.85)"],["55%","rgba(255,255,255,.30)"],
   ["100%","rgba(255,255,255,0)"]]
   .forEach(([o,c])=>vg.appendChild(mk("stop",{offset:o,"stop-color":c})));
  defs.appendChild(vg);

  const cg = mk("radialGradient", {id:uid+"-c", gradientUnits:"userSpaceOnUse", cx:"0", cy:"0", r:"44"});
  [["0%","#FFFFFF"],["45%","#EAF4FF"],["100%","rgba(190,220,250,0)"]]
   .forEach(([o,c])=>cg.appendChild(mk("stop",{offset:o,"stop-color":c})));
  defs.appendChild(cg);
  svg.appendChild(defs);

  /* pale glow in the throat */
  svg.appendChild(mk("circle",{cx:0,cy:0,r:42,fill:`url(#${uid}-c)`}));

  /* ---- petals ---- */
  // narrow base, widest at 60%, pointed tip that flicks outward
  const PETAL = "M0,2 C-13,-26 -25,-58 -14,-92 C-10,-105 -3,-114 0,-118 "
              + "C3,-114 10,-105 14,-92 C25,-58 13,-26 0,2 Z";
  const VEIN  = "M0,-4 C-3,-34 -4,-64 0,-104 C4,-64 3,-34 0,-4 Z";

  const petalGroups = [];
  for(let i=0;i<P;i++){
    const g = mk("g", {class:"lily__petal", transform:`rotate(${360/P*i})`});
    // back shadow so overlapping petals read apart
    g.appendChild(mk("path",{d:PETAL, fill:"#3E5FA8", opacity:".28",
      transform:"translate(2,3) scale(1.01)"}));
    g.appendChild(mk("path",{d:PETAL, fill:`url(#${uid}-p)`}));
    g.appendChild(mk("path",{d:VEIN,  fill:`url(#${uid}-v)`}));
    // speckles near the throat
    for(let k=0;k<7;k++){
      const sy = -20 - k*7 - Math.random()*5;
      const sx = (Math.random()*2-1) * (7 - k*0.55);
      g.appendChild(mk("ellipse",{
        cx:sx.toFixed(1), cy:sy.toFixed(1),
        rx:(1.5-k*0.1).toFixed(2), ry:(2.1-k*0.12).toFixed(2),
        fill:"#3B2470", opacity:(0.55-k*0.05).toFixed(2)
      }));
    }
    if(animate){
      g.style.transformOrigin="0px 0px";
      g.style.animation=`lilyPetal 1.15s cubic-bezier(.2,.85,.3,1.06) both`;
      g.style.animationDelay=(base + i*0.1)+"s";
      g.style.setProperty("--rot",(360/P*i)+"deg");
    }
    svg.appendChild(g);
    petalGroups.push(g);
  }

  /* ---- stamens ---- */
  const st = mk("g",{class:"lily__stamens"});
  for(let i=0;i<6;i++){
    const a = -52 + i*21;
    const g = mk("g",{transform:`rotate(${a})`});
    g.appendChild(mk("path",{
      d:"M0,0 C2,-16 4,-30 3,-44",
      fill:"none", stroke:"#E9F2D8", "stroke-width":"2.4", "stroke-linecap":"round"
    }));
    g.appendChild(mk("ellipse",{
      cx:"3", cy:"-48", rx:"3.4", ry:"6.4",
      fill:"#4A2B6B", transform:"rotate(16 3 -48)"
    }));
    st.appendChild(g);
  }
  // pistil
  st.appendChild(mk("path",{d:"M0,0 L0,-52", stroke:"#DCEBC6",
    "stroke-width":"3", "stroke-linecap":"round", fill:"none"}));
  st.appendChild(mk("circle",{cx:0, cy:-54, r:3.6, fill:"#B9D98C"}));
  if(animate){
    st.style.transformOrigin="0px 0px";
    st.style.animation="lilyStamen .85s cubic-bezier(.2,.9,.3,1.2) both";
    st.style.animationDelay=(base + P*0.1 + 0.15)+"s";
  }
  svg.appendChild(st);

  return svg;
}

/* kept for anything still calling the old name */
const lilySVG = (size, delay, petals) =>
  makeLily(size, {delay: delay||0, petals: petals||6});

/* ═══════ PART 1 — THE FILM ═══════ */
let filmTimers=[], filmDone=false;
const T=(fn,ms)=>filmTimers.push(setTimeout(fn,ms));

function startFilm(){
  $("gate").classList.add("gone");
  setTimeout(()=>{ $("gate").hidden=true; },900);
  $("film").hidden=false;
  T(()=>$("skipBtn").classList.add("on"),4000);
  bloom();
}

function bloom(){
  const g=$("garden");
  const specs=[
    {h:.60, sc:.80, d:.30, bloom:2.15},
    {h:.92, sc:1.00, d:.00, bloom:1.80},
    {h:.72, sc:.88, d:.52, bloom:2.42},
  ];
  specs.forEach((sp,i)=>{
    const el=document.createElement("div");
    el.className="gl";
    el.style.setProperty("--h",(sp.h*100)+"%");
    el.style.setProperty("--sc",sp.sc);
    el.style.setProperty("--d",sp.d+"s");
    el.style.setProperty("--swd",(i*.8)+"s");

    const stem=document.createElement("span");
    stem.className="gl__stem";
    el.appendChild(stem);

    [{t:40,side:1,r:-34,w:1.0},{t:58,side:-1,r:30,w:.88},{t:73,side:1,r:-24,w:.74}]
      .forEach((lf,k)=>{
        const L=document.createElement("span");
        L.className="gl__leaf"+(lf.side<0?" gl__leaf--l":"");
        L.style.top=lf.t+"%";
        L.style.setProperty("--lw",(lf.w*54)+"px");
        L.style.setProperty("--lh",(lf.w*21)+"px");
        L.style.setProperty("--lr",lf.r+"deg");
        L.style.setProperty("--ld",(sp.d+.95+k*.22)+"s");
        el.appendChild(L);
      });

    const head=document.createElement("span");
    head.className="gl__head";
    head.appendChild(makeLily("100%",{delay:sp.bloom}));
    el.appendChild(head);

    g.appendChild(el);
    setTimeout(()=>el.classList.add("sway"),(sp.bloom+1.7)*1000);
  });

  butterflies();
  T(()=>$("bloomText").classList.add("on"),3900);
  T(()=>dissolve(g),7000);
}

/* cute butterflies drifting past the flowers */
function butterflies(){
  const host=$("bugs"); if(!host) return;
  const n = MOBILE?2:4;
  const cols=[["#BFE0FF","#8FBBF0"],["#F3D7E6","#E4AECB"],["#FFF0C8","#F2D48C"]];
  for(let i=0;i<n;i++){
    const c=cols[i%cols.length];
    const b=document.createElement("span");
    b.className="fly";
    b.innerHTML=`<i class="fly__w fly__w--l"></i><i class="fly__w fly__w--r"></i><i class="fly__b"></i>`;
    b.style.setProperty("--c1",c[0]);
    b.style.setProperty("--c2",c[1]);
    b.style.setProperty("--fs",rnd(.55,1).toFixed(2));
    b.style.setProperty("--fd",rnd(26,44).toFixed(0)+"s");
    b.style.setProperty("--fdel",(-rnd(0,30)).toFixed(1)+"s");
    b.style.setProperty("--y1",rnd(26,62).toFixed(0)+"vh");
    b.style.setProperty("--y2",rnd(30,70).toFixed(0)+"vh");
    b.style.setProperty("--y3",rnd(24,58).toFixed(0)+"vh");
    b.style.setProperty("--flap",rnd(.22,.38).toFixed(2)+"s");
    host.appendChild(b);
  }
}

/* petals break into the starfield */
function dissolve(stage){
  stage.classList.add("dissolve");
  $("bloomText").classList.remove("on");
  const r=stage.getBoundingClientRect();
  for(let i=0;i<46;i++){
    const d=document.createElement("i");
    d.className="petal-dust";
    const ang=Math.random()*Math.PI*2, rad=Math.random()*r.width*0.42;
    d.style.left=(r.left+r.width/2+Math.cos(ang)*rad)+"px";
    d.style.top=(r.top+r.height/2+Math.sin(ang)*rad)+"px";
    d.style.position="fixed"; d.style.zIndex=52;
    document.body.appendChild(d);
    const dx=(Math.random()*160-80), dy=-(200+Math.random()*380);
    d.animate([
      {transform:"translate(0,0) scale(1)",opacity:.9},
      {transform:`translate(${dx}px,${dy}px) scale(.2)`,opacity:0}
    ],{duration:2200+Math.random()*1600,easing:"cubic-bezier(.2,.6,.4,1)",delay:Math.random()*500,fill:"forwards"});
    setTimeout(()=>d.remove(),4200);
  }
  T(()=>{ $("sceneBloom").hidden=true; timeline(); },1700);
}

function timeline(){
  const sc=$("sceneTimeline"), stage=$("tlStage"), bar=$("tlBar");
  sc.hidden=false;
  const slides=CONFIG.timeline;
  const total=slides.length+1;   // +1 for the "Day 1" card
  let idx=0;

  // Day 1 card first
  const day=document.createElement("div");
  day.className="tl-slide";
  day.innerHTML=`<div class="tl-slide__txt"><p class="tl-day">Day 1</p></div>`;
  stage.appendChild(day);
  requestAnimationFrame(()=>day.classList.add("on"));
  bar.style.width=(100/total)+"%";

  const els=slides.map((s,i)=>{
    const el=document.createElement("div");
    el.className="tl-slide";
    el.style.setProperty("--kx",(Math.random()*4-2).toFixed(1)+"%");
    el.style.setProperty("--ky",(Math.random()*4-2).toFixed(1)+"%");
    el.innerHTML=`
      <div class="tl-slide__img"></div>
      <div class="tl-slide__grad"></div>
      <div class="tl-slide__txt">
        ${s.date?`<p class="tl-slide__date">${s.date}</p>`:""}
        <p class="tl-slide__line">${s.line}</p>
      </div>`;
    const holder=el.querySelector(".tl-slide__img");
    const im=new Image(); im.src=DIR+s.photo; im.alt="";
    im.onerror=()=>{ holder.innerHTML=`<div class="tl-slide__ph">photo ${i+1}</div>`; };
    holder.appendChild(im);
    stage.appendChild(el);
    return el;
  });

  const step=()=>{
    if(idx>0) els[idx-1].classList.remove("on");
    else day.classList.remove("on");
    if(idx>=els.length){ T(handoff,900); return; }
    const cur=els[idx];
    T(()=>cur.classList.add("on"),700);
    idx++;
    bar.style.width=((idx+1)/total*100)+"%";
    T(step,CONFIG.slideMs);
  };
  T(step,2600);
}

function handoff(){
  $("sceneTimeline").hidden=true;
  $("sceneHandoff").hidden=false;
  T(endFilm,4600);
}

function endFilm(){
  if(filmDone) return; filmDone=true;
  filmTimers.forEach(clearTimeout);
  $("film").hidden=true;
  $("skipBtn").classList.remove("on");
  $("chapter").hidden=false;
}

$("gateBtn").addEventListener("click",startFilm);
$("skipBtn").addEventListener("click",endFilm);

/* ═══════ PART 2 — GUIDED CHAPTER ═══════ */

/* ── ① love meter ── */
(function(){
  const inp=$("meterInput"), val=$("meterVal"), say=$("meterSay"),
        chibi=$("meterChibi"), fill=$("arcFill"), next=$("meterNext");
  let lastTier=null, touched=false;

  const tierFor=(v)=>CONFIG.meter.find(t=>v<=t.upTo)||CONFIG.meter[CONFIG.meter.length-1];

  const setChibi=(tier)=>{
    chibi.innerHTML="";
    const im=new Image();
    im.src=DIR+tier.img; im.alt="";
    im.onerror=()=>{ chibi.innerHTML=`<span class="emoji">${tier.emoji}</span>`; };
    chibi.appendChild(im);
    chibi.classList.remove("pop"); void chibi.offsetWidth; chibi.classList.add("pop");
  };

  const render=()=>{
    const v=+inp.value;
    val.textContent=v;
    const pct=Math.min(v/200,1);
    fill.style.strokeDashoffset=270-270*pct;
    fill.style.stroke = v>=150 ? "#E4BEBE" : v>=100 ? "#D79F9F" : v>=50 ? "#A9C3D9" : "#7E9BB5";
    const tier=tierFor(v);
    if(tier!==lastTier){ lastTier=tier; setChibi(tier); say.textContent=tier.say; }
    if(!touched){ touched=true; next.disabled=false; }
  };
  inp.addEventListener("input",render);
  setChibi(CONFIG.meter[0]);
})();

/* ── ② bouquet ── */
(function(){
  const vase=$("bqVase"), note=$("bqNote"), picks=$("bqPicks"), next=$("bqNext");
  const N=CONFIG.bouquet.length;
  let taken=0;

  CONFIG.bouquet.forEach((line,i)=>{
    const b=document.createElement("button");
    b.className="bq__pick";
    b.appendChild(makeLily(30,{animate:false}));
    b.addEventListener("click",()=>{
      if(b.disabled) return;
      b.disabled=true;
      note.textContent=line;
      const rot=(-((N-1)/2)+taken)*15;
      const stem=document.createElement("div");
      stem.className="bq__stem";
      stem.style.setProperty("--rot",rot+"deg");
      stem.appendChild(makeLily(78,{delay:0}));
      const stalk=document.createElement("span");
      stalk.className="stalk";
      stem.appendChild(stalk);
      vase.appendChild(stem);
      requestAnimationFrame(()=>stem.classList.add("on"));
      taken++;
      if(taken===N){ next.disabled=false; setTimeout(()=>{ note.textContent="that's all of them. they're yours."; },2600); }
    });
    picks.appendChild(b);
  });
})();

/* ── ③ gifts / letters ── */
(function(){
  const wrap=$("gifts"), modal=$("letterModal"),
        when=$("letterWhen"), body=$("letterBody");
  CONFIG.letters.forEach((L)=>{
    const g=document.createElement("button");
    g.className="gift";
    g.innerHTML=`<span class="gift__ico">&#127873;</span><span class="gift__when">${L.when}</span>`;
    g.addEventListener("click",()=>{
      g.classList.add("opened");
      when.textContent=L.when;
      body.innerHTML=L.body.map(p=>`<p>${p}</p>`).join("");
      modal.hidden=false;
    });
    wrap.appendChild(g);
  });
  $("letterClose").addEventListener("click",()=>modal.hidden=true);
  modal.addEventListener("click",e=>{ if(e.target===modal) modal.hidden=true; });
})();

/* ── chapter navigation ── */
document.querySelectorAll(".next").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const t=btn.dataset.next;
    btn.closest(".card").hidden=true;
    if(t==="__release"){
      $("chapter").hidden=true;
      document.body.classList.remove("locked");
      $("rest").hidden=false;
      initRest();
      window.scrollTo({top:0});
    } else {
      $(t).hidden=false;
    }
  });
});

/* ═══════ PART 3 — WHAT COMES NEXT ═══════ */
function initRest(){
  countdown(); places(); jar(); theAsk(); certificate(); capsule(); revealer();
}

/* ── reveal on scroll ── */
function revealer(){
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); }});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* ── countdown ── */
function countdown(){
  const wrap=$("cd"), title=$("cdTitle"), line=$("cdLine");
  const start=new Date(CONFIG.startDate+"T00:00:00");
  const target=CONFIG.meetDate?new Date(CONFIG.meetDate+"T00:00:00"):null;

  title.textContent = target ? "Until I see you" : "Since day one";
  line.textContent  = target
    ? "and then the distance stops being a number."
    : "and none of them were the hard part.";

  const units=[["days","d"],["hours","h"],["minutes","m"],["seconds","s"]];
  wrap.innerHTML=units.map(([u])=>
    `<div class="cd__unit"><span class="cd__n" data-u="${u}">0</span><span class="cd__l">${u}</span></div>`
  ).join("");

  const tick=()=>{
    const now=new Date();
    let ms = target ? (target-now) : (now-start);
    if(ms<0) ms=0;
    const s=Math.floor(ms/1000);
    const set=(u,v)=>{ const e=wrap.querySelector(`[data-u="${u}"]`); if(e) e.textContent=v; };
    set("days",Math.floor(s/86400));
    set("hours",Math.floor(s%86400/3600));
    set("minutes",Math.floor(s%3600/60));
    set("seconds",s%60);
  };
  tick(); setInterval(tick,1000);
}

/* ── places ── */
function places(){
  const wrap=$("places");
  CONFIG.places.forEach((p,i)=>{
    const el=document.createElement("button");
    el.className="place";
    el.innerHTML=`<span class="place__n">${String(i+1).padStart(2,"0")}</span>
      <span class="place__name">${p.name}</span>
      <span class="place__what">${p.what}</span>`;
    el.addEventListener("click",()=>el.classList.toggle("open"));
    wrap.appendChild(el);
  });
}

/* ── reasons jar ── */
function jar(){
  const btn=$("jarBtn"), out=$("jarOut"), cnt=$("jarCount"), fill=$("jarFill");
  let bag=[];
  const reset=()=>{ bag=[...CONFIG.reasons].sort(()=>Math.random()-.5); };
  reset();
  const total=CONFIG.reasons.length;
  const paint=()=>{
    fill.style.height=(bag.length/total*100)+"%";
    cnt.textContent=`${bag.length} left in the jar`;
  };
  paint();
  btn.addEventListener("click",()=>{
    if(!bag.length){ reset(); out.textContent="(refilled — there are always more)"; paint(); return; }
    const r=bag.pop();
    out.style.opacity=0;
    setTimeout(()=>{ out.textContent=r; out.style.opacity=1; paint(); },180);
  });
}

/* ── the ask ── */
function theAsk(){
  const yes=$("askYes"), no=$("askNo"), taunt=$("askTaunt"),
        ask=$("ask"), done=$("askDone");
  let dodges=0, scale=1;

  const teleport=()=>{
    dodges++;
    // yes grows every time she tries
    scale=Math.min(scale+0.22,3.2);
    yes.style.transform=`scale(${scale})`;
    // no shrinks and jumps somewhere random on screen
    const pad=70;
    const x=pad+Math.random()*(innerWidth-pad*2);
    const y=pad+Math.random()*(innerHeight-pad*2);
    no.style.position="fixed";
    no.style.left=x+"px";
    no.style.top=y+"px";
    no.style.transform=`scale(${Math.max(1-dodges*0.09,0.4)})`;
    taunt.textContent=CONFIG.taunts[Math.min(dodges-1,CONFIG.taunts.length-1)];
    if(dodges>=CONFIG.taunts.length){
      no.style.opacity=0;
      no.style.pointerEvents="none";
      taunt.textContent="it's gone. there's only one option now.";
    }
  };

  // drifts away on hover, teleports on click
  no.addEventListener("mouseenter",()=>{
    if(dodges>=CONFIG.taunts.length) return;
    const dx=(Math.random()*220-110), dy=(Math.random()*140-70);
    no.style.transform=`translate(${dx}px,${dy}px) scale(${Math.max(1-dodges*0.09,0.4)})`;
  });
  no.addEventListener("click",teleport);
  no.addEventListener("touchstart",e=>{ e.preventDefault(); teleport(); },{passive:false});

  yes.addEventListener("click",()=>{
    ask.hidden=true; done.hidden=false;
    burstHearts();
  });
}

function burstHearts(){
  for(let i=0;i<40;i++){
    const h=document.createElement("i");
    h.textContent="\u2665";
    h.style.cssText=`position:fixed;left:${50+Math.random()*10-5}vw;top:60vh;
      font-size:${12+Math.random()*20}px;color:#E4BEBE;pointer-events:none;z-index:80;`;
    document.body.appendChild(h);
    h.animate([
      {transform:"translate(0,0) scale(.4)",opacity:1},
      {transform:`translate(${Math.random()*600-300}px,${-200-Math.random()*400}px) scale(1.1)`,opacity:0}
    ],{duration:1800+Math.random()*1400,easing:"cubic-bezier(.2,.6,.4,1)",fill:"forwards"});
    setTimeout(()=>h.remove(),3400);
  }
}

/* ── certificate ── */
function certificate(){
  $("certA").textContent=CONFIG.herName;
  $("certB").textContent=CONFIG.hisName;
  $("certTerms").innerHTML=CONFIG.certTerms.map(t=>`<li>${t}</li>`).join("");
  const d=new Date();
  $("certDate").textContent="issued "+d.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});

  $("certDl").addEventListener("click",()=>drawCert());
}

/* renders the certificate to a canvas so she can save it as an image */
function drawCert(){
  const W=1000,H=1400,c=document.createElement("canvas");
  c.width=W; c.height=H;
  const x=c.getContext("2d");

  // paper
  const g=x.createLinearGradient(0,0,W,H);
  g.addColorStop(0,"#FBF8F1"); g.addColorStop(1,"#F1EADC");
  x.fillStyle=g; x.fillRect(0,0,W,H);
  // borders
  x.strokeStyle="#D79F9F"; x.lineWidth=3; x.strokeRect(24,24,W-48,H-48);
  x.strokeStyle="rgba(58,46,46,.18)"; x.lineWidth=1; x.strokeRect(44,44,W-88,H-88);

  const mid=W/2;
  const line=(t,y,font,color,align="center")=>{
    x.font=font; x.fillStyle=color; x.textAlign=align;
    x.fillText(t,align==="center"?mid:90,y);
  };

  line("OFFICIAL & LEGALLY ADORABLE",118,"500 20px 'JetBrains Mono',monospace","#B07A7A");
  line("Certificate of",210,"300 66px 'Cormorant Garamond',Georgia,serif","#5A3F3F");
  line("Being Mine",286,"italic 400 70px 'Cormorant Garamond',Georgia,serif","#B07A7A");

  line("this hereby certifies that",356,"italic 26px 'Cormorant Garamond',Georgia,serif","#7A6A6A");
  line(CONFIG.herName,432,"400 52px 'Cormorant Garamond',Georgia,serif","#3A2E2E");
  line("&",486,"italic 34px 'Cormorant Garamond',Georgia,serif","#B07A7A");
  line(CONFIG.hisName,546,"400 52px 'Cormorant Garamond',Georgia,serif","#3A2E2E");

  line("have survived one entire month of",614,"italic 26px 'Cormorant Garamond',Georgia,serif","#7A6A6A");
  line("bad timing, worse wifi, and roughly nine thousand messages",656,"italic 24px 'Cormorant Garamond',Georgia,serif","#7A6A6A");

  // terms
  let y=740;
  x.textAlign="left";
  CONFIG.certTerms.forEach(t=>{
    x.font="24px 'Cormorant Garamond',Georgia,serif"; x.fillStyle="#5A4A4A";
    x.fillText("\u2713",190,y);
    const words=t.split(" "); let ln="",yy=y;
    words.forEach(w=>{
      const test=ln+w+" ";
      if(x.measureText(test).width>560){ x.fillText(ln,226,yy); ln=w+" "; yy+=32; }
      else ln=test;
    });
    x.fillText(ln,226,yy);
    y=yy+52;
  });

  // seal
  x.beginPath(); x.arc(mid,y+70,62,0,Math.PI*2);
  x.setLineDash([7,6]); x.strokeStyle="#B07A7A"; x.lineWidth=2; x.stroke(); x.setLineDash([]);
  x.textAlign="center";
  line("1",y+72,"400 46px 'Cormorant Garamond',Georgia,serif","#B07A7A");
  line("MONTH",y+100,"500 14px 'JetBrains Mono',monospace","#B07A7A");

  // signatures
  const sy=y+200;
  x.strokeStyle="rgba(58,46,46,.25)"; x.lineWidth=1;
  [[210,"signed, him"],[600,"signed, her"]].forEach(([sx,lbl])=>{
    x.beginPath(); x.moveTo(sx,sy); x.lineTo(sx+190,sy); x.stroke();
    line("\u2665",sy-14,"34px serif","#B07A7A");
    x.font="500 14px 'JetBrains Mono',monospace"; x.fillStyle="#8A7A7A";
    x.textAlign="center"; x.fillText(lbl.toUpperCase(),sx+95,sy+30);
    x.textAlign="center";
  });
  // fix heart positions
  x.font="34px serif"; x.fillStyle="#B07A7A";
  x.fillText("\u2665",305,sy-14); x.fillText("\u2665",695,sy-14);

  const dt=new Date().toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"});
  line("ISSUED "+dt.toUpperCase(),H-84,"500 16px 'JetBrains Mono',monospace","#8A7A7A");

  c.toBlob(b=>{
    const a=document.createElement("a");
    a.href=URL.createObjectURL(b);
    a.download="certificate-one-month.png";
    a.click();
    setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  });
}

/* ── time capsule ── */
function capsule(){
  const box=$("capBox"), say=$("capSay"), meta=$("capMeta"),
        label=$("capLabel"), peek=$("capPeek"), seal=$("capSeal");
  const open=new Date(CONFIG.capsuleDate+"T00:00:00");
  const unlocked=new Date()>=open;
  let taps=0;

  const days=Math.max(0,Math.ceil((open-new Date())/86400000));
  meta.textContent = unlocked
    ? "unlocked \u00b7 it's time"
    : `opens in ${days} day${days===1?"":"s"} \u00b7 ${open.toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"})}`;
  say.textContent=CONFIG.capsule.teaser;

  box.addEventListener("click",()=>{
    if(unlocked){
      label.textContent="open";
      seal.style.transform="scale(0)";
      say.innerHTML="";
      peek.hidden=false; peek.style.filter="none";
      peek.innerHTML=CONFIG.capsule.message.map(p=>`<p>${p}</p>`).join("");
      return;
    }
    taps++;
    box.classList.remove("shake"); void box.offsetWidth; box.classList.add("shake");
    say.textContent=CONFIG.capsule.locked[Math.min(taps-1,CONFIG.capsule.locked.length-1)];
    // after a few tries, let her see a blurred sliver
    if(taps>=3 && peek.hidden){
      peek.hidden=false;
      peek.textContent=CONFIG.capsule.peek+"…";
    }
  });
}

/* replay */
$("replay").addEventListener("click",()=>location.reload());