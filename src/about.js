
function about(){
  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.setAttribute('style', "display:block;")
  let text = document.createElement('p');
  text.textContent = 'Some about text.'
  tabcontent.appendChild(text);

  return tabcontent
}

export default about;