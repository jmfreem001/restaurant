import flag from './italian-flag.jpg';
import foodPasta from './food-and-pasta-janko-ferlic-.jpg';

function loader() {

  let container = document.getElementById('content');
  container.appendChild(header());
  container.appendChild(tabs());
  container.appendChild(foodStuff());
  container.appendChild(italy());


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

function italy(){
  let italy = document.createElement('div');
  italy.classList.add('flag');

  let flagImage = new Image(320, 200);
  flagImage.src = flag;
  flagImage.alt = "Italian flag";
  italy.append(flagImage)

  return italy;

}

function foodStuff(){
  let foodWine = document.createElement('div');
  foodWine.classList.add('food');

  let food = new Image(250, 320);
  food.src = foodPasta;
  food.alt = "Pasta and wine";
  foodWine.append(food);

  return foodWine;
}

export default loader;