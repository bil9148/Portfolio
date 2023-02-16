function showWork(element){
    const parentId = element.parentNode.id;
    const parent = document.getElementById(parentId);
    parent.style.display = "none";
    var shown = document.getElementById(parentId + "S");
    shown.style.display = "block";
}

function showCover(element){
    const parentId = element.parentNode.id;
    const parent = document.getElementById(parentId);
    parent.style.display = "none";
    var shown = document.getElementById(parentId.slice(0,-1));
    shown.style.display = "block";
}