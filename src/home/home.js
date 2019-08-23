import flour from  './making-pasta-mae-mu.jpg'
function home(){
  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.setAttribute('style', "display:block;")
  let text = document.createElement('p');
  text.textContent = 'We are Genericos. Come experience the joy and amazement. '


  
  let image = new Image();
  image.src = flour;
  image.alt = "Making pasta";

  tabcontent.appendChild(image);
  tabcontent.appendChild(text);
  

  return tabcontent
}

export default home;