var h2Elements = document.getElementsByTagName("h2");
var h1Elements = document.getElementsByTagName("h1");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function loopOver(Element) {
  let iteration = 0;
      
  clearInterval(interval);
  
  interval = setInterval(() => {
    Element.innerText = Element.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return Element.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= Element.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 15);
}

// // Loop over each h2 element
// for (let i = 0; i < h2Elements.length; i++) {
//   let h2Element = h2Elements[i];
//   let text = h2Element.textContent;
//   h2Element.setAttribute("data-value", text);

//     h2Element.onmouseover = event => loopOver(h2Element);
// }

// Loop over each h1 element
for (let i = 0; i < h1Elements.length; i++) {
  let h1Element = h1Elements[i];
  let text = h1Element.textContent;
  h1Element.setAttribute("data-value", text);

    h1Element.onmouseover = event => loopOver(h1Element);
}

loopOver(h1Elements[0]);


// document.querySelector("h2").onmouseover = event => {  
//   let iteration = 0;
  
//   clearInterval(interval);
  
//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if(index < iteration) {
//           return event.target.dataset.value[index];
//         }
      
//         return letters[Math.floor(Math.random() * 26)]
//       })
//       .join("");
    
//     if(iteration >= event.target.dataset.value.length){ 
//       clearInterval(interval);
//     }
    
//     iteration += 1 / 3;
//   }, 30);
// }