import chef from './redcharlie.jpg';

function about(){

  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.setAttribute('style', "display:block;")
  let text = document.createElement('p');
  text.innerHTML = "We are committed to serving only the best quality ingredients." + 
  "Our chef scours local markets and ................................................................................................................."+
  ".................................................................................."


  let image = new Image();
  image.src = chef;
  image.alt = "Our chef";

  tabcontent.appendChild(image);
  tabcontent.appendChild(text);
  
  return tabcontent;
}

export default about;