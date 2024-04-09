const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
 
const colors = [
  "#38512e",
  "#38512e",
  "#0C5A22",
  "#0C5A22",
  "#0C5A22",
  "#177032",
  "#177032",
  "#177032",
  "#2A8A48",
  "#2A8A48",
  "#2A8A48",
  "#4FAC6D",
  "#4FAC6D",
  "#4FAC6D",
  "#7AC591",
  "#7AC591",
  "#7AC591",
  "#ABE2BC",
  "#ABE2BC",
  "#ABE2BC",
  "#CFF4DB",
  "#CFF4DB",
  "#CFF4DB"
];
 
circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});
 
window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
 
});
 
function animateCircles() {
 
  let x = coords.x;
  let y = coords.y;
 
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
   
    circle.style.scale = (circles.length - index) / circles.length;
   
    circle.x = x;
    circle.y = y;
 
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}
 
animateCircles();