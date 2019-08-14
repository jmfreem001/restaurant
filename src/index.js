// import './static.css';
import loader from './init';
import home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';

// import makePasta from './making-pasta-mae-mu.jpg';


loader()

const buttons = document.querySelectorAll('.tab')
buttons.forEach(button => addEventListener('click', tabLoader));

function tabLoader(e){
  clear()
  let tab = e.target.textContent;
  switch (tab) {
    case "Home":
      home()
      break;
    case "About":
      about()
      break;
    case "Menu":
      menu()
      break;
    case "Contact Us":
      contact()
      break;

  }
}

function clear(){
  let tabcontent = document.querySelector(".tabcontent");
  while (tabcontent.children.length > 0){
    tabcontent.removeChild(tabcontent.children[0]);
  }
  tabcontent.setAttribute("style", "display: none")

}