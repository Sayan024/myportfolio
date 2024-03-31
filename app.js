let t1 = gsap.timeline()
let t2 = gsap.timeline()
let t3 = gsap.timeline()
let t4 = gsap.timeline()
gsap.registerPlugin(ScrollTrigger)

t2.from(".header",{
    y:-100,
    opacity:0,
    duration:1,
    ease: "power3.inOut",
})
t2.from("#home .mypic",{
    y:-100,
    opacity:0,
    duration:1,
    scale:1.1,
    ease: "power3.inOut",
})
t2.from("#home .sintro",{
    x:100,
    opacity:0,
    duration:1,
    ease: "power3.inOut",
})
t2.from("#home .headingtexthome",{
    opacity:0,
    duration:1,
    ease: "power3.inOut",
    scale:2,
})
t2.from("#home .headingtexthome h2 span",{
    duration:3,
    repeat:-1,
    ease: "power3.inOut",
    yoyo:true
})


gsap.from(".aboutleft",{
    scrollTrigger:{
        trigger:".aboutleft",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    x:-200,
    ease: "power3.inOut",
    opacity:0,
})
gsap.from(".aboutright",{
    scrollTrigger:{
        trigger:".aboutright",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,

    } ,
    x:200,
    opacity:0,
    ease: "power3.inOut",
})

const edu1 = document.querySelectorAll('.edurect')[0];
const edu2 = document.querySelectorAll('.edurect')[1];
const edu3 = document.querySelectorAll('.edurect')[2];
const edu4 = document.querySelectorAll('.edurect')[3];

t1.from("#Education .edu h1",{
    scrollTrigger:{
        trigger:"#Education .edu h1",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    scale:2,
    ease: "power3.inOut",
    opacity:0,
})
t1.from(edu1,{
    scrollTrigger:{
        trigger:edu1,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    x:-200,
    ease: "power3.inOut",
    opacity:0,
})
t1.from(edu2,{
    scrollTrigger:{
        trigger:edu2,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    x:200,
    ease: "power3.inOut",
    opacity:0,
})
t1.from(edu3,{
    scrollTrigger:{
        trigger:edu3,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    x:-200,
    ease: "power3.inOut",
    opacity:0,
})
t1.from(edu4,{
    scrollTrigger:{
        trigger:edu4,
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    ease: "power3.inOut",
    x:200,
    opacity:0,
})
t1.from(".verboxedu",{
    scrollTrigger:{
        trigger:".verboxedu",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    ease: "power3.inOut",
    height:100,
    opacity:0,
})
const row1 = document.querySelectorAll(".sr1 .sk");
const row2 = document.querySelectorAll(".sr2 .sk");
const row3 = document.querySelectorAll(".sr3 .sk");
t3.from("#skills .skillsdis h1",{
    scrollTrigger:{
        trigger:"#skills .skillsdis h1",
        start:"top 80%",
        end:"bottom 80%",
        scrub:true,
    } ,
    scale:2,
    ease: "power3.inOut",
    opacity:0,
})
t3.from(row1,{
    scrollTrigger:{
        trigger:row1,
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,
        
    } ,
    ease: "power3.inOut",
    height:100,
    opacity:0,
})
t3.from(row2,{
    scrollTrigger:{
        trigger:row2,
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,
        
    } ,
    ease: "power3.inOut",
    height:100,
    opacity:0,
})
t3.from(row3,{
    scrollTrigger:{
        trigger:row3,
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,
        
    } ,
    ease: "power3.inOut",
    height:100,
    opacity:0,
})
const web = document.querySelector('.web')
const gra = document.querySelector('.graphic')
const ui = document.querySelector('.ui')
const ve = document.querySelector('.ve')
const btn = document.querySelector('#Projects .prj .bar button')

function myweb(){
    ui.style.display = "none"
    ve.style.display = "none"
    web.style.display = "flex"
    gra.style.display = "none"
    
}
function mygra(){
    ui.style.display = "none"
    ve.style.display = "none"
    gra.style.display = "flex"
    web.style.display = "none"
}
function myui(){
    ui.style.display = "flex"
    ve.style.display = "none"
    web.style.display = "none"
    gra.style.display = "none"
}
function myve(){
    ui.style.display = "none"
    ve.style.display = "flex"
    web.style.display = "none"
    gra.style.display = "none"
}
t4.from("#Projects .prj h1",{
    scrollTrigger:{
        trigger:"#Projects .prj h1",
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,

    } ,
    scale:2,
    opacity:0,
    ease: "power3.inOut",
})
t4.from("#Projects .prj .bar",{
    scrollTrigger:{
        trigger:"#Projects .prj .bar",
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,

    } ,
    y:-10,
    opacity:0,
    ease: "power3.inOut",
})
t4.from(".prjdis",{
    scrollTrigger:{
        trigger:".prjdis",
        start:"top 90%",
        end:"bottom 80%",
        scrub:true,

    } ,
    y:-10,
    opacity:0,
    ease: "power3.inOut",
})

const mouse = { x: 0, y: 0 };
const trails = [];

// Function to create a new trail element (circle)
function createTrail() {
  const trailEl = document.createElement("div");
  trailEl.classList.add("trail"); // Add CSS class for styling
  trails.push(trailEl);
  document.body.appendChild(trailEl);
}

function updateTrails() {
  trails.forEach((trail) => {
    trail.style.left = `${mouse.x + 25}px`;
    trail.style.top = `${mouse.y + 45}px`;
  });
}
document.addEventListener("mousemove", (event) => {
  // Update mouse position
  mouse.x = event.clientX;
  mouse.y = event.clientY;

  if (trails.length === 0 || trails[trails.length - 1].classList.contains("fade")) {
    createTrail();
  }

  updateTrails();
});
const recipient = 'sayanbanerjee024@example.com';
const subject = 'I want to hire';
const body = document.getElementById('body');
let msg="";
body.addEventListener("change",()=>{
     msg = body.value
})
function openGmail() {
    
    var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(recipient) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(msg);
    window.open(gmailUrl, '_blank');
    location.reload();
  }