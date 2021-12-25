let card=document.querySelectorAll(".col-lg-4");

let t1= new TimelineMax();
t1.fromTo(card,2,{x:"-50%",opacity:0},{x:"0%",opacity:1});