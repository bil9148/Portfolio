function toggleMenu() {
  var links = document.getElementById("links");
  links.classList.toggle("active");

  const line1 = document.getElementById('line1');
  const line2 = document.getElementById('line2');
  const line3 = document.getElementById('line3');

  const cross = document.getElementById('cross');

  if(links.className == "links active"){
    document.getElementById("main").style.opacity = 0.1;

    line1.style.display="none";
    line2.style.display="none";
    line3.style.display="none";

    cross.style.display="block";
  }
  else{
    document.getElementById("main").style.opacity = 1;

    line1.style.display="block";
    line2.style.display="block";
    line3.style.display="block";

    cross.style.display="none";
  }
}

