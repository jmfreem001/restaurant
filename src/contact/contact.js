import waiter from './waiter-serving-by-kate-townsen.jpg'

function contact(){
  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.setAttribute('style', "display:block;")
  let header = document.createElement('p');
  header.textContent = 'Please contact us for your catering needs:'
  let text1 = document.createElement('p');
  text1.textContent = 'Phone: 555-555-3856'
  let text2 = document.createElement('p');
  text2.textContent = 'email: genericos@fakemail.com'


  let image = new Image();
  image.src = waiter;
  image.alt = "Waiter carrying a tray";

  tabcontent.appendChild(image);
  tabcontent.appendChild(header);
  tabcontent.appendChild(text1);
  tabcontent.appendChild(text2);

  return tabcontent
}

export default contact;