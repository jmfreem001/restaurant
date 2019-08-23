import chef from './redcharlie.jpg';

function about(){

  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.setAttribute('style', "display:block;")
  let text = document.createElement('p');
  text.innerHTML = "We are committed to serving only the best quality ingredients." + 
  "\nOur chef, Peter Generico (pictured), scours local markets to ensure only the best quality ingredients make it to your plate."+
  "\nOur interior decor brings to together the elegance of Paris with the Old World charm of Mama Generico's childhood home."

  let image = new Image();
  image.src = chef;
  image.alt = "Our chef";

  tabcontent.appendChild(image);
  tabcontent.appendChild(text);
  
  return tabcontent;
}

export default about;