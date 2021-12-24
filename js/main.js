// ///Main Javascript
// const delay = ms => new Promise(res => setTimeout(res, ms));
// let body = document.body;
// ///Loading
// let loadingscreen = document.getElementById("loadingscreen")
// let loadingHead = document.querySelector(".loading-head");
// let svgDiv = document.querySelector(".svg-div");
// let svgImg = document.querySelector(".svg-img");
// let loadingBar = document.querySelector(".loading-bar");
// let s1=document.querySelector(".s1");
// let s2=document.querySelector(".s2");
// let mainHead=document.querySelector(".main-head");


// let i = 0;
// let loading = setInterval(function () {
//   loadingHead.textContent = `${i}`;
//   loadingBar.style.width=`${i}%`;
//   i != 100 ? i++ : clearInterval(loading);
// }, 40);
// let t1= new TimelineMax();
// t1.fromTo(loadingBar,5,{width:"0%"},{width:"100%"})
// .fromTo(s1,0.2,{left:"-100%"},{left:"0%"})
// .fromTo(s2,0.2,{left:"100%"},{left:"50%"},"-=0.2")
// .fromTo(mainHead,2,{opacity:0,scale:3},{opacity:1,scale:1},"+=1")
// .fromTo(mainHead,2,{opacity:0},{opacity:0})
// .fromTo(s1,0.2,{left:"-100%"},{left:"-100%"})
// .fromTo(s2,0.2,{left:"100%"},{left:"100%"},"-=0.2");

// //Comment this if its in deployoment stage
// // body.style.height = "auto"
// // body.style.overflowY = "auto"

// svgDiv.addEventListener("animationend", async ()=> {
//     // await delay(5000);
//     loadingscreen.style.display = "none"
//     body.style.height = "auto"
//     body.style.overflowY = "auto"
// });