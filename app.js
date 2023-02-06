//menu items
//database that contains an array of object menu
const menu = [
  {
    id: 1,
    title: "strawberry pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/pancakes.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "pizza",
    category: "lunch",
    price: 13.99,
    img: "./images/pizza.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/shakes.jpg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "sweetened hamburger",
    category: "breakfast",
    price: 20.99,
    img: "./images/hamburger.jpg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "milkish cereal",
    category: "breakfast",
    price: 22.99,
    img: "./images/cereal.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo wine",
    category: "wine",
    price: 18.99,
    img: "./images/wine.jpg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "burger overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/burger-2.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic burger",
    category: "lunch",
    price: 12.99,
    img: "./images/burger-3.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/shakes.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "French Burger Fries",
    category: "lunch",
    price: 16.99,
    img: "./images/burger.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
//target the class section-center as this would be where to place the food items
const sectionCenter = document.querySelector(".section-center");
//target the btn container as this would be where we are displaying the buttons
const btnCategoryMenu = document.querySelector(".btn-container");
let activeBtn = document.getElementById('btn')
// activeBtn.addEventListener('click', function(){
//   activeBtn.style.active.backgroundColor='#c59d5f'
// })
//pass in the menu array as an argument into the displayMenu function
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  displayMenuBtns()
});
//arrowfxn
const displayMenu = (menuList) => {
  //map through the menu array
  let showMenu = menuList.map((menus) => {
    // console.log(menus);
    return ` <article class="menu-item">
        <img src=${menus.img} alt=${menus.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${menus.title}</h4>
                <h4 class="price">$${menus.price}</h4>
            </header>
            <p class="item-text">
            ${menus.desc}
            </p>
        </div>
    </article>`;
  });
  showMenu = showMenu.join("");
  sectionCenter.innerHTML = showMenu;
};

function displayMenuBtns() {
  let categories = menu.reduce(
    function (values, item) {
      // console.log(item.category);
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
      //we are returning an array in the reduce fxn with a string of all that references all the item
    },
    ["all"]
  );
  // console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      return `
        <button class="filter-btn" type="button" data-class=${category}>${category}</button>
        `;
    })
    .join("");
  // console.log(categoryBtns);
  btnCategoryMenu.innerHTML = categoryBtns;
  //buttons
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filterMenuItems
  //performing an array method to map through the buttons
  filterBtns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.class;
      // console.log(e);
      const menuCategory = menu.filter((menuItems) => {
        // console.log(menuItems);
        //condition to filter the menu items array
        //filter manipulates the size of the array and returns based on conditions
        if (menuItems.category === category) {
          return menuItems;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
  
}

