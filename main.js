var canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
var mouseevnt=""
var lastpositionofx,lastpositionofy
color="red"
widthofline=1
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown (e){
    color=document.getElementById("color").value 
    widthofline=document.getElementById("widthofline").value
    mouseevnt="mousedown"
}
canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseevnt="mouseup"
}
canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseevnt="mouseleave"
}
canvas.addEventListener("mousemove",my_mousemove)
function my_mousemove (e){
    currentpositionofmousex=e.clientX-canvas.offsetLeft
    currentpositionofmousey=e.clientY-canvas.offsetTop
    if(mouseevnt=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=widthofline
        console.log("last position ofx and y cordinates= ")
        console.log("x= "+lastpositionofx+" y= "+lastpositionofy)
        //ctx.moveTo(lastpositionofx,lastpositionofy)
        console.log("current position of x and y cordinates")
        console.log("x= "+currentpositionofmousex+" y= "+currentpositionofmousey)
        ctx.arc(currentpositionofmousex,currentpositionofmousey,20,0,2*Math.PI)
        ctx.stroke()
    }
    lastpositionofx=currentpositionofmousex
    lastpositionofy=currentpositionofmousey
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}