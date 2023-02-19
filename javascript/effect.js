let h2Elements = document.getElementsByTagName("h2");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

// Loop over each h2 element
for (let i = 0; i < h2Elements.length; i++) {
  let h2Element = h2Elements[i];
  let text = h2Element.textContent;
  h2Element.setAttribute("data-value", text);

function loopOver() {
    let iteration = 0;
        
    clearInterval(interval);
    
    interval = setInterval(() => {
        h2Element.innerText = h2Element.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return h2Element.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= h2Element.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 15);
}

    loopOver();

    h2Element.onmouseover = event => loopOver();

}

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