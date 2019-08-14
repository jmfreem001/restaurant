
function loader() {

  let container = document.getElementById('content');
  container.appendChild(header());
  container.appendChild(content());


  return container
}

function header(){

  let header = document.createElement('div');
  header.classList.add('header')
  let title = document.createElement('h1');
  title.textContent = "Generico's"
  let tagline = document.createElement('p');
  tagline.textContent = "Elegant. Refined. Delicious."

  header.appendChild(title);
  header.appendChild(tagline);

  return header;
}


function content(){
  
  let content = document.createElement('div');
  content.classList.add('content');
  let home = document.createElement('button');
  home.classList.add('tab');
  home.textContent = 'Home';
  let about = document.createElement('button');
  about.classList.add('tab');
  about.textContent = 'About';
  let menu = document.createElement('button');
  menu.classList.add('tab');
  menu.textContent = 'Menu';
  let contact = document.createElement('button');
  contact.classList.add('tab');
  contact.textContent = 'Contact Us';
 
  content.appendChild(home);
  content.appendChild(about);
  content.appendChild(menu);
  content.appendChild(contact);

  content.appendChild(tabcontent());

  return content;
}


function tabcontent(){
  let tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.setAttribute("style", "display: none")

  return tabcontent;
}

export default loader;