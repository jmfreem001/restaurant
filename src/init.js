
function loader() {

  let container = document.getElementById('content');
  container.appendChild(header());
  container.appendChild(tabs());
  return container;
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


function tabs(){
  
  let tabs = document.createElement('div');
  tabs.classList.add('tabs');
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
 
  tabs.appendChild(home);
  tabs.appendChild(about);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  tabs.appendChild(tabcontent());

  return tabs;
}


function tabcontent(){
  let tabcontent = document.createElement('div');
  tabcontent.classList.add('tabcontent');
  tabcontent.setAttribute("style", "display: none")

  return tabcontent;
}

export default loader;