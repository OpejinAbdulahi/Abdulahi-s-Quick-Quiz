
const button = document.getElementById('button-uu');

button.addEventListener('mousemove', Onboard);
function Onboard(e) {
  
    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 30)";
}


