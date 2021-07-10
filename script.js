let anchorInNav = document.getElementsByClassName("nav")
let glitch = document.getElementsByClassName("glitch")
const tween1 = TweenMax.to(anchorInNav, 2, {textShadow: "0px 0px 20px rgb(240, 240, 240)", color:"#005D5D", yoyoEase:Strong.easeInOut, repeat: -1});   
const tween2 = TweenMax.fromTo(glitch, 2, {textShadow: "0px 0px 5px rgba(0,93,93,.2)", yoyoEase:Strong.easeInOut, repeat: -1}, {textShadow: "0px 0px 20px rgba(0,93,93,.6)", color: "#333333", yoyoEase:Strong.easeInOut, repeat: -1})
tween1();   