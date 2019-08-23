function menu(){
  let tabcontent = document.querySelector(".tabcontent")
  tabcontent.style.display = 'block';
  tabcontent.style.height = '700px';
  tabcontent.style.textAlign = "center";


  let text = document.createElement('p');
  text.textContent = 'Our menu has an array of artisan flavors ready to amaze your pallete.'


  let menu = {
    Antipasta: [
      {
        item: 'Carpaccio di Manzo',
        price: 20
      },
      {
        item: 'Affettati e Formaggio ',
        price: 38
      },
      {
        item: 'Vitello Tonnato',
        price: 20
      },
      {
        item: 'Salsiccia Calabrese',
        price: 15
      }
    ],
    Entrees: [
      {
        item: 'Risotto Sottobosco',
        price: 30
      },
      {
        item: 'Taglierini',
        price: 32
      },
      {
        item: 'Lasagna alla Gino',
        price: 29
      },
      {
        item: 'Gnocchi',
        price: 26
      },
      {
        item: 'Spaghetti Aglio e Olio',
        price: 21
      }
    ],
    Desserts: [
      {
        item: 'Tiramisu',
        price: 14
      },
      {
        item: 'Cioccolatissimo',
        price: 14
      },
      {
        item: 'Torta Al Formaggio',
        price: 14
      }
    ]
  };

  tabcontent.appendChild(text);
  for (let [key,value] of Object.entries(menu)){
    let heading = header(key)
    console.log(heading)
    tabcontent.appendChild(header(key));  
    tabcontent.append(...menuItems(value));
  }
  return tabcontent
}

function header(string){
  let header = document.createElement('h2');
  header.classList.add('menu-header');
  header.textContent = string;
  return header;
}

function menuItems(value){
  let result = [];
  for (let i=0; i < value.length; i++) {

    let item = value[i]['item'];
    let cost = value[i]['price'];
    let p = document.createElement('p');
    p.classList.add('menu-item');
    p.innerHTML= `${item} <span class=cost> ${cost}</span>`;
    result.push(p);
  }
  return result;
}

export default menu;