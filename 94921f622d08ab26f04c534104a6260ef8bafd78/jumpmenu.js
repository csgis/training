function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
};


function createSubMenu(){
    var jumpMenu = document.getElementById("jumpMenu")
    document.querySelectorAll("h1")[0].remove();
    headlines = document.querySelectorAll("h1, h2, h3");
    let subMenu = ""
    headlines.forEach((headlineItem) => {
      let subClassName = headlineItem.nodeName == 'H1' ? 'first' : (headlineItem.nodeName == 'H2') ? 'second' : 'third'
      let jumpName = truncate(headlineItem.innerText, 23)
      subMenu = subMenu + `<li><a href="#${headlineItem.id}" class="${subClassName}">${jumpName}</a></li>`
      });
  
    jumpMenu.innerHTML = `<ul>${subMenu}</ul>`
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createSubMenu()
  });
  

let images = document.querySelectorAll("img");

images.forEach(function(el){
          var title = el.alt;
          var caption = document.createElement("small")
          element.classList.add("caption");
          caption.innerText = title 
          el.parentNode.insertBefore(caption,el.nextSibling);
      }); 
